import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterData.scss";
import { GiAlienStare, GiSkullCrossedBones, GiHeartBeats } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";

function CharacterData(props) {
  const { image, name, status, species, origin, episode } = props.character;

  const statusIcon = () => {
    if (status === "Alive") {
      return <GiHeartBeats className='heart-icon' />;
    } else {
      return <GiSkullCrossedBones className='dead-icon' />;
    }
  };

  const specieIcon = () => {
    if (species === "Human") {
      return <IoMdPerson className='person-icon' />;
    } else {
      return <GiAlienStare className='alien-icon' />;
    }
  };

  return (
    <div className='characterData'>
      <Link to='/'>
        <button className='form__btn'>Volver</button>
      </Link>
      <div className='cardData'>
        <img className='cardData__img' src={image} alt={name} />
        <div>
          <p className='cardData__description'>Nombre: {name}</p>
          <p className='cardData__description'>
            Estado: {status} {statusIcon(status)}
          </p>
          <p className='cardData__description'>
            Especie: {species} {specieIcon(species)}
          </p>
          <p className='cardData__description'>Origen: {origin.name}</p>
          <p className='cardData__description'>Nº de capítulos: {episode.length}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterData;
