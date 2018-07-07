import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import BmiReducer from '../Containers/Bmi/reducer'
import UserReducer from '../Containers/Intro/reducer'

export const reducers = combineReducers({
  bmi: BmiReducer,
  user: UserReducer
})

export default (loggerEnable) =>
  createStore(
    reducers,
    {},
    loggerEnable
      ? applyMiddleware(thunkMiddleware, promiseMiddleware(), logger)
      : applyMiddleware(thunkMiddleware, promiseMiddleware())
  )
