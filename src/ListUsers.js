import React, { Fragment } from 'react'
import { useUsersContext } from './Context'
import { ADD } from './types'
import ListUserItem from './ListUserItem'
export default () => {
  const [users, dispatch] = useUsersContext()
  const payload = {id: 38464, name:"Natsuki Kutomi"}
  return <Fragment>
    <ul style={{ listStyleType:"none", padding: 0, margin: 0 }}>
      { users.map(user =>
          <ListUserItem key={user.id} user={user} />
      )}
    </ul>
    <button onClick={ () => dispatch({type: ADD, ...payload}) }>ADD</button>
  </Fragment>
}