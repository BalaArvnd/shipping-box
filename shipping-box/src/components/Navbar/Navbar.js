import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="list">
        <li className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Add box
          </NavLink>
        </li>
        <li className="nav-links">
          <NavLink
            to="/list"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Boxes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
