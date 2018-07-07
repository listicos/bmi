import { FETCH_USER, FETCH_USER_PARAMETERS } from './constants'

export const updateUserParameters = ({ age, weight, height, gender }) => {
  return {
    type: FETCH_USER_PARAMETERS,
    payload: { age, weight, height, gender }
  }
}
