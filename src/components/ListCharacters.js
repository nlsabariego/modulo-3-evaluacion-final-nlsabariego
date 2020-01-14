import React from "react";
import Character from "./Character";
import "../stylesheets/ListCharacters.scss";
import PropTypes from "prop-types";

function ListCharacters(props) {
  return (
    <ul className='cards'>
      {props.characters.map(character => {
        return <Character key={character.id} character={character} />;
      })}
    </ul>
  );
}

ListCharacters.propTypes = {
  characters: PropTypes.array
};

export default ListCharacters;
