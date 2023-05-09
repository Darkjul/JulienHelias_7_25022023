// Import des éléments nécéssaires au fonctionnement de Footer.jsx

import React from "react";
import logo from "../../assets/logo_footer.png";

// Contante Footer qui va afficher les éléments du Footer

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo de Kasa" className="footer_logo" />
      <p className="footer_copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
