// Import des éléments nécéssaires au fonctionnement de Carrousel.jsx

import { useState } from "react";
import arrowleft from "../../assets/chevron_carousel_left.png";
import arrowright from "../../assets/chevron_carousel_right.png";

const Carrousel = ({ slides }) => {
	
	const [current, setCurrent] = useState(0); // On définit l'index du premier slide à 0
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); // On repartira au premier slide quand on arrive au dernier
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1); // On repartira au dernier slide quand on est au premier
	};

	return (
		<div>
	<section id="carrousel-container">
	  {length > 1 && ( // Affichage des flèches seulement si la longueur est > 1
	    <img
	      src={arrowleft}
	      alt="Flèche gauche"
	      onClick={prevSlide}
	      className="leftArrow"
	    />
	  )}

	  {length > 1 && ( // Affichage des flèches seulement si la longueur est > 1
	    <img
	      src={arrowright}
	      alt="Flèche droite"
	      onClick={nextSlide}
	      className="rightArrow"
	    />
	  )}

	  {slides.map(
	    (
	      slide,
	      index // Lancement slider avec affichage conditionnel et opacité quand le slide en cours vaut l'index
	    ) => (
	      <div
	        key={index}
	        className={current === index ? "slider active-anim" : "slider "}
	      >
	        {index === current && (
	          <img src={slide} alt="Images de logements à louer" />
	        )}
	        {index === current && (
	          <span className="slider__number">
	            {current + 1}/{length}
	          </span>
	        )}
	      </div>
	    )
	  )}
			</section>
			<img src={slides[current]} alt="Images de logements à louer" />
		</div>
	);
	
}

export default Carrousel;