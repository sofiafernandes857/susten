import React from 'react'; 
import { BrowserRouter as NavLink, Routes, Route } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import ExplorarCarro from './ExplorarCarro';
import Comparacao from './Comparacao';
import Formulario from './formulario'; 
import './carros3D.css';
import '../../variaveis.css';
const Carros3D = () => {
  return (
    <section>
      <Header />
      <section className="carros3D-container">
        <nav className="carros3D-nav">
          <ul>
            <li>
              <NavLink
                to="explorar"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Explorar Carro
              </NavLink>
            </li>
            <li>
              <NavLink
                to="comparacao"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Comparação
              </NavLink>
            </li>
            <li>
              <NavLink
                to="formulario"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Enviar Ideias
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="carros3D-content">
          <Routes>
            <Route path="explorar" element={<ExplorarCarro />} />
            <Route path="comparacao" element={<Comparacao />} />
            <Route path="formulario" element={<Formulario />} />
          </Routes>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Carros3D;
