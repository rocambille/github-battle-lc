import { useState } from "react";

import Card from "./Card";

function Fight() {
  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState();

  return (
    <>
      <Card player={player1} setPlayer={setPlayer1} />
      vs
      <Card player={player2} setPlayer={setPlayer2} />
    </>
  );
}

export default Fight;
