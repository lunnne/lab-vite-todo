import React, { useState } from 'react';

export default function AddForm({ onAdd }) {
  const [todo, setTodo] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== '') {
      setIsError(false);
      onAdd(todo);
      setTodo('');
    } else {
      setIsError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="What will you do?" value={todo} onChange={(e) => setTodo(e.target.value)} />
      {isError ? <p>'It shouldn't be empty blank'</p> : ''}
      <button>Submit</button>
    </form>
  );
}
