import React from 'react'

import { Provider } from './contexts/Context'

import ListUsers from './components/ListUsers'
import FormAddUser from './components/FormAddUser'

export default () => <Provider>
  <h1>Hello world!</h1>
  <FormAddUser />
  <ListUsers />
</Provider>