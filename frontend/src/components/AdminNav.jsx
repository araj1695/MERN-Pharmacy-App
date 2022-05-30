import React from 'react';
import {Link} from "react-router-dom";

export default function AdminNav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/admin-page">Admin</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/add-items">AddItems</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active"   to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/admin-items">Items</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
