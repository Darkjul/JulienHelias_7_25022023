// Import des éléments nécéssaires au fonctionnement de About.jsx

import React from 'react';
import Collapse from '../../components/Collapse/Collapse';
import bannerAbout from '../../assets/banner-about.png';
import Banner from '../../components/Banner/Banner';

// Contante About qui va afficher les éléments de la page A Propos

const About = () => { 

	// Création d'une constante qui va recceuillir les infos de chaque Collapse

    const infosAbout = [ 
		{
			"id": "1",
			"title": "Fiabilité",
			"description": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
		},
		{
			"id": "2",
			"title": "Respect",
			"description": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.."
		},
		{
			"id": "3",
			"title": "Service",
			"description": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.."
		},
		{
			"id": "4",
			"title": "Sécurité",
			"description": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
		}
	]

    return (
		<main> 		
                  
            <Banner moreclass="banner_about"
            title=''
            image={bannerAbout}
            alt='Paysage Montagneux'
        />
         

         <section className='about_main_collapse'>
				{infosAbout.map(data => {
					return (						
							<Collapse key={data.id} style={{margin:'30px 0'}}  title={data.title} description={data.description} />
						
					)}
				)}
		</section>    
                 
        </main>           
    );
};

export default About;