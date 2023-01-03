import React, { useState } from "react";
import "./Cards.css";

export default function RenderCards(props) {
  const [cardArray, setCardArray] = useState(props.cardData);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

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
            <p id="cardName">{value.name}</p>
          </div>
        );
      })}
    </div>
  );
}
