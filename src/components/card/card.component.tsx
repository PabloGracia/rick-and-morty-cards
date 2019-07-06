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
      <h1>Name: {props.character.name}</h1>
      <h2>Status: {props.character.status}</h2>
    </div>
  );
};
