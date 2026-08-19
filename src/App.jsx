import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Inicio from './pages/Inicio';
import AcercaDe from './pages/AcercaDe';
import Servicios from './pages/Servicios';
import Clientes from './pages/Clientes';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="acerca-de" element={<AcercaDe />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="clientes" element={<Clientes />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}

export default App;
