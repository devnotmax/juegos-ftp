import { useState, useEffect } from "react";
import axios from "axios";
import Game from "../Game/Game";
import "./routes.css"; // Asegúrate de ajustar la ruta según tu estructura de archivos
import { Paginator } from "primereact/paginator";

const ITEMS_PER_PAGE = 18; // Puedes ajustar esto según tus necesidades
const PAGE_RANGE_DISPLAYED = 5; // Número de botones de página a mostrar

export const All = () => {
  const [allGames, setAllGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("https://free-to-play-games-database.p.rapidapi.com/api/games", {
        headers: {
          "x-rapidapi-key":
            "2b75fb740amsh963c16fc6043e7dp1a486djsn6367b73a77d5",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      })
      .then((res) => setAllGames(res.data))
      .catch((err) => console.log(err));
  }, []);

  const indexOfLastGame = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstGame = indexOfLastGame - ITEMS_PER_PAGE;
  const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(allGames.length / ITEMS_PER_PAGE);

  const getPaginationGroup = () => {
    let start =
      Math.floor((currentPage - 1) / PAGE_RANGE_DISPLAYED) *
      PAGE_RANGE_DISPLAYED;
    return new Array(PAGE_RANGE_DISPLAYED)
      .fill()
      .map((_, idx) => start + idx + 1)
      .filter((page) => page <= totalPages);
  };

  return (
    <div className="all-games-container">
      <h1 className="all-games-title">Todos los Juegos</h1>
      <div className="game-cards-container">
        {currentGames.map((game) => (
          <Game
            key={game.id}
            title={game.title}
            thumbnail={game.thumbnail}
            short_description={game.short_description}
            game_url={game.game_url}
            genre={game.genre}
            platform={game.platform}
            publisher={game.publisher}
            developer={game.developer}
          />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        {getPaginationGroup().map((page, index) => (
          <button
            key={index}
            onClick={() => paginate(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export const Platform = () => {
  return (
    <div>
      <h1>Plataformas</h1>
    </div>
  );
};

export const Favorites = () => {
  return (
    <div>
      <h1>Favoritos</h1>
      <p>Tu hermana</p>
    </div>
  );
};
