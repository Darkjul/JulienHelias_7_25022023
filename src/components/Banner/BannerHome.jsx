// Import des éléments nécéssaires au fonctionnement de BannerHome.jsx

import React from 'react';
import Banner from '../../components/Banner/Banner';
import bannerHome from '../../assets/banner.jpg';

// Contante HomeBanner qui va afficher les éléments des bannières de Kaza via Props

const HomeBanner = () => {
    
    return(
        <Banner
            title='Chez vous, partout et ailleurs'
            src={bannerHome}
            alt='Paysage Rocheux'
        />
    )
}

export default HomeBanner;