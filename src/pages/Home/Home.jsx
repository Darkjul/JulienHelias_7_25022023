// Import des éléments nécéssaires au fonctionnement de Home.jsx

import React, { useEffect, useState } from 'react';
import BannerHome from '../../components/Banner/BannerHome';
import { NavLink } from "react-router-dom";

// Constante Home qui va afficher les éléments composants la page d'acceuil

const Home = () => {

  // Import des Logements via le fichier logements.JSON avec un Fetch 
  
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("/logements.JSON") 
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }; 

  useEffect(() => { 
    getData();
  }, []);

    return (
      <main>  
            <BannerHome />          

        {/* Affichage des éléments Carte Logements sur la page d'acceuil via les résultats du Fetch */}
        
        <section className="cards">
          {data.map((logements) => (       
           <NavLink
              to={"/logements/" + logements.id}
              className="linkCard"
              key={logements.id}
            >
              <article className="logements">
                <img
                src={logements.cover}
                alt={logements.title}
                className="img-logements"
                />
                <h2 className="titre-logements">{logements.title}</h2>
              </article>
          </NavLink>
          ))}
        </section>
     </main>
      
      );
};

export default Home;