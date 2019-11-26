import React from 'react';

import './home.scss';
import profil from './profil.png';
import github from './github4.png';
import linkedin from './linkedIn.png';
import twitter from './twitter.png';
import fond from './blurry-926705_1920.jpg';

const Home = () => (
  <div>
    <div className="header">
      <img  className="image-header" src={fond} alt=""/>
      <img className="header-profil" src={profil} alt="" />
      <h1 className="header-title">Baptiste Parville</h1>
      <p className="header-desc">Developpeur Web | Front end</p>
    </div>
    <div className="logo">
      <a title="Lien vers Github" href="https://github.com/Baptajck" target="_blanck">
        <img className="logo-image" src={github} alt="" />
      </a>
      <a title="Lien vers LinkedIn" href="https://www.linkedin.com/in/baptiste-parville/" target="_blanck">
        <img className="logo-image" src={linkedin} alt="" />
      </a>
      <a title="Lien vers Twitter" href="https://twitter.com/baptjacky" target="_blanck">
        <img className="logo-image" src={twitter} alt="" />
      </a>
    </div>
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
);

export default Home;
