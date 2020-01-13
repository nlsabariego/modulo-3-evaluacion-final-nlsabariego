import React from "react";
import Character from "./Character";

function ListCharacters(props) {
  console.log(props);

  return (
    <ul className='cards'>
      {props.characters.map(character => {
        return <Character key={character.id} character={character} />;
      })}
    </ul>
  );
}

export default ListCharacters;
