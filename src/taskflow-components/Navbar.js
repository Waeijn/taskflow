import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const activeClass = (path) =>
    location.pathname === path ? 'nav-link text-white fw-bold border-bottom border-2' : 'nav-link text-white-50';

  return (
    <nav className="navbar navbar-expand-lg" style={{ background: 'linear-gradient(90deg,#0d6efd,#6610f2)' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-white" to="/"> TaskFlow</Link>
        <button className="navbar-toggler bg-light border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-controls="navmenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className={activeClass('/')} to="/">Home</Link></li>
            <li className="nav-item"><Link className={activeClass('/add')} to="/add">Add Task</Link></li>
            <li className="nav-item"><Link className={activeClass('/tasks')} to="/tasks">View Tasks</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}