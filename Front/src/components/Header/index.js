import React from 'react';

import reactLogo from './img.jpg';

import './header.scss';

const Header = () => (
  <div>
    <header className="header">
      <a href="/"><img src={reactLogo} alt="react logo" /></a>
    </header>
    <div className="navigation">
      <ul className="navigation__ul">
        <a href="/"><li className="navigation__li">Accueil</li></a>
        <a href="/l-atelier"><li className="navigation__li">L'atelier</li></a>
        <a href="/categories"><li className="navigation__li">Catégories</li></a>
        <a href="/collections"><li className="navigation__li">Collections</li></a>
      </ul>
    </div>
  </div>
);

export default Header;
