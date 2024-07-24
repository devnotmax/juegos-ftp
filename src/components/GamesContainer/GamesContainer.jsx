import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { All, Favorites } from "../GamesContainer/routes";
import "./GamesContainer.css";
import { Accordion } from "../Acordeon/Acordeon.jsx";
import { useState } from "react";

// export default GameContainer;
const GameContainer = () => {
  const [isAccordionVisible, setIsAccordionVisible] = useState(false);

  const items = [
    {
      title: "Filtro 1",
      content: "Contenido del filtro 1.",
    },
    {
      title: "Filtro 2",
      content: "Contenido del filtro 2.",
    },
    {
      title: "Filtro 3",
      content: "Contenido del filtro 3.",
    },
  ];

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
              Todos <i className="bx bx-joystick-button"></i>
            </NavLink>
          </li>
          <li style={{ position: "relative" }}>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive ? "gc-menu-button active" : "gc-menu-button"
              }
              onClick={() => setIsAccordionVisible(!isAccordionVisible)}
            >
              <i className="bx bx-filter"></i>
            </NavLink>
            {isAccordionVisible && <Accordion items={items} />}
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
