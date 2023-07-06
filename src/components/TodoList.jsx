import React, { useState } from 'react';
import TodoItem from './TodoItem';

export default function ({ todos, onDelete, onUpdate, status }) {
  const filteredList = todos.filter((item) => item.status === status);
  return (
    <section>
      <ul>
        {filteredList.map((item, index) => (
          <TodoItem key={index} item={item} onDelete={onDelete} onUpdate={onUpdate} />
        ))}
      </ul>
    </section>
  );
}
