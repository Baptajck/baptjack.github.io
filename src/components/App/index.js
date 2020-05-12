// == Import : npm
import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// == Import : local
import './app.scss';
import Navigation from 'src/components/Navigation';
import Home from 'src/components/Home';
import Categories from 'src/components/Categories';
import About from 'src/components/About';

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
        <Route path="/categories">
          <Categories />
        </Route>
        <Route exact path="/homelayout">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

// == Export
export default App;
