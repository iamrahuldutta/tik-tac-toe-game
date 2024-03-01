import logo from "./logo.svg";
import "./App.css";
import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import { useState } from "react";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./WinningCombinations";
import GameOver from "./Components/GameOver";

function App() {
  const player1Name = "Player 1";
  const player1Symbol = "X";
  const player2Name = "Player 2";
  const player2Symbol = "O";
  const intialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

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

  const gameBoard = intialGameBoard;

  for (const turn of gameTurns) {
    const { square, playerSymbol } = turn;
    const { row, col } = square;
    if (gameBoard[row][col] === null) {
      gameBoard[row][col] = playerSymbol;
    }
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function reMatch() {
    setGameTurns([]);
  }

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
        {(winner || hasDraw) && <GameOver winner={winner} reMatch={reMatch} />}
        <GameBoard onSelectedSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log logs={gameTurns} />
    </>
  );
}

export default App;
