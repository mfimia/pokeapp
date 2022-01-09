import React from "react";
import PropTypes from "prop-types";

const PokemonDescription = ({ basicInfo, species }) => {
  return <div>Placeholder (pokemon description)</div>;
};

PokemonDescription.propTypes = {
  species: PropTypes.object.isRequired,
  basicInfo: PropTypes.object.isRequired,
};

export default PokemonDescription;
