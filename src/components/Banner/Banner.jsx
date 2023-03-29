// Import des éléments nécéssaires au fonctionnement de Banner.jsx

import React from 'react';

// Contante Banner qui va afficher les éléments des bannières de Kaza via Props

const Banner = (props) => {
    return(
        <div className="banner">
            <h1 className="banner_title">{props.title}</h1>
            <img src={props.src} alt={props.alt} className='banner_image' />
        </div>
    )
}

export default Banner;

