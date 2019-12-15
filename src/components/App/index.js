// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';
import Navigation from 'src/components/Navigation';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';

// == Composant
const App = () => (
  <div id="app">
    <Navigation />
    <Home />
    <Footer />
  </div>
);

// == Export
export default App;
