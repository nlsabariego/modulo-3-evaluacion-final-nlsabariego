import React from "react";

function Character() {
  return (
    <li className='card'>
      <img src='http://mouse.latercera.com/wp-content/uploads/2017/09/rick-sanchez-broma-900x600.png' alt='' className='card_img' />
      <p className='card__description'>Nombre</p>
      <p className='card__description'>Especie</p>
    </li>
  );
}

export default Character;
