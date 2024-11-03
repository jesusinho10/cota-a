// src/components/AnalisisDisenoEstructurado.js
import React, { useState } from 'react';
import '../styles/AnalisisDisenoEstructurado.css';

const AnalisisDisenoEstructurado = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="analisis-container">
      <h2>Análisis y Diseño Estructurado</h2>

      {/* Lista de Acontecimientos */}
      <div className="section">
        <h3 onClick={() => toggleSection('acontecimientos')}>Lista de Acontecimientos</h3>
        {activeSection === 'acontecimientos' && (
          <div className="content">
            <ul>
              <li>Acontecimiento 1</li>
              <li>Acontecimiento 2</li>
              <li>Acontecimiento 3</li>
            </ul>
          </div>
        )}
      </div>

      {/* Acontecimiento Detalle */}
      <div className="section">
        <h3 onClick={() => toggleSection('detalle')}>Acontecimiento Detalle</h3>
        {activeSection === 'detalle' && (
          <div className="content">
            <p>Descripción detallada del acontecimiento seleccionado. Aquí puedes añadir más información relevante.</p>
          </div>
        )}
      </div>

      {/* Modelo de Comportamiento */}
      <div className="section">
        <h3 onClick={() => toggleSection('modelo')}>Modelo de Comportamiento</h3>
        {activeSection === 'modelo' && (
          <div className="content">
            <p>Aquí se explica el modelo de comportamiento para los procesos en este análisis.</p>
          </div>
        )}
      </div>

      {/* Diagrama de Flujo de Datos */}
      <div className="section">
        <h3 onClick={() => toggleSection('diagramas')}>Diagramas de Flujo de Datos</h3>
        {activeSection === 'diagramas' && (
          <div className="content image-section">
            <div className="image-container">
              <img src="/src/img/diagrama_nivel1.jpg" alt="Diagrama de flujo de datos nivel 1" />
              <p>Diagrama de flujo de datos nivel 1</p>
            </div>
            <div className="image-container">
              <img src="/src/img/diagrama_nivel2.jpg" alt="Diagrama de flujo de datos nivel 2" />
              <p>Diagrama de flujo de datos nivel 2</p>
            </div>
            <div className="image-container">
              <img src="/src/img/diagrama_nivel3.jpg" alt="Diagrama de flujo de datos nivel 3" />
              <p>Diagrama de flujo de datos nivel 3</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalisisDisenoEstructurado;

