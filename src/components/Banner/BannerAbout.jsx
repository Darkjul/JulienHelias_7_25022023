// Import des éléments nécéssaires au fonctionnement de BannerAbout.jsx

import React from 'react';
import Banner from '../../components/Banner/Banner';
import bannerAbout from '../../assets/banner-about.png';

// Contante BannerAbout qui va afficher les éléments de la bannière de la page A Propos

const BannerAbout = () => {
    
    return(
        <Banner
            title=''
            src={bannerAbout}
            alt='Paysage Montagneux'
        />
    )
}

export default BannerAbout;