import React from "react";
import "./Game.css"; // Asegúrate de ajustar la ruta según tu estructura de archivos

const Game = ({
  title,
  thumbnail,
  short_description,
  game_url,
  genre,
  platform,
  publisher,
  developer,
}) => {
  if (platform === "PC (Windows)") {
    platform = <i className="bx bxl-windows"></i>;
  } else if (platform === "macOS") {
    platform = <i className="bx bxl-apple"></i>;
  } else if (platform === "Web Browser") {
    platform = <i className="bx bx-world"></i>;
  }

  return (
    <div className="game-card">
      <h2 className="game-title">{title}</h2>
      <div className="game-thumbnail-container">
        <img src={thumbnail} alt={title} className="game-thumbnail" />
      </div>
      <a
        href={game_url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-play-game"
      >
        Jugar ahora
      </a>
      <p className="game-info">Género: {genre}</p>
      <p className="game-info">{platform}</p>
    </div>
  );
};

export default Game;
