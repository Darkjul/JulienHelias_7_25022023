import React from 'react';
import banner from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div className='fond-banner'>
            <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
            <img src={banner} alt="Paysage Rocheux" className='image-banner'/>
        </div>
    );
};


export default Banner;