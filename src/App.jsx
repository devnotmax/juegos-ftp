import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./views/Home/Home";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div>
        <Home />
      </div>
    <h2>"Juegos gratuitos como tu hermana :@"</h2>
      <Footer />
    </>
  );
}

export default App;
