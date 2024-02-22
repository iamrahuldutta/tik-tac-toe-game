import { useState } from "react";

export default function Player({ playerName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedPlayerName, setPlayerName] = useState(playerName);
  let editButton = <button onClick={handleEditClick}>Edit</button>;
  let saveButton = <button onClick={handleSaveClick}>Save</button>;
  let spanPlayerField = (
    <span className="player-name">{updatedPlayerName}</span>
  );
  let playerNameInputField = (
    <input
      className="player-name"
      onChange={updatePlayerName}
      value={updatedPlayerName}
    />
  );
  let playerNameField = spanPlayerField;
  let button = editButton;

  function updatePlayerName(event) {
    setPlayerName(event.target.value);
  }

  function handleEditClick() {
    setIsEditing(() => !isEditing);
  }

  if (isEditing) {
    playerNameField = playerNameInputField;
    button = saveButton;
  }

  function handleSaveClick() {
    setIsEditing(false);
    playerNameField = spanPlayerField;
    button = editButton;
  }

  return (
    <li>
      <span className="player">
        {playerNameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      {button}
    </li>
  );
}
