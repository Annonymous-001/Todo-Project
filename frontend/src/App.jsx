import './App.css';
import { CreateTodo } from '../components/CreateTodo';
import { Todos } from '../components/Todos';
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        if (!response.ok) {
          throw new Error('Failed to fetch todos');
        }
        const json = await response.json();
        setTodos(json.todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
        // Handle error state or display a message to the user
      }
    };

    fetchData(); // Call the fetchData function inside useEffect
  }, []); // Empty dependency array ensures this effect runs once after initial render

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
