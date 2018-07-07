import Immutable from 'seamless-immutable'
import { SET_USER_NAME, SET_USER_EMAIL } from './constants'

const INITIAL_STATE: BmiState = Immutable({
  isFetching: false,
  error: false,
  name: '',
  email: ''
})

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        name: action.payload,
        isFetching: true
      }
    case SET_USER_EMAIL:
      return {
        ...state,
        email: action.payload,
        isFetching: false
      }
    default:
      return state
  }
}
