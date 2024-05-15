import React from 'react';
import { useState } from 'react';

export function Todos({ todos }) {
  const handleMarkAsComplete = async (todoId) => {
    try {
      const response = await fetch(`http://localhost:3000/todo/${todoId}`, {
        method: 'PATCH',
        body: JSON.stringify({ completed: true }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to mark todo as complete');
      }

      // Update the local state or trigger a re-fetch of todos
      // (depending on your application's architecture)
      alert('Todo marked as complete');
    } catch (error) {
      console.error('Error marking todo as complete:', error);
      // Handle error state or display a message to the user
    }
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          {todo.completed ? (
            <p>Completed</p>
          ) : (
            <button onClick={() => handleMarkAsComplete(todo._id)}>
              Mark as Complete
            </button>
          )}
        </div>
      ))}
    </div>
  );
}