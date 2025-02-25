// src/HomePage/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import './App.css';

const HomePage = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Task 1',
      dueDate: '2025-02-20',
      creator: 'John Doe',
      timestamp: '2025-02-17 12:00',
      completed: false
    },
    // Add more tasks as needed
  ]);

  const handleInputChange = (index, field, value) => {
    const newTasks = [...tasks];
    newTasks[index][field] = value;
    setTasks(newTasks);
  };

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      name: '',
      dueDate: '',
      creator: '',
      timestamp: new Date().toLocaleString(),
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <TaskList tasks={tasks} onInputChange={handleInputChange} addTask={addTask} />
      </main>
    </div>
  );
};

export default HomePage;
