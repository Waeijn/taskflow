import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './taskflow-components/Navbar';
import Home from './taskflow-components/Home';
import AddTaskView from './taskflow-components/AddTaskView';
import ViewTaskList from './taskflow-components/ViewTaskList';
import './App.css';

export default function App() {

  const [tasks, setTasks] = useState([
    // small example, can be empty []
    { id: 1, title: 'Sample Task', description: 'This is a sample', priority: 'Medium' }
  ]);

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home tasks={tasks} deleteTask={deleteTask} />} />
          <Route path="/add" element={<AddTaskView addTask={addTask} />} />
          <Route path="/tasks" element={<ViewTaskList tasks={tasks} deleteTask={deleteTask} />} />
        </Routes>
      </div>
    </Router>
  );
}