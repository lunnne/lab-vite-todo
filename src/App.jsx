import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddForm from './components/AddForm';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, todo: 'happy coding', status: 'done' },
    { id: 2, todo: 'happy love', status: 'progress' },
  ]);

  const handleAdd = (todo) => {
    setTodos([...todos, { id: Math.random(), todo, status: 'progress' }]);
    console.log(todos);
  };
  const handleDelete = (todo) => {
    const deleted = todos.filter((item) => item.id !== todo.id);
    setTodos(deleted);
  };

  const handleUpdate = (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };

  return (
    <section>
      <AddForm onAdd={handleAdd} />
      <h1>To do</h1>
      <TodoList todos={todos} onDelete={handleDelete} status="progress" onUpdate={handleUpdate} />
      <h1>Done</h1>
      <TodoList todos={todos} onDelete={handleDelete} status="done" onUpdate={handleUpdate} />
    </section>
  );
}

export default App;
