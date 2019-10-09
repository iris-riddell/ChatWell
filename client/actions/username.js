export const GET_USERNAME_PENDING = 'GET_USERNAME_PENDING'
export const GET_USERNAME_SUCCESS = 'GET_USERNAME_SUCCESS'
export const SELECTED_USERNAME = 'SELECTED_USERNAME'

export function getUsernamePending () {
  return {
    type: GET_USERNAME_PENDING
  }
}

export function getUsernameSuccess (userName) {
  return {
    type: GET_USERNAME_SUCCESS,
    userName
  }
}

export function setUsername (selectedUsername) {
  return {
    type: SELECTED_USERNAME,
    selectedUsername
  }
}
