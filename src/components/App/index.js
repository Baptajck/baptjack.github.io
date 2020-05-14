// == Import : npm
import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// == Import : local
import './app.scss';
import Navigation from 'src/components/Navigation';
import Home from 'src/components/Home';
import Categories from 'src/components/Categories';
import About from 'src/components/About';
import Contact from 'src/components/Contact';
import Models from 'src/components/Models';

// == Composant
const App = () => {
  const { pathname } = useLocation();
  const changeTitle = () => {
    switch (pathname) {
      case '/categories':
        document.title = 'Catégories | Home Layout';
        break;
      case '/about':
        document.title = 'A Propos | Home Layout';
        break;
      case '/contact':
        document.title = 'Contact | Home Layout';
        break;
      case '/models/:category':
        document.title = 'Maquette | Home Layout';
        break;
      default:
        document.title = 'Home Layout';
    }
  };

  useEffect(() => {
    changeTitle();
  });

  return (
    <div id="app">
      <Navigation />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/models/:category">
          <Models />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

// == Export
export default App;
