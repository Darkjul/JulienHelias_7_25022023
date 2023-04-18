// Composants Host de la Page Fiche Logement Individuel

const Host = (props) => {
	
	return (
		<aside className="host-comp">
			<div className="host-name">{props.hostName}</div>
			<div className="hostPicture">
				<img src={props.hostPic} alt={props.id} />
			</div>
		</aside>
	);
}

export default Host;

/*// Import des éléments nécéssaires au fonctionnement de Host.jsx

import React from 'react';
import PropTypes from "prop-types";

// Composants Host de la Page Fiche Logement Individuel

const Host = (hostName, hostPic, id) => {
	
	return (
		<aside className="host-comp">
			<div className="host-name">{hostName}</div>
			<div className="hostPicture">
				<img src={hostPic} alt={id} />
			</div>
		</aside>
	);
}

Host.propTypes = {
  hostName: PropTypes.string.isRequired,
  hostPic: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Host;*/