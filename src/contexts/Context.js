import React, {
  createContext,
  useContext,
} from 'react'

import useUsers from '../hooks/useUsers'

const Context = createContext()

export const Provider =  ({ children }) => {
  return <Context.Provider
   value={ useUsers() }
   children={ children }
  />
}

export const useUsersContext = () => useContext(Context)