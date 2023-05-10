// Import des éléments nécéssaires au fonctionnement de Banner.jsx

import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Contante Banner qui va afficher les éléments des bannières de Kaza via Props

const Banner = ({ image, alt, title }) => {
  // Contantes qui vont servir à checker si on se trouve sur la page About pour gérer l'affichage des différentes version de la bannière (HOOKS)

  const [checkAboutPage, setCheckAboutPage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      setCheckAboutPage(true);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <section className={checkAboutPage ? "banner_about" : "banner"}>
      <h1 className="banner_title">{title}</h1>
      <img src={image} alt={alt} className="banner_image" />
    </section>
  );
};

// Props utilisées pour le composant Banner.jsx

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Banner;
