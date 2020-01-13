import React from "react";
import { Link } from "react-router-dom";

function Character(props) {
  const { id, name, species, image } = props.character;

  return (
    <Link to={`/character/${id}`}>
      <li className='card'>
        <img src={image} alt={name} className='card_img' />
        <p className='card__description'>{name}</p>
        <p className='card__description'>{species}</p>
      </li>
    </Link>
  );
}

export default Character;
