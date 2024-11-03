import React from 'react';
import '../styles/DisenoObjetos.css'; // Asegúrate de crear este archivo CSS

const DisenoObjetos = () => {
  return (
    <div className="diseno-container">
      <h2>Análisis y Diseño Orientado a Objetos</h2>
      <div className="image-container">
        <img 
          src={require('../img/imagen1.png')} // Asegúrate de que el nombre de tu imagen sea correcto
          alt="Diagrama de Análisis y Diseño Orientado a Objetos"
        />
      </div>
    </div>
  );
};

export default DisenoObjetos;
