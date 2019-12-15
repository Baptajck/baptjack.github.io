/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent */
// == Import : npm
import React from 'react';

// == Import : local
import './navigation.scss';

// == Composant
const Navigation = () => (
  <nav className="nav" role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      <ul id="menu">
        <li><a className="a" href="#">Accueil</a></li>
        <li><a className="a" href="#">A propos</a></li>
        <li><a className="a" href="#">Catégories</a></li>
        <li><a className="a" href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
);

// == Export
export default Navigation;
