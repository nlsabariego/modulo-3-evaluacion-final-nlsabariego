import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../stylesheets/Character.scss";

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

Character.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  species: PropTypes.string,
  image: PropTypes.string
};

export default Character;
