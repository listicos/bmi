import Immutable from 'seamless-immutable'
import { FETCH_USER, FETCH_USER_PARAMETERS } from './constants'

const INITIAL_STATE: BmiState = Immutable({
  isFetching: false,
  error: false,
  parameters: {
    name: '',
    email: ''
  }
})

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_USER_PARAMETERS:
      return {
        ...state,
        parameters: action.payload,
        isFetching: false
      }
    default:
      return state
  }
}
