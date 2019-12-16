// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import './app.scss';
import Navigation from 'src/components/Navigation';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';

// == Composant
const App = () => (
  <div id="app">
    <Navigation />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
    <Footer />
  </div>
);

// == Export
export default App;
