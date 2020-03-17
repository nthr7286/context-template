import React from 'react'
import { useUsersContext } from '../contexts/Context'
import ListUserItem from './ListUserItem'
export default () => {
  const [users] = useUsersContext()
  return (
    <ul style={{ listStyleType:"none", padding: 0, margin: 0 }}>
      { users.map(user =>
          <ListUserItem key={user.id} user={user} />
      )}
    </ul>
  )
}