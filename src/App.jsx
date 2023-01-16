import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import cardData from "./components/CardData";
import RenderCards from "./components/RenderCards";
import Info from "./components/Info";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.css";

export default function App() {
  //state for the current score
  const [score, setScore] = useState(0);
  // state for the highest score
  const [bestScore, setBestScore] = useState(0);
  // useEffect for high score?  if score > bestScore setBestScore(score)
  // state to hold all the cards that have been clicked
  const [clickedCards, setClickedCards] = useState([]);
  const onScoreUpdate = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
    if (score === 10) {
      alert(
        "HOLY SHIT YOU BEAT THE GAME!!! ACTUAL GOD GAMER!!!! CLAIM YOUR PRIZE BY PRESSING OK(if pop ups not blocked :---(... )"
      );
      window.open(
        "https://www.s-kaupat.fi/tuote/hk-sininen-lenkkir-580-g/6409100050306"
      );
      setScore(0);
      setClickedCards([]);
    }
  };
  useEffect(onScoreUpdate, [score]);

  //function to check if the card has been clicked(if the cards id exists in the clickedCards array)
  const checkClickedCardsState = useCallback((value) => {
    if (clickedCards.indexOf(value) === -1) {
      setScore((previousState) => previousState + 1);
      setClickedCards((previousState) => [...previousState, value]);
    } else {
      setScore(0);
      setClickedCards([]);
      alert(
        "BOOOOOOOOOOOOM!!!!!!!!!! THE ATOM BOMB WENT OFF AND THE WHOLE STATE OF HÖGNÄS WAS DESTROYED"
      );
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header score={score} highScore={bestScore} />
        {/* <RenderCards
          cardData={cardData}
          checkClickedCards={checkClickedCardsState} */}
        {/* /> */}
        <Routes>
          <Route
            path="/memory-game"
            element={<RenderCards checkClickedCards={checkClickedCardsState} />}
          />
          <Route
            path="memory-game/info/:url"
            element={<Info cardData={cardData} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
