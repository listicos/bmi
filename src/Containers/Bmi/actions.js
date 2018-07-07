import { SET_AGE, SET_WEIGHT, SET_HEIGHT, SET_GENDER } from './constants'

export const updateAge = (age) => {
  return {
    type: SET_AGE,
    payload: age
  }
}

export const updateWeight = (weight) => {
  return {
    type: SET_WEIGHT,
    payload: weight
  }
}
export const updateHeight = (height) => {
  return {
    type: SET_HEIGHT,
    payload: height
  }
}

export const updateGender = (gender) => {
  return {
    type: SET_GENDER,
    payload: gender
  }
}
