import Immutable from 'seamless-immutable'
import { SET_AGE, SET_WEIGHT, SET_HEIGHT, SET_GENDER } from './constants'

const INITIAL_STATE = Immutable({
  age: 20,
  weight: 75,
  height: 175,
  gender: ''
})

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_AGE:
      return {
        ...state,
        age: action.payload
      }
    case SET_WEIGHT:
      return {
        ...state,
        weight: action.payload
      }
    case SET_HEIGHT:
      return {
        ...state,
        height: action.payload
      }
    case SET_GENDER:
      return {
        ...state,
        gender: action.payload
      }
    default:
      return state
  }
}
