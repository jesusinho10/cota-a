import React from 'react';
import '../styles/Inicio.css';  // Asegúrate de que los estilos se importen correctamente
import imagen1 from '../img/imagen1.png'; // Ajusta la ruta según tu estructura
// Ajusta la ruta según tu estructura

const Inicio = () => {
  return (
    <div className="inicio-container">
      <div className="inicio-header">
        <h1>Sistema de búsqueda de perritos extraviados</h1>
        <p>Explora las diferentes secciones de análisis y diseño.</p>
      </div>

      {/* Contenedor para las dos imágenes */}
      <div className="inicio-images">
        <img src={imagen1} alt="Imagen 1" />
        
      </div>
    </div>
  );
};

export default Inicio;





