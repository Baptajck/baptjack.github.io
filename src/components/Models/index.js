// == Import : npm
import React from 'react';
import { useLocation } from 'react-router-dom';

// == Import : local
import './models.scss';
import ProfileModels from './Profile/index';
import ContactModels from './Contact/index';

// == Composant
const Models = () => {
  const { pathname } = useLocation();
  const splitPathname = pathname.split('/');
  const model = splitPathname[2];

  const choideModels = () => {
    switch (model) {
      case 'profile':
        return <ProfileModels />;
        // break;
      case 'contact':
        return <ContactModels />;
      default:
    }
  };
  return (
    <section className="models">
      {choideModels()}
    </section>
  );
};
// == Export
export default Models;
