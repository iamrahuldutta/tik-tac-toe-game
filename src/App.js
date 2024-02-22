import logo from "./logo.svg";
import "./App.css";
import Player from "./Components/Player";

function App() {
  const player1Name = "Player 1";
  const player1Symbol = "X";
  const player2Name = "Player 2";
  const player2Symbol = "O";
  return (
    <div id="game-container" className="App">
      <ol id="players">
        <Player playerName={player1Name} symbol={player1Symbol} />
        <Player playerName={player2Name} symbol={player2Symbol} />
      </ol>
    </div>
  );
}

export default App;
