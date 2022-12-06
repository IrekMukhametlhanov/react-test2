import React,{FC,useState,useEffect} from 'react';
import axios from 'axios';
import List from '../components/List';
import { ITodo} from '../types/types';
import TodoItem from './TodoItem';
const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(()=>{
      fetchTodos()
    },
    [])
  
  
  
    async function fetchTodos(){
      try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10') 
      setTodos(response.data)
      } catch (error) {
        alert(error)
      }
    }
  return (
    <List 
    Items={todos} 
    renderItem={(todo: ITodo)=> <TodoItem todo={todo} key={todo.id}/>}/>
  )
}

export default TodosPage