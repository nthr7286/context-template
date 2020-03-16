import React from 'react'

import { Provider } from './Context'

import ListUsers from './ListUsers'

export default () => <Provider>
  <h1>Hello world!</h1>
  <ListUsers />
</Provider>