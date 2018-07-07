import { FETCH_BMI_RESULT, FETCH_BMI, FETCH_BMI_PARAMETERS } from './constants'

export const updateBmiParameters = ({ age, weight, height, gender }) => {
  return {
    type: FETCH_BMI_PARAMETERS,
    payload: { age, weight, height, gender }
  }
}
