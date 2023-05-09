// Import des éléments nécéssaires au fonctionnement de Header.jsx

import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.jpg";

// Contante Header qui va afficher les éléments du Header

const Header = () => {
  const actualRoute = useLocation().pathname;

  return (
    <nav className="header">
      <img src={Logo} alt="logo kasa" className="logo" />

      <ul className="nav">
        <li className={actualRoute === "/" ? "nav_item_active" : "nav_item"}>
          <NavLink to="/" className="navlink">
            Accueil
          </NavLink>
        </li>

        <li
          className={actualRoute === "/about" ? "nav_item_active" : "nav_item"}
        >
          <NavLink to="/about" className="navlink">
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
