const intialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectedSquare, turns }) {
  const gameBoard = intialGameBoard;

  for (const turn of turns) {
    const { square, playerSymbol } = turn;
    const { row, col } = square;
    if (gameBoard[row][col] === null) {
      gameBoard[row][col] = playerSymbol;
    }
  }

  //const [gameBoard, setGameBoard] = useState(intialGameBoard);

  //   function handleSelectSquare(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedGameBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedGameBoard[rowIndex][colIndex] = symbolToUse;
  //       return updatedGameBoard;
  //     });

  //     onSelectedSquare();
  //   }

  let innerGameBoard = gameBoard.map((row, rowIndex) => (
    <li key={rowIndex}>
      <ol>
        {row.map((playerSymbol, colIndex) => (
          <li key={colIndex}>
            <button
              onClick={() => onSelectedSquare(rowIndex, colIndex)}
              disabled={playerSymbol !== null}
            >
              {playerSymbol}
            </button>
          </li>
        ))}
      </ol>
    </li>
  ));

  return <ol id="game-board">{innerGameBoard}</ol>;
}
