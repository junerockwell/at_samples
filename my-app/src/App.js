import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  function getTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json());
  }

  useEffect(() => {
    getTodos()
    .then(data => {
      console.log(data);
      setTodos(data);
    });
  }, []);

  const todoItems = todos.map((todo, index) =>
    // Only do this if items have no stable IDs
    <li key={index} onClick={() => showDetail(todo)}>
      {todo.title}
    </li>
  );

  function showDetail(todo) {
    // alert(JSON.stringify(todo));
    console.log(todo);
  }

  return (
    <div className="App">
      hello
      <ul>
        {todoItems}
      </ul>
    </div>
  );
}

export default App;
