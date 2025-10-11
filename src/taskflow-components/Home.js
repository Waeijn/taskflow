import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ tasks, deleteTask }) {
  return (
    <div className="text-center">
      <h1 className="fw-bold mb-4 text-primary">Welcome to TaskFlow</h1>

      {(!tasks || tasks.length === 0) ? (
        <div className="p-4 bg-light rounded-3 shadow-sm">
          <p className="fs-5 text-muted mb-3">You don’t have any tasks yet.</p>
          <Link to="/add" className="btn btn-primary">➕ Add Your First Task</Link>
        </div>
      ) : (
        <div className="d-flex flex-column gap-3 align-items-center">
          {tasks.map((task) => (
            <div key={task.id} className="w-75 p-3 bg-white rounded shadow-sm d-flex justify-content-between align-items-center">
              <div>
                <div className="fw-semibold">{task.title}</div>
                {task.description && <div className="text-muted small">{task.description}</div>}
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>🗑 Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}