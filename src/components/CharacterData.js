import React from "react";

function CharacterData(props) {
  console.log(props.character);
  const { image, name, status, species, origin, episode } = props.character;

  return (
    <div>
      <button className='form__btn'>Volver</button>
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
