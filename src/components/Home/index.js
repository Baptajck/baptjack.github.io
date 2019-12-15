import React from 'react';

import './home.scss';
import profil from './profil.png';

const Home = () => (
  <div className="body">
    <h1 className="body-title">Baptiste Parville</h1>
    <div className="header">
      <img className="header-image" src={profil} alt="Photo_de_profil" />
      <p className="header-desc">
        Jeune développeur, sorti de l’école O’Clock,
         cherche à mettre ses compétences au service d’une équipe de développeurs.
      </p>
    </div>
    <div className="main">
      <div className="description">
        <div className="description-desc">
          <h3 className="description-desc-title">Description</h3>
          <p className="description-desc-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sit magni amet dolorem! Totam sequi voluptatibus ratione, consequatur facere repudiandae.</p>
        </div>
        <div className="description-info">
          <h3 className="description-info-title">Informations</h3>
          <ul>
            <li className="description-info-liste"><span className="description-info-liste--gras">Age :</span> 24 ans</li>
            <li className="description-info-liste"><span className="description-info-liste--gras">Email :</span> parville.baptiste@gmail.com</li>
          </ul>
          <p className="description-info-contact">Pour plus d'informations, veuillez-vous rendre sur la page contact</p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
