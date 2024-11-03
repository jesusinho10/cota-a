// src/components/Generalidades.js
import React, { useState } from 'react';
import '../styles/Generalidades.css';

const Generalidades = () => {
  // Estado para la sección activa
  const [activeSection, setActiveSection] = useState(null);

  // Manejar clics en el menú para cambiar la sección activa
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="generalidades-container">
      <div className="sidebar-menu">
        <h2>Contenido</h2>
        <ul>
          <li>
            <button onClick={() => handleSectionClick('introduccion')}>Introducción</button>
          </li>
          <li>
            <button onClick={() => handleSectionClick('antecedentes')}>Antecedentes</button>
          </li>
          <li>
            <button onClick={() => handleSectionClick('planteamiento')}>Planteamiento del Problema</button>
          </li>
          <li>
            <button onClick={() => handleSectionClick('arbol-problemas')}>Árbol de Problemas</button>
          </li>
          <li>
            <button onClick={() => handleSectionClick('formulacion')}>Formulación del Problema</button>
          </li>
          <li>
            <button onClick={() => handleSectionClick('proposito')}>Propósito del Estudio</button>
          </li>
        </ul>
      </div>

      <div className="content-section">
        {activeSection === 'introduccion' && (
          <section id="introduccion">
            <h3>Introducción</h3>
            <p>Aquí va el contenido de la introducción.</p>
          </section>
        )}
        {activeSection === 'antecedentes' && (
          <section id="antecedentes">
            <h3>Antecedentes</h3>
            <p>Aquí va el contenido de los antecedentes.</p>
          </section>
        )}
        {activeSection === 'planteamiento' && (
          <section id="planteamiento">
            <h3>Planteamiento del Problema</h3>
            <p>Aquí va el contenido del planteamiento del problema.</p>
          </section>
        )}
        {activeSection === 'arbol-problemas' && (
          <section id="arbol-problemas">
            <h3>Árbol de Problemas</h3>
            <p>Aquí va el contenido del árbol de problemas.</p>
          </section>
        )}
        {activeSection === 'formulacion' && (
          <section id="formulacion">
            <h3>Formulación del Problema</h3>
            <p>Aquí va el contenido de la formulación del problema.</p>
          </section>
        )}
        {activeSection === 'proposito' && (
          <section id="proposito">
            <h3>Propósito del Estudio</h3>
            <p>Aquí va el contenido del propósito del estudio.</p>
          </section>
        )}
      </div>
    </div>
  );
};

export default Generalidades;
