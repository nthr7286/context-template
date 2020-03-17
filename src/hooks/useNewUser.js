import { useState } from 'react'
import { useUsersContext } from '../contexts/Context'
import { ADD } from '../contexts/types'

export default () => {
  const [newUser, setNewUser] = useState({})
  const dispatch = useUsersContext()[1]
  const handleChangeNewUserId = e => {
    setNewUser({...newUser, id: e.target.value})
  }
  const handleChangeNewUserName = e => {
    setNewUser({...newUser, name: e.target.value})
  }
  const handleSubmitNewUser = e => {
    e.preventDefault()
    dispatch({type: ADD, ...newUser})
  }
  return ({
    handleChangeNewUserId,
    handleChangeNewUserName,
    handleSubmitNewUser,
  })
}