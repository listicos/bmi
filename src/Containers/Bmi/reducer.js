import Immutable from 'seamless-immutable'
import { SET_AGE, SET_WEIGHT, SET_HEIGHT, SET_GENDER } from './constants'

const INITIAL_STATE: BmiState = Immutable({
  age: 18,
  weight: 20,
  height: 40,
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
