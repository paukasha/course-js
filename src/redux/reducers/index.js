import {applyMiddleware, combineReducers, createStore} from 'redux';
import auth from './auth';
import {composeWithDevTools} from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import main from './main';
import photos from './photos';

const rootReducer = combineReducers({
  auth,
  main,
  photos
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
