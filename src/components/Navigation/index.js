/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent */
// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import : local
import './navigation.scss';

// == Composant
const Navigation = () => {
  return (
    <nav className="navbar" role="navigation">
    <ul className="navbar-nav">
      <li className="logo">
        <NavLink to="/" className="navbar-nav-link">
          <span className="link-text logo-text">Homelayout</span>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
          >
            <g className="fa-group">
              <path
                fill="currentColor"
                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                className="fa-secondary"
              >
              </path>
              <path
                fill="currentColor"
                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                className="fa-primary"
              >
              </path>
            </g>
          </svg>
        </NavLink>
      </li>

      <li className="navbar-nav-item" activeclassname="active">
        <NavLink exact to="/" className="navbar-nav-link">
          <svg
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-inline--fa fa-home fa-w-16 fa-9x"
          >
            <path
              d="M8 17V11H12V17H17V9H20L10 0L0 9H3V17H8Z"
              fill="currentColor"
              className="fa-secondary"
            />
          </svg>
          <span className="link-text">Accueil</span>
        </NavLink>
      </li>

      <li className="navbar-nav-item" activeclassname="active">
        <NavLink to="/categories" className="navbar-nav-link">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-inline--fa fa-layout fa-w-18 fa-9x"
          >
            <path
              d="M4 11H9V5H4V11ZM4 18H9V12H4V18ZM10 18H15V12H10V18ZM16 18H21V12H16V18ZM10 11H15V5H10V11ZM16 5V11H21V5H16Z"
              fill="currentColor"
              className="fa-secondary"
            />
          </svg>
          <span className="link-text">Catégories</span>
        </NavLink>
      </li>

      <li className="navbar-nav-item" activeclassname="active">
        <NavLink to="/about" className="navbar-nav-link">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-inline--fa fa-book fa-w-16 fa-5x"
          >
            <path
              d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM6 4H11V12L8.5 10.5L6 12V4Z"
              fill="currentColor"
              className="fa-secondary"
            />
          </svg>
          <span className="link-text">A propos</span>
        </NavLink>
      </li>

      <li className="navbar-nav-item" activeclassname="active">
        <NavLink to="/contact" className="navbar-nav-link">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-inline--fa fa-message fa-w-20 fa-5x"
          >
          <path
            d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM18 14H6V12H18V14ZM18 11H6V9H18V11ZM18 8H6V6H18V8Z"
            fill="currentColor"
            className="fa-secondary"
          />
          </svg>
          <span className="link-text">Contact</span>
        </NavLink>
      </li>
    </ul>
    </nav>
  );
};
// == Export
export default Navigation;
