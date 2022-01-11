import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navBar">
    <h1 className="navlogo">Math Magicians</h1>
    <ul className="navlinks">
      <li>
        <NavLink className="text-link" to="/"> Home </NavLink>
      </li>
      <li>
        <NavLink className="text-link" to="/calculator"> Calculator </NavLink>
      </li>
      <li>
        <NavLink className="text-link" to="/quote"> Quote </NavLink>
      </li>
    </ul>
  </nav>
);
export default Navbar;
