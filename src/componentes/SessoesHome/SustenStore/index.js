import React from 'react';
import './Store.css';
import Botao from '../../elementos/Botao'

const partners1 = [
  {
    name: 'Livro1',
    description:'Ayrton: O herói revelado',
    logo: `${process.env.PUBLIC_URL}/imagens/livroAyrton.svg`,
  },
  {
    name: 'Livro2',
    description:'Tecnologia da Fórmula 1: A engenharia explicada',
    logo: `${process.env.PUBLIC_URL}/imagens/livroF1.svg`,
  },
  {
    name: 'Livro3',
    description:'Fórmula E: A corrida para o futuro',
    logo: `${process.env.PUBLIC_URL}/imagens/livroFE.svg`,
  },
  {
    name: 'Livro4',
    description:'Como construir um carro',
    logo: `${process.env.PUBLIC_URL}/imagens/livroConstruir.svg`,
  },
  {
    name: 'Livro5',
    description:'Sobrevivendo para dirigir',
    logo: `${process.env.PUBLIC_URL}/imagens/livroSobreviver.svg`,
  },
  {
    name: 'Livro6',
    description:'Super carros: Construídos para correr',
    logo: `${process.env.PUBLIC_URL}/imagens/livroSuper.svg`,
  },
  {
    name: 'Livro7',
    description:'Carros em foco: Incríveis Descobertas e Curiosidades',
    logo: `${process.env.PUBLIC_URL}/imagens/livroCarrosFoco.svg`,
  },
];

const partners2 = [
  {
    name: 'Miniatura1',
    description:'Nelson Piquet Williams FW1 1987',
    logo: `${process.env.PUBLIC_URL}/imagens/MiniF1Amarelo.svg`,
  },
  {
    name: 'Miniatura2',
    description:'F1 Miniatura Ferrari SF23 #16 Charles Leclerc 1:18',
    logo: `${process.env.PUBLIC_URL}/imagens/MiniF1Vermelho.svg`,
  },
  {
    name: 'Miniatura3',
    description:'Formula E Season 5 #94 Mahindra Racing - 1:18',
    logo: `${process.env.PUBLIC_URL}/imagens/MiniFEVermelho.svg`,
  },
  {
    name: 'Miniatura4',
    description:'Formula E Gen2 Championship escala 1:18 ',
    logo: `${process.env.PUBLIC_URL}/imagens/MiniFECinza.svg`,
  },
  {
    name: 'Miniatura5',
    description:'Mini Capacete Tri Mundial F1 1991 Ayrton Senna - Escala 1:5',
    logo: `${process.env.PUBLIC_URL}/imagens/MiniCapaceteAyrton.svg`,
  },
  {
    name: 'Miniatura6',
    description:'Capacete Max Verstappen 2023 Schuberth Escala 1:2',
    logo: `${process.env.PUBLIC_URL}/imagens/MiniCapaceteAzul.svg`,
  },
  {
    name: 'Miniatura7',
    description:'Capacete George Russell 2023 Mercedes Escala 1:2',
    logo: `${process.env.PUBLIC_URL}/imagens/MiniCapaceteAmarelo.svg`,
  },
];

const Carousel = ({ partners }) => {
  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-track">
          {partners.map((partner, index) => (
            <div className="carousel-item" key={index}>
              <img src={partner.logo} alt={`${partner.name} logo`} />
              <p>{partner.description}</p>
            </div>
          ))}
          {partners.map((partner, index) => (
            <div className="carousel-item" key={index + partners.length}>
              <img src={partner.logo} alt={`${partner.name} logo`} />
              <p>{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SustenStore = () => {
  return (
    <div>
      <h1 className='tituloStore'>Explore o Mundo das <span>Miniaturas</span> e da Tecnologia <span>Automotiva</span></h1>
      <Carousel partners={partners1} />
      <Carousel partners={partners2} />
      <Botao span="Explorar a loja"></Botao>
    </div>
  );
};

export default SustenStore;
