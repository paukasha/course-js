import axios from 'axios';
import {setLocation, setPhotos} from '../reducers/main';
import {setCurrentPhoto, setOrDeleteLike, setContent} from '../reducers/photos';
import {setIsLoading} from '../reducers/auth';



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
      axios.get(`https://api.unsplash.com/photos/?page=${currentPage}&per_page=10`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(res => {
        res.data.map(el => {
        })
        currentPage+= 1
        dispatch(setContent(res.data, currentPage, res.headers['x-total']))
      }).finally(() => {
        setIsLoading(false)
      })
    }
  }
}
