import React from 'react';
import banner from '../../assets/banner-about.png';

const About = () => {
    return (
        <div className='banner-container'>             
        <img src={banner} alt="Paysage Rocheux" className="img-banner" />      
        </div>
    );
};

export default About;