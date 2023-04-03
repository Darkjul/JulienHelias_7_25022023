// Import des éléments nécéssaires au fonctionnement de Collapse.jsx

import arrow from '../../assets/arrow.png';
import { useState } from 'react';

// Contante Header qui va gérer les différents mode d'affichage des les éléments de chaque Collapse

const Collapse = ({ title, description }) =>  { 

    const [toggle, setToggle] = useState(false);

    return (
        
            <article className="collapse" >
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="Afficher Infos" 
                    />
                </h3>
            
                <p className={toggle ? 'collapse_description' : 'collapse_description_hidden'}>
                    {Array.isArray(description) ? description.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : description
                    }
                </p> 
            </article>
        
    )
}

export default Collapse;