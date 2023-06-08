import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id!== id));
  };

  const handleEditTodo = (id, text) => {
    setTodos(todos.map(todo => (todo.id === id? {...todo, text } : todo)));
  };

  return (
    <div >
      <h1>To-Do List</h1>
      <input  type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <Button  onClick={handleAddTodo}>Add</Button>
      <ul >
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <Button  onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
            <input type="text" value={todo.text} onChange={(e) => handleEditTodo(todo.id, e.target.value)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;