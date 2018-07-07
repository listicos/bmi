import Immutable from 'seamless-immutable'
import { SET_BMI_AGE, SET_BMI_WEIGHT, SET_BMI_HEIGHT, SET_BMI_GENDER } from './constants'

const INITIAL_STATE: BmiState = Immutable({
  age: 18,
  weight: 160,
  height: 70,
  gender: ''
})

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_BMI_AGE:
      return {
        ...state,
        age: action.payload
      }
    case SET_BMI_WEIGHT:
      return {
        ...state,
        weight: action.payload
      }
    case SET_BMI_HEIGHT:
      return {
        ...state,
        height: action.payload
      }
    case SET_BMI_GENDER:
      return {
        ...state,
        gender: action.payload
      }
    default:
      return state
  }
}
