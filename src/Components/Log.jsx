export default function Log({ logs }) {
  let logsElements = [];

  if (logs.length > 0) {
    logsElements = logs.map((item) => (
      <li key={`${item.square.row}${item.square.col}`}>
        {item.playerSymbol} selected {item.square.row},{item.square.col}
      </li>
    ));
  }

  return <ol id="log">{logsElements}</ol>;
}
