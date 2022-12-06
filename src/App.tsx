

import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <div>
        <Link to="/users">Users</Link>
        <Link to='/todos'>Todos</Link>
      </div>
    <Routes>
            <Route path="/users" element={<UserPage/>}/>
            <Route path="/todos" element={<TodosPage/>}/>
            <Route path="/users/:id" element={<UserItemPage/>}/>
            <Route path="/todo/:id" element={<TodoItemPage/>}/>
            <Route path="*" element={<div>NotFound</div>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
