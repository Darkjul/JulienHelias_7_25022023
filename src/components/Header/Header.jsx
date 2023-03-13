import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.jpg"

const Header = () => {
  return (
    <nav className="header">
      
          
        <img src={Logo} alt="logo kasa" className='logo'/>        
        
        
          <ul className='nav'>                        
                <li>
                <NavLink to="/" className="navlink">
                    Accueil
                </NavLink>
                </li>
                <li>
                <NavLink to="/About" className="navlink">
                    A Propos
                </NavLink>
                </li>
            
            
        </ul>
        
    </nav>
  );
};

export default Header;