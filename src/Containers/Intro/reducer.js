import Immutable from 'seamless-immutable'
import { SET_USER_NAME, SET_USER_EMAIL } from './constants'

const INITIAL_STATE = Immutable({
  name: '',
  email: ''
})

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        name: action.payload
      }
    case SET_USER_EMAIL:
      return {
        ...state,
        email: action.payload
      }
    default:
      return state
  }
}
