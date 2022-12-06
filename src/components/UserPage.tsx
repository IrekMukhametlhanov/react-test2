import axios from 'axios';
import React, { FC, useState,useEffect } from 'react';
import List from '../components/List';
import { Iuser } from '../types/types';
import UserItem from './UserItem';
import { useNavigate } from 'react-router-dom';

const UserPage:FC = () => {
    const [users, setUsers] = useState<Iuser[]>([]);
    const history = useNavigate();
  
    useEffect(()=>{
      fetchUsers();
  
    },
    [])
  
    async function fetchUsers(){
      try {
      const response = await axios.get<Iuser[]>('https://jsonplaceholder.typicode.com/users') 
      setUsers(response.data)
      } catch (error) {
        alert(error)
      }
    }
  
 
  return (
  
          <List 
      Items={users} 
      renderItem={(user: Iuser)=> <UserItem onClick={(user)=> history('./'+user.id)} user={user} key={user.id}/>}/>
  
  )
}

export default UserPage