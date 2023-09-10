import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../componentStyling/Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  return (
    <div className="Navbar">
      <div className="logo">
        <Link to="/" style={{'color': 'rgb(240, 246, 247)'}}>
          Portfolio
        </Link>
      </div>
      <div className={click ? 'nav-menu active' : 'nav-menu'}>
        <Link to="/" className="link" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" className="link" onClick={closeMenu}>
          About
        </Link>
        <Link to="/projects" className="link" onClick={closeMenu}>
          Projects
        </Link>
        <Link to="/resume" className="link" onClick={closeMenu}>
          Resume
        </Link>
        <Link to="/contact" className="link" onClick={closeMenu}>
          Contact
        </Link>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={30} style={{ color: '#fff' }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
