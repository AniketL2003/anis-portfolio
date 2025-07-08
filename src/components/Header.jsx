import React from 'react';
import { Link } from 'react-router-dom';
import LogoAnisUX from '../assets/LogoAnisUX.svg';

const Header = () => (
  <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem' }}>
    <Link to="/">
      <img src={LogoAnisUX} alt="Logo" style={{ width: '60px', height: '60px' }} />
    </Link>

    <nav style={{ display: 'flex', gap: '1.5rem' }}>
      <Link to="/about" style={{ textDecoration: 'none', color: '#000' }}>About</Link>
      <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>Work</Link>
      <a href="#contact" style={{ textDecoration: 'none', color: '#000' }}>Contact</a>
    </nav>
  </header>
);

export default Header;
