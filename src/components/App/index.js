// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Navigation from 'src/components/Navigation';
import Home from 'src/components/Home';

// == Composant
const App = () => (
  <div id="app">
    <Navigation />
    <Home />
  </div>
);

// == Export
export default App;
