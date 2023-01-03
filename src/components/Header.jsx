import React from "react";

export default function Header(props) {
  return (
    <nav>
      <div>
        <h1>Memory card game!</h1>
      </div>
      <div>score: {props.score}</div>
      <div>Highest Score: {props.highScore}</div>
    </nav>
  );
}
