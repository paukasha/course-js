const LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  IS_LOADING = 'IS_LOADING';

const defaultState = {
  currentUser: {},
  isAuth: false,
  isLoading: true
}

export default function auth(state = defaultState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      }
    }


    case LOGOUT:
      localStorage.removeItem('accessToken')
      return {
        ...state,
        currentUser: {},
        isAuth: false,
        isLoading: false
      }

    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state
  }
}

export const setUser = user => ({type: LOGIN, payload: user})

export const logout = () => ({type: LOGOUT})

export const setIsLoading = (bool) => ({type: IS_LOADING, payload: bool})



