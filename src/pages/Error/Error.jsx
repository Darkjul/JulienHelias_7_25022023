// Import des éléments nécéssaires au fonctionnement de Error.jsx

import React from "react";
import { Link } from "react-router-dom";

// Contante Error qui va afficher les éléments de la page Erreur

const Error = () => {
  return (
    <main>
      <section className="errorBox">
        <p className="errorPnumber">404</p>
        <p className="errorPtext">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="errorLinkHome">
          Retourner sur la page d’accueil
        </Link>
      </section>
    </main>
  );
};

export default Error;
