import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Filter.scss";

function FilterSpecies(props) {
  const handleSpecies = ev => {
    props.handleSpecies({
      value: ev.target.value
    });
  };

  return (
    <form className='filter'>
      <label className='species-color' htmlFor='Human'>
        <input type='radio' name='Human' value='Human' onChange={handleSpecies} checked={props.checked === "Human"} />
        Humano
      </label>
      <label className='species-color' htmlFor='Alien'>
        <input type='radio' name='Alien' value='Alien' onChange={handleSpecies} checked={props.checked === "Alien"} />
        Alien
      </label>
    </form>
  );
}

FilterSpecies.propTypes = {
  handleSpecies: PropTypes.func
};

export default FilterSpecies;
