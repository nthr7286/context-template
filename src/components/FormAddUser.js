import React from 'react'
import useNewUser from '../hooks/useNewUser'
export default () => {
  const {
     handleChangeNewUserId,
     handleChangeNewUserName,
     handleSubmitNewUser
  } = useNewUser()
  return (
    <form onSubmit={ handleSubmitNewUser }>
      <label>
        id:
        <input type="text" name="id" onChange={ handleChangeNewUserId } />
      </label>
      <label>
        Name:
        <input type="text" name="name" onChange={ handleChangeNewUserName } />
      </label>
      <button type="submit" children="Submit"/>
    </form>
  )
}