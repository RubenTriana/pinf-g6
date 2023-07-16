import React, { useState } from "react";
import './navbar.css';
import Nlogo from '../../assets/135321382_15.jpg';
import { Link } from 'react-scroll';

function Navbar() {
  const [NavExpanded, setNavExpanded] = useState(false);

  return (
    <nav className="navbar container-fluid">
      <a href="/" className="ms-4"><img className="w-50" src={Nlogo} alt="NLogo" /></a>
      <div className={NavExpanded ? "navbar-menu expanded" : "navbar-menu"}>
        <ul>
          <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Inicio</Link></li>
          <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>Nosotros</Link></li>
          <li><Link activeClass="active" to="products" spy={true} smooth={true} offset={50} duration={500}>Colección</Link></li>
          <li><Link activeClass="active" to="services" spy={true} smooth={true} offset={50} duration={500}>Beneficios</Link></li>
          <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contáctanos</Link></li>
        </ul>
      </div>
      <button className="hamburger" onClick={() => { setNavExpanded(!NavExpanded); }}>
        {/* icono de Heroicons.com */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;
