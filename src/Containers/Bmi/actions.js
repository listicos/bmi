import { SET_BMI_AGE, SET_BMI_WEIGHT, SET_BMI_HEIGHT, SET_BMI_GENDER } from './constants'

export const updateBmiAge = (age) => {
  return {
    type: SET_BMI_AGE,
    payload: age
  }
}

export const updateBmiWeight = (weight) => {
  return {
    type: SET_BMI_WEIGHT,
    payload: weight
  }
}
export const updateBmiHeight = (height) => {
  return {
    type: SET_BMI_HEIGHT,
    payload: height
  }
}

export const updateBmiGender = (gender) => {
  return {
    type: SET_BMI_GENDER,
    payload: gender
  }
}
