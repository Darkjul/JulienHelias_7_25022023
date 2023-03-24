// Import des éléments nécéssaires au fonctionnement de Banner.jsx

import React from 'react';
import banner from '../../assets/banner.jpg';

// Contante Banner qui va afficher les éléments de la bannière

const Banner = () => {
    return (
        <div className='fond-banner'>
            <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
            <img src={banner} alt="Paysage Rocheux" className='image-banner'/>
        </div>
    );
};


export default Banner;