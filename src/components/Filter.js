import React from "react";
import "../stylesheets/Filter.scss";

function Filters(props) {
  const handleSearch = ev => {
    props.handleSearch({
      value: ev.target.value
    });
  };

  return (
    <div className='filter'>
      <input type='text' placeholder='Busca aquí el personaje' className='filter__input-text' onChange={handleSearch} value={props.value} />
    </div>
  );
}

export default Filters;
