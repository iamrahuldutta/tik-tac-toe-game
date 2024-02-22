const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  let innerGameBoard = intialGameBoard.map((row, rowIndex) => (
    <li key={rowIndex}>
      <ol>
        {row.map((playerSymbol, colIndex) => (
          <li key={colIndex}>
            <button>{playerSymbol}</button>
          </li>
        ))}
      </ol>
    </li>
  ));

  return (
    <>
      <ol id="game-board">{innerGameBoard}</ol>
    </>
  );
}
