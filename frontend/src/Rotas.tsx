import Navbar from 'components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';

const Rotas = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalog />} />
      
    </Routes>
  </BrowserRouter>
);

export default Rotas;
