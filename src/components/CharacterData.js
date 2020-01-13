import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterData.scss";

function CharacterData(props) {
  const { image, name, status, species, origin, episode } = props.character;

  return (
    <div className='characterData'>
      <Link to='/'>
        <button className='form__btn'>Volver</button>
      </Link>
      <div className='cardData'>
        <img className='cardData__img' src={image} alt={name} />
        <div>
          <p className='cardData__description'>Nombre: {name}</p>
          <p className='cardData__description'>Estado: {status}</p>
          <p className='cardData__description'>Especie: {species}</p>
          <p className='cardData__description'>Origen: {origin.name}</p>
          <p className='cardData__description'>Nº de capítulos: {episode.length}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterData;
