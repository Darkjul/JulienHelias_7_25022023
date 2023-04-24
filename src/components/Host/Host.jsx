// Import des éléments nécéssaires au fonctionnement de Host.jsx

import React from 'react';
import PropTypes from "prop-types";

// Composants Host de la Page Fiche Logement Individuel

const Host = ({ hostName, hostPic }) => {
	
	return (
		<aside className="host-comp">
			<div className="host-name">{hostName}</div>
			<div className="hostPicture">
				<img src={hostPic} alt={hostName} />
			</div>
		</aside>
	);
}

Host.propTypes = {
  hostName: PropTypes.string.isRequired,
  hostPic: PropTypes.string.isRequired,  
};

export default Host;