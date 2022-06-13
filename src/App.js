import React from 'react';
import './App.scss';
import TodoList from './components/todo-list/todo-list';

function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
