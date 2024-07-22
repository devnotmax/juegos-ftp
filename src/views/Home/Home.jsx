import React from "react";
import GameOtd from "../../components/GameOtd/GameOtd";
import GameContainer from "../../components/GamesContainer/GamesContainer";

const Home = () => {
  return (
    <div
      style={{ width: "85%", margin: "1rem auto" }}
    >
      <GameOtd />
      <GameContainer />
    </div>
  );
};

export default Home;
