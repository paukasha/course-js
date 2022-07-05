import {setUser} from '../reducers/auth'
import axios from 'axios';

const production = process.env.NODE_ENV === 'production';

let oauthUrl = 'https://unsplash.com/oauth/token',
  client_id = 'avGYLy8xj-R8I3tiRSkeVZvRV0R39Ws34mZod3qn3Zo',
  client_secret = '5mvRrbXVYQDCpa7fYclguxWgFypVpz5ByKxI4CMAHoA',
  redirect_uri = production ? 'http://c914428q.beget.tech/' : 'http://localhost:3001/',
  grant_type = 'authorization_code',
  scope = 'public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections',
  response_type = 'code';
export const unsplashAuthLink = `https://unsplash.com/oauth/authorize/?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`


export const login = () => {
  let accessToken = localStorage.getItem('accessToken')
  return async dispatch => {
    if (accessToken) {
      try {
        return await axios.get('https://api.unsplash.com/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }).then(res => {
          dispatch(setUser(res.data))
        })

      } catch (e) {
        localStorage.removeItem('accessToken')
        console.log(e)
      }
    }
  }
}


export const auth = (codeSearchParam, cback) => {
  let accessToken = localStorage.getItem('accessToken')
  return async dispatch => {
    if (codeSearchParam) {
      try {
        return await axios.post(oauthUrl, null, {
            params: {
              client_id: client_id,
              client_secret: client_secret,
              redirect_uri: redirect_uri,
              code: codeSearchParam,
              grant_type: grant_type
            }
          }
        ).then(response => {
          localStorage.setItem('accessToken', response.data.access_token)
          return axios.get('https://api.unsplash.com/me', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
          }).then(response => {
            dispatch(setUser(response.data))
            cback()
          })
        })
      } catch (e) {
        localStorage.removeItem('accessToken')
        console.log(e)
      }
    } else if (accessToken) {
      dispatch(login())
    }
  }
}





