import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Filter.scss";

function FilterEpisodios(props) {
  console.log(props);
  const handleEpisodios = ev => {
    props.handleEpisodios({
      value: ev.target.value
    });
  };

  return (
    <div className='filter'>
      <input type='text' placeholder='Nº de episodios' className='filter__input-text' onChange={handleEpisodios} value={props.value} />
    </div>
  );
}

FilterEpisodios.propTypes = {
  handleSearch: PropTypes.func
};

export default FilterEpisodios;
