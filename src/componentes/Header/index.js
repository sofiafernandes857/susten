import './Header.css'
import '../../variaveis.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    const [ativo, setAtivo] = useState(false);

    const toggleMenu = () => {
        setAtivo(!ativo);
    };

    return (
        <header>
            <div className="logo">
                <Link to={"/"}>
                    <img src= {`${process.env.PUBLIC_URL}/imagens/logo-sustenrace.png`} alt='Logo da Sustenrace'></img>
                </Link>
                <span>Sustenrace</span>
            </div>
            <nav className={`navbar ${ativo ? 'menuAtivo' : ''}`}>
                <div className="menuHamburguer" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="menuLinks">
                    <button className="fecharMenu" onClick={toggleMenu}>X</button>
                    {/* <li><Link to="/">Home</Link></li> */}
                    <li><a href="#formulaE">Fórmula E</a></li>
                    <li><a href="#impactos">Impactos da Corrida</a></li>
                    <li><a href="#sustenrace">Sustenrace</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#carro">Carro 3D</a></li>
                    <li><a href="#bpm">Batimentos Cardíacos</a></li>
                    <li><a href="#forum">Fórum</a></li>
                    {/* <li><Link to="/carros3D">Carros 3D</Link></li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header;