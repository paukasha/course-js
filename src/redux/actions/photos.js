import axios from 'axios';
import {setCurrentPhoto, setOrDeleteLike, setPhotos} from '../reducers/photos';
import {setIsLoading} from '../reducers/auth';
import {preloadAsBlob} from '@/helpers/preloadAsBlob';

export const setOrDeleteLikeByUser = (photo) => {
  let accessToken = localStorage.getItem('accessToken');
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

        dispatch(setOrDeleteLike(res.data.photo));
        dispatch(setCurrentPhoto(res.data.photo));
      }

    } catch (e) {
      console.log(e);
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
      console.log(e);
    }
  }
}

export const getPhotos = (currentPage, isLoading) => {
  return async dispatch => {
    if (isLoading) {
      axios.get(`https://api.unsplash.com/photos/?page=${currentPage}&per_page=10`, {
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
          el.urls.small = result[index];
          return el
        })

        currentPage += 1
        dispatch(setPhotos(photos, currentPage, res.headers['x-total']))

      }).catch(e => {
        console.log(e)
      }).finally(() => {
        setIsLoading(false)
      })
    }
  }
}

