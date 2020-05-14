// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import : local
import './home.scss';

// == Composant
const Home = () => (
  <section className="home">
    <h1 className="home-title">
      <span className="home-title--home"> Home</span>
      <span className="home-title--layout"> Layout</span>
    </h1>
    <p className="home-description">On a souvent besoin de maquette, Que ce soit pour représenter le rendu des bannières et de l'avatar d'une page professionnelle, la connexion ou la création de compte sur une application mobile, ou encore créer une bannière publicitaire et pleins d'autres...</p>
    <p className="home-description">Bref, les utilisations des templates sont multiples et diverses. J'ai donc créé cette application pour mettre mes idées sur "papier". Je vais mettre cette application à jour régulièrement a mesure de mon temps libre.</p>
    <p className="home-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae harum a necessitatibus totam dolores laborum vero beatae impedit, quas, aperiam quam? In sed corporis delectus explicabo cupiditate. Molestiae, sed adipisci. Necessitatibus quos reiciendis, laborum quaerat quis minus, beatae asperiores, praesentium similique reprehenderit esse quidem porro aut assumenda qui aliquam odio!</p>
    <p className="home-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sequi nisi eveniet quo veniam, eum consequuntur! Possimus nihil reiciendis laborum quasi itaque explicabo obcaecati, hic, dolorum beatae in similique temporibus.</p>
    <NavLink to="/categories" className="home-button">Voir les catégories</NavLink>
  </section>
);

// == Export
export default Home;
