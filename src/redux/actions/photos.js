import axios from 'axios';
import { setPhotos } from '../reducers/main';
import { setContent, setCurrentPhoto, setOrDeleteLike } from '../reducers/photos';
import { setIsLoading } from '../reducers/auth';

import { preloadAsBlob } from '@/helpers/preloadAsBlob'

export const setOrDeleteLikeByUser = (photo) => {
  let accessToken = localStorage.getItem('accessToken')
  return async dispatch => {
    try {
      if (photo.liked_by_user == false) {
        const res = await axios.post(`https://api.unsplash.com/photos/${photo.id}/like/`, null, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        dispatch(setOrDeleteLike(res.data.photo))
        dispatch(setCurrentPhoto(res.data.photo))
      } else {
        const res = await axios.delete(`https://api.unsplash.com/photos/${photo.id}/like/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })

        dispatch(setOrDeleteLike(res.data.photo))
        dispatch(setCurrentPhoto(res.data.photo))
      }

    } catch (e) {
      console.log(e)
    }

  }
}


export const getCurrentPhoto = (id) => {
  let accessToken = localStorage.getItem('accessToken')

  return async dispatch => {
    try {
      return await axios.get(`https://api.unsplash.com/photos/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(async (res) => {
        let currentPhoto = res.data
        const result = await preloadAsBlob(currentPhoto.urls.full);
        currentPhoto.urls.full = result;
        return dispatch(setCurrentPhoto(currentPhoto))
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const getContent = (currentPage, isLoading) => {
  let accessToken = localStorage.getItem('accessToken')
  return async dispatch => {
    if (isLoading) {
      let photos = axios.get(`https://api.unsplash.com/photos/?page=${currentPage}&per_page=10`, {
        headers: {
          Authorization: `Client-ID avGYLy8xj-R8I3tiRSkeVZvRV0R39Ws34mZod3qn3Zo`,
        }
      }).then(async (res) => {
        let photos = res.data;

        const asyncArray = photos.map((el) => async () => {

          const result = await preloadAsBlob(el.urls.full);

          const image = new Image();

          image.src = result;

          return image.src;
        });

        const result = await Promise.all(asyncArray.map((fn) => fn()));

        photos = photos.map((el, index) => {
          el.urls.full = result[index];

          return el
        });

        return {
          photos,
          total: res.headers['x-total']
        }

      }).then((res) => {
        currentPage += 1
        dispatch(setContent(res.photos, currentPage, res.total))
        setIsLoading(false)
      }).finally(() => {
        setIsLoading(false)
      })
    }
  }
}

