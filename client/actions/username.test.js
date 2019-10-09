import {
  getUsernamePending,
  getUsernameSuccess,
  GET_USERNAME_PENDING,
  GET_USERNAME_SUCCESS
} from './username'

import { ERROR } from './error'

jest.mock('../api/requestor', () => {
  return (endpoint, method, payload) => {
    const id = Number(endpoint.split('/').pop())
    if (id === 33) {
      return Promise.reject(new Error('id not found'))
    } else {
      return Promise.resolve({
        id: id
      })
    }
  }
})

describe('username action tests', () => {
  it('getUsernamePending returns a GET_USERTYPE_PENDING action', () => {
    const action = getUsernamePending()
    expect(action.type).toBe(GET_USERNAME_PENDING)
  })

  it('getUsernameSuccess returns a GET_USERNAME_SUCCESS action', () => {
    const userType = 'marvin'
    const action = getUsernameSuccess(userType)
    expect(action.type).toBe(GET_USERNAME_SUCCESS)
  })
})
