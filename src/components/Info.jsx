import React from "react";
import { useLocation, Link } from "react-router-dom";
import cardData from "./CardData";

export default function Info() {
  const location = useLocation();
  console.log(location, "gugauguaguauguau", cardData);

  if (location.state === null) {
    console.log(location.state);
    const targetUrl = location.pathname;
    for (let index = 0; index < cardData.length; index++) {
      console.log(index, cardData[index].path, targetUrl);
      if (cardData[index].path.toLowerCase() === targetUrl.toLowerCase()) {
        console.log(cardData[index].path, targetUrl, "hei nyt tää toimii");
        return (
          <div className="cardInfo" style={{ color: "white" }}>
            <br></br>
            {cardData[index].name}:<br></br>
            <img
              src={cardData[index].img}
              alt="target"
              style={{ width: "400px", height: "400px" }}
            />
            <br></br>
            <br></br>
            <br></br>
            <h2> how to catch the target:</h2>
            {cardData[index].info}
            <br></br>
            <br></br>
            <br></br>
            <Link to="/memory-game">
              <button> back to the game!</button>
            </Link>
          </div>
        );
      }
    }
  }
  return (
    <div className="cardInfo" style={{ color: "white" }}>
      {location.state.name}:<br></br>
      <img
        src={location.state.img}
        alt="target"
        style={{ width: "400px", height: "400px" }}
      />
      <br></br>
      <br></br>
      <br></br>
      <h2> how to catch the target:</h2>
      {location.state.info}
      <br></br>
      <br></br>
      <br></br>
      <Link to="/memory-game">
        <button> back to the game!</button>
      </Link>
    </div>
  );
}
