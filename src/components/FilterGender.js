import React from "react";
import PropTypes from "prop-types";
import "../stylesheets/Filter.scss";

function FilterGender(props) {
  const handleGender = ev => {
    props.handleGender({
      value: ev.target.value
    });
  };

  return (
    <div className='filter'>
      <select name='gender' onChange={handleGender} value={props.value}>
        <option value='Male'>Male</option>
        <option value='Female'>Famale</option>
        <option value='unknown'>Unknown</option>
      </select>
    </div>
  );
}

FilterGender.propTypes = {
  handleGender: PropTypes.func
};

export default FilterGender;
