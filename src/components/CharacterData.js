import React from "react";
import { Link } from "react-router-dom";

function CharacterData(props) {
  const { image, name, status, species, origin, episode } = props.character;

  return (
    <div>
      <Link to='/'>
        <button className='form__btn'>Volver</button>
      </Link>
      <div className='cards'>
        <img src={image} alt={name} />
        <div>
          <p className='card__description'>Nombre: {name}</p>
          <p className='card__description'>Estado: {status}</p>
          <p className='card__description'>Especie: {species}</p>
          <p className='card__description'>Origen: {origin.name}</p>
          <p className='card__description'>Nº de capítulos: {episode.length}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterData;
