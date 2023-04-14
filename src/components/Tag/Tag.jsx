// Composants Tag de la Page Fiche Logement Individuel

const Tag = (props) => {
	
	return (
		<div className="tagContainer">
			<span className="tagButton">{props.tag}</span>
		</div>
	);
}

export default Tag;