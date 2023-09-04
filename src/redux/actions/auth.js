import {setUser} from '../reducers/auth'
import axios from 'axios';
import * as dotenv from "dotenv";
dotenv.config();
const production = process.env.NODE_ENV === 'production';

let oauthUrl = 'https://unsplash.com/oauth/token',
  client_id = process.env.REACT_APP_CLIENT_ID,
  client_secret = process.env.REACT_APP_CLIENT_SECRET,
  redirect_uri = production ? 'https://paukasha.github.io/course-js/' : 'http://localhost:3001/',
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





