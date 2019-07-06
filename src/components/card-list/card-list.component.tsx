import React from "react";
import { Card } from "../card/card.component";
import { ICharacter } from "../../App";
import "./card-list.styles.css";

export const CardList: React.FunctionComponent<{
  characters: ICharacter[];
}> = props => {
  return (
    <div className="card-list">
      {props.characters.map(character => {
        return <Card character={character} />;
      })}
    </div>
  );
};
