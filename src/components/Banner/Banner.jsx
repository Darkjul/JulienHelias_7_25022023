// Import des éléments nécéssaires au fonctionnement de Banner.jsx

import React from 'react';
import PropTypes from "prop-types";

// Contante Banner qui va afficher les éléments des bannières de Kaza via Props

const Banner = ({ image, alt, title, children, moreclass }) => {
    
    return(
        <section className={`banner ${moreclass}`}>{children}
            <h1 className="banner_title">{title}</h1>
            <img src={image} alt={alt} className='banner_image' />
        </section>
    )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Banner;

