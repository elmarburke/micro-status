import { createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'

export default function configureStore (preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    thunkMiddleware
  )
}
