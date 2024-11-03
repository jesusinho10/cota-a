import React from 'react';
import '../styles/Biblioteca.css'; // Asegúrate de crear este archivo CSS

const Biblioteca = () => {
  return (
    <div className="biblioteca-container">
      <h2>Biblioteca</h2>
      <p>
        En esta sección se presenta la recopilación de fuentes y referencias que sustentan la investigación realizada. 
        A continuación, se detallan los libros, artículos y recursos utilizados.
      </p>
      <div className="referencias">
        <h3>Referencias</h3>
        <ul>
          <li>Autor, A. (Año). Título del libro. Editorial.</li>
          <li>Autor, B. (Año). Título del artículo. Revista, Volumen(Número), páginas.</li>
          <li>Nombre del recurso web. (Año). Título de la página. URL</li>
          {/* Añade más referencias según sea necesario */}
        </ul>
      </div>
    </div>
  );
};

export default Biblioteca;
