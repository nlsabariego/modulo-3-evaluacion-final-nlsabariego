import React from "react";
import Character from "./Character";
import "../stylesheets/ListCharacters.scss";

function ListCharacters(props) {
  return (
    <ul className='cards'>
      {props.characters.map(character => {
        return <Character key={character.id} character={character} />;
      })}
    </ul>
  );
}

export default ListCharacters;
