import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Filter.scss";

function Filter(props) {
  const handleSearch = ev => {
    props.handleSearch({
      value: ev.target.value
    });
  };

  const handleGender = ev => {
    props.handleGender({
      value: ev.target.value
    });
  };

  return (
    <div className='filter'>
      <input type='text' placeholder='Busca aquí el personaje' className='filter__input-text' onChange={handleSearch} value={props.value} />
      <select name='gender' onChange={handleGender} value={props.gender}>
        <option value='Male'>Male</option>
        <option value='Famale'>Famale</option>
        <option value='unknown'>Unknown</option>
      </select>
    </div>
  );
}

Filter.propTypes = {
  handleSearch: PropTypes.func
};

export default Filter;
