import React from "react";
import "./card.styles.css";
import { ICharacter } from "../../App";

export const Card: React.FC<{ character: ICharacter }> = props => {
  return (
    <div className="card-container">
      <img
        alt="character"
        src={props.character.image}
        height="200"
        width="200"
      />
      <h2>Name: {props.character.name}</h2>
      <p>Status: {props.character.status}</p>
    </div>
  );
};
