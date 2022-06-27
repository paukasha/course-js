import axios from 'axios';
import {setLocation, setPhotos} from '../reducers/main';
import {setCurrentPhoto, setOrDeleteLike, setContent} from '../reducers/photos';
import {setIsLoading} from '../reducers/auth';

import { preloadImage } from '@/helpers/preloadImage'


export const getPhotos = () => {
  let url = "https://api.unsplash.com/photos?per_page=2";
  return async (dispatch) => {
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Client-ID avGYLy8xj-R8I3tiRSkeVZvRV0R39Ws34mZod3qn3Zo`,
        },
      }).then(res => {
        let photosList = res.data
        photosList = photosList.map((el) => {
          preloadImage(el.links.download_location).then(res => {
            return {
              ...el,
              blobLink: res
            }
          })

          return el
        })
        console.log(photosList);
        return photosList
      }).then(photosList => {
        console.log(photosList)
        dispatch(setPhotos(photosList));
      })

    } catch (e) {
      console.log(e);
    }
  };
};

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
      return await axios.get(`https://api.unsplash.com/photos/${id}`,  {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(res => {
        return  dispatch(setCurrentPhoto(res.data))
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
      let photos =   axios.get(`https://api.unsplash.com/photos/?page=${currentPage}&per_page=2`, {
        headers: {
          Authorization: `Client-ID avGYLy8xj-R8I3tiRSkeVZvRV0R39Ws34mZod3qn3Zo`,
        }
      }).then(res => {
        let photos = res.data
        photos = photos.map(el => {
          preloadImage(el.links.download_location).then(res => {
            return {
              ...el,
              blobLink: res
            }
          })

          return el
        })


        return  {
          photos,
          total: res.headers['x-total']
        }

      }).then((res) => {
        currentPage+= 1
        dispatch(setContent(res.photos, currentPage, res.total))
      }).finally(() => {
        setIsLoading(false)
      })
    }
  }
}
