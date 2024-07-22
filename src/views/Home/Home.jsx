import React from "react";
import GameOtd from "../../components/GameOtd/GameOtd";


const Home = () => {

    return (
        <div style={{ width: "80%", margin: "1rem auto", backgroundColor: "#344C64" }}>
            <h1>Home</h1>
            <p>Esta es la vista de Home</p>
            <GameOtd />
        </div>
    );
}

export default Home