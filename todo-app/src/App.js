import React from 'react';
import './styles.css';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
