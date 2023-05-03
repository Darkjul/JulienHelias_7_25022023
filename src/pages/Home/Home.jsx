// Import des éléments nécéssaires au fonctionnement de Home.jsx

import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import bannerHome from '../../assets/banner.jpg';
import Banner from '../../components/Banner/Banner'; 

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
             <Banner
            title='Chez vous, partout et ailleurs'
            image={bannerHome}
            alt='Paysage Rocheux'
        />          

        {/* Affichage des éléments Carte Logements sur la page d'acceuil via les résultats du Fetch */}
        
        <section className="cards">
          
          {data.map((logements) => (      
            <article className="logements" key={logements.id}>              
              
           <NavLink
              to={"/logements/" + logements.id}
              className="linkCard"
              
            >
               <img
                src={logements.cover}
                alt={logements.title}
                className="img-logements"
                />
                <div className="overlay">
                  <h2 className="titre-logements">{logements.title}</h2>
                </div>
              
            </NavLink>
            </article>
          ))}            
        </section>
     </main>
      
      );
};

export default Home;