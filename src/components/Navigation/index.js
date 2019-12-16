/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent */
// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import : local
import './navigation.scss';

// == Composant
const Navigation = () => (
  <nav className="navigation" role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      <ul id="menu">
        <li><NavLink to="/" className="navigation-link">Accueil</NavLink></li>
        <li><NavLink to="/" className="navigation-link">A propos</NavLink></li>
        <li><NavLink to="/categories" className="navigation-link">Catégories</NavLink></li>
        <li><NavLink to="/contact" className="navigation-link">Contact</NavLink></li>
      </ul>
    </div>
  </nav>
);

// == Export
export default Navigation;
