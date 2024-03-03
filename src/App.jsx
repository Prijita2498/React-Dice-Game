import HomePage from "./Components/HomePage";
import './App.css'
import { useState } from "react";
import StartGame from "./Components/StartGame";

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleScreen = () =>{
    setIsGameStarted((prev) => !prev)
  }

  return(
    <>
      {
        isGameStarted ? <StartGame/> : <HomePage onClick={toggleScreen}/>
      }
    </>
  )
}

export default App;
