import userEvent from '@testing-library/user-event'
import React from 'react'
import User from './User'

const UserItem = ({ src, alt}) => {
  return (
    <div>
        <img src={src} alt={alt} />
        {/* <p src={src}>email</p> */}
    </div>
  )
}

export default UserItem