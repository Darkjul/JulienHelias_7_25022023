// Import des éléments nécéssaires au fonctionnement de Tag.jsx

import React from "react";
import PropTypes from "prop-types";

// Composants Tag de la Page Fiche Logement Individuel

const Tag = ({ tag }) => {
  return (
    <div className="tagContainer">
      <span className="tagButton">{tag}</span>
    </div>
  );
};

// Props utilisé pour le composant Tag.jsx

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
