export default function GameBoard({ onSelectedSquare, board }) {
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

  let innerGameBoard = board.map((row, rowIndex) => (
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
