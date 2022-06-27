const SET_CONTENT = 'GET_CONTENT',
  SET_OR_DELETE_LIKE = 'SET_OR_DELETE_LIKE',
  SET_CURRENT_PHOTO = 'SET_CURRENT_PHOTO';

const defaultState = {
  content: [],
  photoTotalCount: 0,
  setLikeClassName: '',
  currentPhoto: '',
  currentPage: 1,
}

export default function photos(state = defaultState, action) {
  switch (action.type) {
    case SET_CONTENT:
      return {
        ...state,
        content: [...state.content, ...action.payload.content],
        currentPage: action.payload.currentPage,
        photoTotalCount: action.payload.photoTotalCount,
        isLoading: false
      }

    case SET_OR_DELETE_LIKE:
      return {
        ...state,
        userPhotos: state.userPhotos.map(photo => {
          if (photo.id === action.payload.id) {
            return action.payload
          }
          return photo
        }),
        currentPhoto: action.payload
      }

    case SET_CURRENT_PHOTO:
      return {
        ...state,
        currentPhoto: action.payload
      }

    default:
      return state
  }
}


export const setContent = (content, currentPage, photoTotalCount) => ({
  type: SET_CONTENT,
  payload: {content, currentPage, photoTotalCount}
})

export const setOrDeleteLike = (photo) => ({type: SET_OR_DELETE_LIKE, payload: photo})

export const setCurrentPhoto = photo => ({type: SET_CURRENT_PHOTO, payload: photo})