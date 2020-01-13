import React from "react";

function CharacterData() {
  return (
    <div>
      <button className='form__btn'>Volver</button>
      <div className='card'>
        <img src='' alt='' />
        <div>
          <p className='card__description'>Nombre</p>
          <p className='card__description'>Estado</p>
          <p className='card__description'>Especie</p>
          <p className='card__description'>Origen</p>
          <p className='card__description'>Episidios</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterData;
