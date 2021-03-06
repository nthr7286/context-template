import React from 'react'
import { useUsersContext } from '../contexts/Context'
import { SET, DELETE } from '../contexts/types'
export default ({user: {id, name}}) => {
  const dispatch = useUsersContext()[1]
  return  <li>
    <span>{name}</span>
    <button onClick={ () => dispatch({ type: SET,  id, name: "Natsuki Kutomi" }) }>EDIT</button>
    <button onClick={ () => dispatch({ type: DELETE,  id }) }>DELETE</button>
  </li>
  
}