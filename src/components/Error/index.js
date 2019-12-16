/* eslint-disable react/self-closing-comp */
import React from 'react';

import './error.scss';

const Error = () => (
  <div className="body-404">
    <div className="face">
      <div className="band">
        <div className="red"></div>
        <div className="white"></div>
        <div className="blue"></div>
      </div>
      <div className="eyes"></div>
      <div className="dimples"></div>
      <div className="mouth"></div>
    </div>
    <h1 className="number">404</h1>
    <h2 className="title-404">Page non trouvée</h2>
    <div className="btn-404">Return to Home</div>
  </div>
);

export default Error;
