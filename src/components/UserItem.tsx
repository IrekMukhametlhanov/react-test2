import React, { FC } from 'react'
import { Iuser } from '../types/types'

interface UserItemProps{
    user: Iuser;
}


const UserItem:FC<UserItemProps> = ({user}) => {
  return (
    <div  style={{padding: 15, border: '1px solid lightgray'}}>
    {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}

   </div>
  )
}

export default UserItem