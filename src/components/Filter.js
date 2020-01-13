import React from "react";
import ListCharacters from "./ListCharacters";

function Filters() {
  return (
    <body>
      <input type='text' placeholder='Busca aquí el personaje' className='form__input-text' />
      <ListCharacters />
    </body>
  );
}

export default Filters;
