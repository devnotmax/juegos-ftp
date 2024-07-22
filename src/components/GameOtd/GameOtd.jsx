import React, { useState, useEffect } from "react";

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
        console.log(data);
        setOtd(data);
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    game(193);
  }, []);

  return (
    <div>
      <h1>Game of the Day</h1>
      <h2>{otd.title}</h2>
      <img src={otd.thumbnail} alt={otd.title} />
      <p>{otd.short_description}</p>
      <a href={otd.game_url}>Play Now</a>
    </div>
  );
};

export default GameOtd;
