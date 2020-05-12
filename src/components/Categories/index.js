// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import : local
import './categories.scss';

import categoriesDispo, { categoriesNonDispo } from './categories';
// == Composant
const Categories = () => (
  <div className="categories">
    <h1 className="categories-title">Catégories</h1>
    {/* Catégories */}
    <div className="categories-container">
      {categoriesDispo.map(({
        id, link, title, text,
      }) => (
        <NavLink to={link} key={id} className="categories-cards">
          <h2 className="categories-cards-title">{title}</h2>
          <p className="categories-cards-description"><strong className="categories-cards-description--strong">Description: </strong><br />{text}</p>
        </NavLink>
      ))}
      {categoriesNonDispo.map(({ id, title, text }) => (
        <button type="button" key={id} className="categories-cards--soon" disabled>
          <h2 className="categories-cards-title">{title}</h2>
          <p className="categories-cards-description">
            <strong className="categories-cards-description--strong">Description: </strong><br />{text}
          </p>
          <p className="categories-cards--soon-specimen categories-speciment-top-left"><span>A venir</span></p>
        </button>
      ))}

    </div>
  </div>
);

// == Export
export default Categories;


// <NavLink to="/" className="categories-cards">
//   {/*
//   <img src="https://i.imgur.com/WOwNFWo.png" alt="Image_maquette" className="categories-cards-image" />
//   */}
//   <h2 className="categories-cards-title">Contact</h2>
//   {/*
//   <p className="categories-cards-description">Vous retrouvez toutes les maquettes pour les pages contact</p>
//   */}
// </NavLink>
