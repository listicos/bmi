import Immutable from 'seamless-immutable'
import { FETCH_BMI_RESULT, FETCH_BMI, FETCH_BMI_PARAMETERS } from './constants'

const INITIAL_STATE: BmiState = Immutable({
  isFetching: false,
  error: false,
  parameters: {
    age: 18,
    weight: 160,
    height: 70,
    gender: ''
  }
})

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BMI:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_BMI_PARAMETERS:
      return {
        ...state,
        parameters: action.payload,
        isFetching: false
      }
    default:
      return state
  }
}
