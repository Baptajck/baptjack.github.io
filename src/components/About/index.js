// == Import : npm
import React from 'react';
import { DiReact, DiJavascript1, DiHtml5, DiCss3 } from 'react-icons/di';

// == Import : local
import './about.scss';

// == Composant
const About = () => (
  <section className="about">
    <h1 className="about-title">a propos</h1>
    <p className="about-desc">Jeune développeur en quête de connaissance en développement web front-end. Pour cela voici une application de maquette</p>
    <h2 className="about-title--subject">Techonologies utilisées</h2>

    <div className="about-container">
      <span className="about-container-svg about-container-svg--html"><DiHtml5 /></span>
      <h2 className="about-container-title">HTML 5</h2>
      <p className="about-container-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam facere quaerat quo corrupti magnam cupiditate nobis culpa molestiae neque dicta quia, quam voluptate, voluptatum voluptates delectus consequuntur quis rem quibusdam.</p>
    </div>

    <div className="about-container">
      <span className="about-container-svg about-container-svg--css"><DiCss3 /></span>
      <h2 className="about-container-title">CSS 3</h2>
      <p className="about-container-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam facere quaerat quo corrupti magnam cupiditate nobis culpa molestiae neque dicta quia, quam voluptate, voluptatum voluptates delectus consequuntur quis rem quibusdam.</p>
    </div>

    <div className="about-container">
      <span className="about-container-svg about-container-svg--js"><DiJavascript1 /></span>
      <h2 className="about-container-title">Javascript</h2>
      <p className="about-container-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam facere quaerat quo corrupti magnam cupiditate nobis culpa molestiae neque dicta quia, quam voluptate, voluptatum voluptates delectus consequuntur quis rem quibusdam.</p>
    </div>

    <div className="about-container">
      <span className="about-container-svg about-container-svg--react"><DiReact /></span>
      <h2 className="about-container-title">React</h2>
      <p className="about-container-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam facere quaerat quo corrupti magnam cupiditate nobis culpa molestiae neque dicta quia, quam voluptate, voluptatum voluptates delectus consequuntur quis rem quibusdam.</p>
    </div>

    <div className="about-projets">
      <h2 className="about-projets-title">Mes projets</h2>
      <p className="about-projets-desc">Voici mes autres projets déjà réalisés</p>
      <div className="about-projets-container">
        <img src="https://i.imgur.com/AChXwaJ.png" alt="projet portfolio" className="about-projets-container-img" />
        <h3 className="about-projets-container-title">Portfolio</h3>
      </div>
      <div className="about-projets-container">
        <img src="https://i.imgur.com/IYOJ3VA.png" alt="projet likemovie" className="about-projets-container-img" />
        <h3 className="about-projets-container-title">likemovie</h3>
      </div>
      <div className="about-projets-container">
        <img src="https://i.imgur.com/JEQZuSa.png" alt="projet gamebook" className="about-projets-container-img" />
        <h3 className="about-projets-container-title">Gamebook</h3>
      </div>
    </div>
  </section>
);

// == Export
export default About;
