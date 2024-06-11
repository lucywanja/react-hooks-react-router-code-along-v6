import React from 'react'
import { NavLink} from 'react-router-dom';
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
        <NavLink 
        to="/"
        // add styling to NavLink
        className="nav-link"
        >Home
        </NavLink>

        <NavLink 
        to="/about"
        // add styling to NavLink
        className="nav-link"
        >About
        </NavLink>

        <NavLink 
        to="/login"
        // add styling to NavLink
        className="nav-link"
        >Login
        </NavLink>

    </nav>
  )
}

export default NavBar;