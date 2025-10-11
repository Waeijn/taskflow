import React from 'react';
import Navbar from './taskflow-components/Navbar';
import Home from './taskflow-components/Home';
import AddTaskView from './taskflow-components/AddTaskView';
import ViewTaskList from './taskflow-components/ViewTaskList';
import './App.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Home />
        {/* Task 2 */}
      </div>
    </div>
  );
}