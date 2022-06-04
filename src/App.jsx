import React, { useState, useEffect } from 'react';

import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';


function App() {
  const [inputText, setInputText] = useState('');
  const  [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler()
if(todos.length !== 0)
    saveLocalTodos()
  },[todos, status])
  
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));

    } else {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }
  

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null ){
      localStorage.setItem("todos" , JSON.stringify([]));

    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal)
    }
  }

  return (
    <div>
      <header>
        <h1>To-do List</h1>

      </header>
      <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}  />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
