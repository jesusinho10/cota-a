import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Generalidades from './components/Generalidades';
import MarcoTeorico from './components/MarcoTeorico';
import AnalisisDisenoEstructurado from './components/AnalisisDisenoEstructurado';
import DisenoObjetos from './components/DisenoObjetos';
import Biblioteca from './components/Biblioteca';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Aquí se inserta el Navbar */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/generalidades" element={<Generalidades />} />
          <Route path="/marco-teorico" element={<MarcoTeorico />} />
          <Route path="/diseno-estructurado" element={<AnalisisDisenoEstructurado />} />
          <Route path="/diseno-objetos" element={<DisenoObjetos />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
