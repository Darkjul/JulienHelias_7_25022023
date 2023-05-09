// Import des éléments nécéssaires au fonctionnement de Rate.jsx

import emptyStar from "../../assets/grey_star.png";
import fullStar from "../../assets/red_star.png";

// Composants Rate de la Page Fiche Logement Individuel

const Rate = ({ score }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <section className="rate-comp">
      {stars.map((level) =>
        score >= level ? (
          <img
            key={level}
            className="star"
            src={fullStar}
            alt="Etoile rouge pleine"
          />
        ) : (
          // Affichage conditionnel du score du logement, pleine ou vide selon le score passé en props
          <img
            key={level}
            className="star"
            src={emptyStar}
            alt="Etoile grise vide"
          />
        )
      )}
    </section>
  );
};

export default Rate;
