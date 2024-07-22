import React, { useState, useEffect } from "react";
import "./GameOtd.css"; // Asegúrate de ajustar la ruta según tu estructura de archivos

const GameOtd = () => {
  const [otd, setOtd] = useState({});

  const game = async (id) => {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "2b75fb740amsh963c16fc6043e7dp1a486djsn6367b73a77d5",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setOtd(data);
      })
      .catch((error) => console.error("Error:", error));
  };

  const getDailyGameId = () => {
    const today = new Date().toISOString().split("T")[0]; // Obtener la fecha actual en formato YYYY-MM-DD
    const storedGameData = JSON.parse(
      localStorage.getItem("dailyGame") || "{}"
    );

    if (storedGameData.date === today) {
      return storedGameData.id;
    } else {
      const newId = Math.floor(Math.random() * 584); // Suponiendo que los IDs de los juegos van de 1 a 584
      localStorage.setItem(
        "dailyGame",
        JSON.stringify({ date: today, id: newId })
      );
      return newId;
    }
  };

  useEffect(() => {
    const dailyGameId = getDailyGameId();
    game(dailyGameId);
  }, []);

  return (
    <div className="game-otd">
      <div className="game-otd-content">
        <div className="game-otd-thumbnail-container">
          <img
            src={otd.thumbnail}
            alt={otd.title}
            className="game-otd-thumbnail"
          />
        </div>
        <div className="game-otd-details">
          <h1 className="game-otd-title">Recomendación del diá</h1>
          <h2 className="game-otd-game-title">{otd.title}</h2>
          <p className="game-otd-description">{otd.short_description}</p>
          <p className="game-otd-platform">Platform: {otd.platform}</p>
          <p className="game-otd-genre">Genre: {otd.genre}</p>
          <p className="game-otd-publisher">Publisher: {otd.publisher}</p>
          <p className="game-otd-developer">Developer: {otd.developer}</p>
          <p className="game-otd-date">Release Date: {otd.release_date}</p>
          <button className="game-otd-play-button">
            <a href={otd.game_url} target="_blank" rel="noopener noreferrer">
              Play Now <i class="bx bxs-joystick"></i>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOtd;
