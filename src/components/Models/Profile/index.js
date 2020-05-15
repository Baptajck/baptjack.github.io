import React from 'react';
import { NavLink } from 'react-router-dom';

import modelsDispo, { modelsNonDispo } from './models';

import './modelProfile.scss';

const Profile = () => {
  // Fonction de décompte, date est un param ex: 'Jan 5, 2021 15:37:25' (date en anglais)
  const countDown = (date) => {
    const timer = setInterval(() => {
      const dueDate = new Date(date);
      const now = new Date().getTime();
      const countDownDate = dueDate - now;

      const century = Math.floor((countDownDate % (1000 * 60 * 60 * 24 * 365 * 100 * 1000)) / (1000 * 60 * 60 * 24 * 365 * 100));
      const year = Math.floor((countDownDate % (1000 * 60 * 60 * 24 * 365 * 100)) / (1000 * 60 * 60 * 24 * 365));
      const days = Math.floor((countDownDate % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((countDownDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((countDownDate % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((countDownDate % (1000 * 60)) / 1000);

      if (countDownDate < 0) {
        clearInterval(timer);
        document.getElementById('countDown').innerHTML = 'disponible';
      }
      else {
        const u = () => {
          if (century !== 0) {
            return `${century}s - ${year}a - ${days}j - ${hours}h - ${minutes}m - ${seconds}s`;
          }
          if (century === 0 && year !== 0) {
            return `${year}a - ${days}j - ${hours}h - ${minutes}m - ${seconds}s`;
          }
          if (century === 0 && year === 0 && days !== 0) {
            return `${days}j - ${hours}h - ${minutes}m - ${seconds}s`;
          }
          if (century === 0 && year === 0 && days === 0 && hours !== 0) {
            return `${hours}h - ${minutes}m - ${seconds}s`;
          }
          if (century === 0 && year === 0 && days === 0 && hours === 0 && minutes !== 0) {
            return `${minutes}m - ${seconds}s`;
          }
          if (century === 0 && year === 0 && days === 0 && hours === 0 && minutes === 0 && seconds !== 0) {
            return `${seconds}s`;
          }
          return false;
        };
        document.getElementById('countDown').innerHTML = u();
      }
    }, 1000);
  };

  return (
    <section className="modelProfile">
      <h1>Profile</h1>
      <p>Disponible</p>
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
      <p>Bientôt</p>
      <div className="modelProfile-container">
        {modelsNonDispo.map(({
          id, title, text, image: { image, alt },
        }) => (
          <div key={id} className="modelProfile-cards">
            <img src={image} alt={alt} className="modelProfile-cards-img" />
            <div className="modelProfile-cards-co">
              <h2 className="modelProfile-cards-title">{title}</h2>
              {text !== '' && (
              <p className="modelProfile-cards-description"><strong className="modelProfile-cards-description--strong">Description: </strong><br />{text}</p>
              )}
              <p className="modelProfile-cards-countDown" id="countDown">{countDown('May 22, 2020 12:17:00')}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Profile;
