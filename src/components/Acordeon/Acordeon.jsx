// src/Accordion.js
import React, { useState } from "react";
import "./Acordeon.css";

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <div key={item.title} className={`item ${active}`}>
        <div className="title" onClick={() => onTitleClick(index)}>
          {item.title}
        </div>
        <div className="content">
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};
