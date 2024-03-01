import logo from "./logo.svg";
import "./App.css";
import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import { useState } from "react";
import Log from "./Components/Log";

const WINNING_COMBINATIONS = [];

function App() {
  const player1Name = "Player 1";
  const player1Symbol = "X";
  const player2Name = "Player 2";
  const player2Symbol = "O";

  //const [activePlayerSymbol, setActivePlayerSymbol] = useState(player1Symbol);
  const [gameTurns, setGameTurns] = useState([]);

  function getActivePlayer(gameTurns) {
    let currentActivePlayerSymbol = player1Symbol;

    if (gameTurns.length > 0 && gameTurns[0].playerSymbol === player1Symbol) {
      currentActivePlayerSymbol = player2Symbol;
    }
    return currentActivePlayerSymbol;
  }

  const activePlayerSymbol = getActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayerSymbol((prevactivePlayerSymbol) =>
    //   prevactivePlayerSymbol === player1Symbol ? player2Symbol : player1Symbol
    // );

    setGameTurns((prevTurns) => {
      const currentActivePlayerSymbol = getActivePlayer(prevTurns);

      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          playerSymbol: currentActivePlayerSymbol,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <>
      <div id="game-container" className="App">
        <ol id="players" className="highlight-player">
          <Player
            playerName={player1Name}
            symbol={player1Symbol}
            isActive={activePlayerSymbol === player1Symbol ? true : false}
          />
          <Player
            playerName={player2Name}
            symbol={player2Symbol}
            isActive={activePlayerSymbol === player2Symbol ? true : false}
          />
        </ol>
        <GameBoard onSelectedSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log logs={gameTurns} />
    </>
  );
}

export default App;
