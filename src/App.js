import styled from "styled-components";
import "./App.css";
import StartGame from "./components/StartGame";
import { useState } from "react";
import GamePlay from "./components/GamePlay";

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
`;

function App() {
  const [isGameStarted, setGameStarted] = useState(true);

  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
