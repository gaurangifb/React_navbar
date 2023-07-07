import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

//created links for navigation to these paths using the <Link> components from React Router.

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link className="title" to="/">
        Website
      </Link>
      {/* navlink automatically adds css class to any link that is currently active */}

      <div className="menu" onClick={() => {setMenuOpen(!menuOpen)}}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;



