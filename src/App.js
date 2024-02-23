import logo from "./logo.svg";
import "./App.css";
import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import { useState } from "react";

function App() {
  const player1Name = "Player 1";
  const player1Symbol = "X";
  const player2Name = "Player 2";
  const player2Symbol = "O";

  const [activePlayer, setActivePlayer] = useState(player1Symbol);

  function handleSelectSquare() {
    setActivePlayer((prevActivePlayer) =>
      prevActivePlayer === player1Symbol ? player2Symbol : player1Symbol
    );
  }

  return (
    <div id="game-container" className="App">
      <ol id="players" className="highlight-player">
        <Player
          playerName={player1Name}
          symbol={player1Symbol}
          isActive={activePlayer === player1Symbol ? true : false}
        />
        <Player
          playerName={player2Name}
          symbol={player2Symbol}
          isActive={activePlayer === player2Symbol ? true : false}
        />
      </ol>
      <GameBoard
        onSelectedSquare={handleSelectSquare}
        symbolToUse={activePlayer}
      />
    </div>
  );
}

export default App;
