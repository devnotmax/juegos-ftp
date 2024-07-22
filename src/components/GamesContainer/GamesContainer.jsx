import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { All, Favorites } from "../GamesContainer/routes";
import "./GamesContainer.css";

const GameContainer = () => {
  return (
    <div className="game-container">
      <nav className="gc-menu">
        <ul>
          <li>
            <NavLink
              to="/all"
              className={({ isActive }) =>
                isActive ? "gc-menu-button active" : "gc-menu-button"
              }
            >
              Todos <i class='bx bx-joystick-button' ></i>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? "gc-menu-button active" : "gc-menu-button"
              }
            >
              Favs <i className="bx bx-heart"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/all" element={<All />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default GameContainer;
