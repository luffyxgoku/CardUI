import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <h1 className="employee-text">Employees</h1>
        <div className="nav-menu-container">
          <span className="menu-all">All</span>
          <label className="menu">Active</label>
          <label className="menu">Inactive</label>
        </div>
      </div>
    </>
  );
}
