import React, {FC} from 'react';
import {Iuser} from '../types/types';
import UserItem from './UserItem';

interface UserListProps{
      users: Iuser[];
}



const Userlist: FC<UserListProps> = ({users}) => {
  return (
    <div>
        {users.map(user=>
                <UserItem key={user.id} user={user}/>
            )}
    </div>
  )
}

export default Userlist