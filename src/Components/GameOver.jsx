export default function GameOver({ winner, reMatch }) {
  return (
    <div>
      <h2>Game Over!</h2>
      {winner && <p>You won, {winner}</p>}
      {!winner && <p>It's a draw</p>}
      <p>
        <button onClick={reMatch}>Rematch</button>
      </p>
    </div>
  );
}
