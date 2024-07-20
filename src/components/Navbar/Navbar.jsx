import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <Link to={"/"}>
          <p>Juegos gratis</p>
        </Link>
      </div>
      <div className="nav-menu">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="nav-socials">
        <a href="https://github.com/devnotmax" target="_blank">
          <i class="bx bxl-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/machifrias/" target="_blank">
          <i class="bx bxl-linkedin-square"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
