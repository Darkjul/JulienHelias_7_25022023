// Import des éléments nécéssaires au fonctionnement de Carrousel.jsx

import { useState } from "react";
import arrowleft from "../../assets/chevron_carousel_left.png";
import arrowright from "../../assets/chevron_carousel_right.png";

const Carrousel = ({ slides }) => {
	
	const [current, setCurrent] = useState(0); // On définit l'index du premier slide à 0	

	const nextSlide = () => {
		setCurrent(current === slides.length - 1 ? 0 : current + 1); // On repartira au premier slide quand on arrive au dernier
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? slides.length - 1 : current - 1); // On repartira au dernier slide quand on est au premier
	};

	return (

		<section style={{backgroundImage : `url(${slides[current]})`}} id="carrousel-container">
            {slides.length > 1 && 
                <>
                    <img 
                        className="leftArrow"
                        src={arrowleft} 
                        alt="Flèche gauche" 
                        onClick={prevSlide}
                    />
					
                    <img 
                        className="rightArrow"
                        src={arrowright} 
                        alt="Flèche droite" 
                        onClick={nextSlide}
                    />
					
                    <p className='slideCount'> {current + 1} / {slides.length}</p>
                </>
            } 
        </section>
	);
	
}

export default Carrousel;
