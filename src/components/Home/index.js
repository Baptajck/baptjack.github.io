import React from 'react';

import './home.scss';
import profil from './profil.png';
import github from './github.png';
import linkedin from './linkedIn.png';
import twitter from './twitter.png';

const Home = () => (
  <div>
    <div className="header">
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
  </div>
);

export default Home;
