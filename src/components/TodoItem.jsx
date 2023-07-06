import React, { useState } from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';

export default function TodoItem({ item, onDelete, onUpdate }) {
  const { id, todo, status } = item;

  const handleChange = (e) => {
    const status = e.target.checked ? 'done' : 'progress';
    onUpdate({ ...item, status });
  };

  return (
    <li>
      <input type="checkbox" id="checkbox" checked={status === 'done'} onChange={handleChange} />
      <label htmlFor="checkbox">{todo}</label>
      <button onClick={() => onDelete(item)}>
        <BsFillTrash3Fill />
      </button>
    </li>
  );
}
