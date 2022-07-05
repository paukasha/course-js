const GET_PHOTOS = 'GET_PHOTOS',
  GET_LOCATION = 'GET_LOCATION',
  IS_LOADING = 'IS_LOADING'

const defaultState = {
  location: '',
  isLoading: true,
}

export default function main(state = defaultState, action) {
  switch (action.type) {
    case GET_LOCATION:
      return {
        ...state,
        location: action.payload
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

export const setLocation = location => ({type: GET_LOCATION, payload: location})
export const setIsLoading = (bool) => ({type: IS_LOADING, payload: bool})
