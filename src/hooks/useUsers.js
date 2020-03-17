import {
  useReducer,
} from 'react'

import userData from '../userData'

import { SET, ADD, DELETE } from '../contexts/types'

const initialState = JSON.parse(userData)

const reducer = (users, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...users,
        { id: action.id,
          name: action.name
        }
      ]
    case SET: 
      return users.map(user => (
        user.id === action.id
          ? { ...user, 
              name: action.name
            }
          : user
      ))
    case DELETE:
      return users.filter(user => user.id !== action.id)
    default:
      return users
  }
}

export default () => useReducer(reducer, initialState)