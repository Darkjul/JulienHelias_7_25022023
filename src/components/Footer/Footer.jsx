// Import des éléments nécéssaires au fonctionnement de Footer.jsx

import React from "react";
import logo from '../../assets/logo_footer.png'

const Footer = () => {    
    return (
        
		<footer className='footer'>
			<img src={logo} alt="Logo de Kasa" />
			<p className='footer__copyright'>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}

export default Footer;