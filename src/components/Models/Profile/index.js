import React from 'react';
import { NavLink } from 'react-router-dom';

import modelsDispo from './models';

import './modelProfile.scss';

const Profile = () => (
  <section>
    <h1>Profile</h1>
    <div className="modelProfile-container">
      {modelsDispo.map(({
        id, link, title, text, image: { image, alt },
      }) => (
        <NavLink to={`/models/${link}`} key={id} className="modelProfile-cards">
          <img src={image} alt={alt} className="modelProfile-cards-img" />
          <div className="modelProfile-cards-co">
            <h2 className="modelProfile-cards-title">{title}</h2>
            {text !== '' && (
              <p className="modelProfile-cards-description"><strong className="modelProfile-cards-description--strong">Description: </strong><br />{text}</p>
            )}
          </div>
        </NavLink>
      ))}
    </div>
  </section>
);

export default Profile;
