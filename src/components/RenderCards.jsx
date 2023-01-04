import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export default function RenderCards(props) {
  console.log("tässä pitäis olal card data", props.cardData);
  const [cardArray, setCardArray] = useState(shuffleArray(props.cardData));

  return (
    <div className="cardsContainer">
      {cardArray.map((value) => {
        return (
          <div key={value.id} className="cardWrapper" id={value.name}>
            <img
              className="card"
              src={value.img}
              key={value.id}
              alt="gamecard"
              onClick={() => {
                console.log("moi tästä id:stä -->", value.id);
                props.checkClickedCards(value.id);
                setCardArray(shuffleArray(cardArray));
              }}
            ></img>
            <Link to={`/memory-game/info/${value.name}`} state={value}>
              <button className="cardName">{value.name}</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
