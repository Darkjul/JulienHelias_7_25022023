import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
        <div className="errorBox">
			<p className="errorPnumber">404</p>
			<p className="errorPtext">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" className="errorLinkHome">
				Retourner sur la page d’accueil
			</Link>
		</div>
    </>
  );
};

export default Error;