import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
      {todo.text}
      <div>
        <button
          type="button"
          onClick={() => completeTodo(index)}
        >
          Complete
        </button>
        <button
          type="button"
          onClick={() => deleteTodo(index)}
        >
          x
        </button>
      </div>
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="add">
        <div className="add__input">
          <input
            type="text"
            className="input"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="add todo"
          />
        </div>
        <div className="add__button">
          <button 
            className="button" 
            type="submit"
          >
            Add
          </button>
        </div>
      </div>

    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false,
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false,
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
