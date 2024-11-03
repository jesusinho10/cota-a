import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  // Importa los estilos del navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Inicio</Link>
        </li>
        <li className="navbar-item">
          <Link to="/generalidades">Generalidades</Link>
        </li>
        <li className="navbar-item">
          <Link to="/marco-teorico">Marco Teórico</Link>
        </li>
        <li className="navbar-item">
          <Link to="/diseno-estructurado">Análisis y Diseño Estructurado</Link>
        </li>
        <li className="navbar-item">
          <Link to="/diseno-objetos">Análisis y Diseño Orientado a Objetos</Link>
        </li>
        <li className="navbar-item">
          <Link to="/biblioteca">Biblioteca</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
