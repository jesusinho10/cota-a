// src/components/MarcoTeorico.js
import React from 'react';
import '../styles/MarcoTeorico.css';

const MarcoTeorico = () => {
  return (
    <div className="marcoTeorico-container">
      <h2>Marco Teórico</h2>
      <p className="intro-text">
        Este es el marco teórico de tu proyecto. Aquí puedes añadir conceptos clave, definiciones y antecedentes importantes relacionados con el tema. 
      </p>
      
      <div className="image-section">
        <div className="image-container">
          <img src="/src/img/imagen1.jpg" alt="Descripción de la imagen 1" />
          <p>Descripción de la imagen 1</p>
        </div>
        <div className="image-container">
          <img src="/src/img/imagen2.jpg" alt="Descripción de la imagen 2" />
          <p>Descripción de la imagen 2</p>
        </div>
      </div>

      <div className="button-section">
        <button className="action-button">Leer más</button>
        <button className="action-button">Descargar PDF</button>
      </div>
    </div>
  );
};

export default MarcoTeorico;
