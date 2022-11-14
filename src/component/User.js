import React from 'react'
import UserItem from './UserItem'
import styles from '../component/User.module.css'

const User = ({images}) => {
  return (
    <div className={styles["image-list"]}>
        {
        images.map((user) => (
            <UserItem
             key={user.id} 
             src={user.picture.medium}
             alt={user.alt_description}/>
        ))
        }

    </div>
  )
}

export default User