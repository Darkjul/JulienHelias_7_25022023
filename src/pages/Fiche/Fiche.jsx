import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Tag from "../../components/Tag/Tag";

const Fiche = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setdata] = useState();

  useEffect(() => {
    const displayLog = async () => {
      const res = await axios.get("/logements.json");
      const logement = res.data.find(({ id }) => id === params.id);
      res.data.map(() => setdata(logement));

      // Renvoi vers la page Erreur 404 en cas d'URL de logement invalide

      if (logement === undefined) {
        navigate("/404", { state: { message: "Error" } });
      }
    };
    displayLog();

    // eslint-disable-next-line
  }, []); // Tableau Array vide du useEffect pour ne le lancer qu'une seule fois

  const slideImgs = data && data.pictures;
  const tags = data && data.tags;
  const equipments = data && data.equipments;

  const equip =
    data &&
    equipments.map((item, index) => (
      <li key={index} className="equipList">
        {item}
      </li>
    ));

  // Affichage des éléments composants les informations de la page Fiche Logement, Caroussel, Tag, Host et Rate

  return (
    data && (
      <main key={params.id} className="fiche-container">
        <Carrousel slides={slideImgs} />
        <section className="hostInfo-container">
          <div className="title-tags-container">
            <div className="title-container redFont">
              <h1>{data.title}</h1>
              <h3>{data.location}</h3>
            </div>
            <div className="tags-container">
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className="rate-host-container">
            <div className="host-container redFont">
              <Host hostName={data.host.name} hostPic={data.host.picture} />
            </div>
            <div className="rate-container">
              <Rate score={data.rating} />
            </div>
          </div>
        </section>
        <section className="collapse-fiche-container">
          <Collapse title="Description" description={data.description} />
          <Collapse title="Équipements" description={equip} />
        </section>
      </main>
    )
  );
};

export default Fiche;
