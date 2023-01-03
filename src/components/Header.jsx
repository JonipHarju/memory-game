import React from "react";

export default function Header(props) {
  return (
    <nav>
      <h1 id="pageTitle">Memory card game!</h1>
      <h2 className="header2">score: {props.score}</h2>
      <h3 className="header3">Highest Score: {props.highScore}</h3>
      <p id="story">
        Warning!! Highly dangerous group of criminals called Hurjat Harjut &
        Hagnäs has broken ot ouf kellari in Högnäs! Capture them before they
        wreck havoc across the globe... The world is counting on you!
      </p>
      <p id="instructions">
        To win click each scum once and once only.. Otherwise an atom bomb goes
        off!!!!!
      </p>
    </nav>
  );
}
