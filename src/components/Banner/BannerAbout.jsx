// Import des éléments nécéssaires au fonctionnement de BannerAbout.jsx

import React from 'react';
import banner from '../../assets/banner-about.png';

// Contante Banner qui va afficher les éléments de la bannière de la page A Propos

const BannerAbout = () => {
    return (
        <div className='banner-container'>             
                <img src={banner} alt="Paysage Rocheux" className="img-banner" />  
         </div> 
    );
};

export default BannerAbout;