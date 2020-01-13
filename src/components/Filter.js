import React from "react";
import ListCharacters from "./ListCharacters";

function Filters(props) {
  console.log(props);
  const handleSearch = ev => {
    props.handleSearch({
      value: ev.target.value
    });
  };

  return (
    <div>
      <input type='text' placeholder='Busca aquí el personaje' className='form__input-text' onChange={handleSearch} />
      <ListCharacters filter={props.filter} characters={props.characters} />
    </div>
  );
}

export default Filters;
