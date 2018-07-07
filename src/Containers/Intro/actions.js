import { SET_USER_NAME, SET_USER_EMAIL } from './constants'

export const updateUserName = (name) => {
  return {
    type: SET_USER_NAME,
    payload: name
  }
}

export const updateUserEmail = (email) => {
  return {
    type: SET_USER_EMAIL,
    payload: email
  }
}
