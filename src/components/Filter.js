import React from "react";

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
    </div>
  );
}

export default Filters;
