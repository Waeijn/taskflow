import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Terrence John Manlapaz
export default function AddTaskView({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Please enter a title for the task.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      priority,
    };

    addTask(newTask);

    // reset
    setTitle("");
    setDescription("");
    setPriority("Medium");

    navigate("/");
  };

  return (
    <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: 720 }}>
      <h2 className="mb-4 text-center">Add New Task</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Task Title</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Optional description"
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Priority</label>
          <select
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Add Task
        </button>
      </form>
    </div>
  );
}
