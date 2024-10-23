import React, { useEffect } from 'react';  
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import CarroCheio from '../../models/carroFE.glb';
import CarroF1 from '../../models/carroF1.glb';
import './carros3D.css'; 
import '../../variaveis.css';

const Comparacao = () => {
  useEffect(() => {
    const container = document.getElementById('containerComparacao'); 
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF2E2E2);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight * 0.8);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.target.set(0, 0, 0);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    const light2 = new THREE.DirectionalLight(0xffffff, 1);
    light2.position.set(-5, 5, 5).normalize();
    scene.add(light2);

    const light3 = new THREE.DirectionalLight(0xffffff, 1);
    light3.position.set(5, -5, 5).normalize();
    scene.add(light3);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(0, 2, 0);
    scene.add(pointLight);

    const gltfLoader = new GLTFLoader();
    let carro1, carro2;

    function applyLightColor(car, color) {
      car.traverse((node) => {
        if (node.isMesh) {
          node.material.color.set(color);
          node.material.needsUpdate = true;
        }
      });
    }

    gltfLoader.load(CarroCheio, function (gltf) {
      carro1 = gltf.scene;

      if (isMobile) {
        carro1.position.set(-1.5, -1, 0);
        carro1.scale.set(0.05, 0.05, 0.05);
      } else if (isTablet) {
        carro1.position.set(-3.5, -2, 0);
        carro1.scale.set(0.09, 0.09, 0.09);
      } else {
        carro1.position.set(-5, -1, 0);
        carro1.scale.set(0.1, 0.1, 0.1);
      }

      carro1.rotation.y = 0;

      applyLightColor(carro1, 0x87CEEB);
      scene.add(carro1);

      gltfLoader.load(CarroF1, function (gltf) {
        carro2 = gltf.scene;

        if (isMobile) {
          carro2.position.set(1.5, -1, 0);
          carro2.scale.set(0.01, 0.01, 0.01);
        } else if (isTablet) {
          carro2.position.set(2.5, -2, 0);
          carro2.scale.set(0.02, 0.02, 0.02);
        } else {
          carro2.position.set(3, -1, 0);
          carro2.scale.set(0.025, 0.025, 0.025);
        }
  
        carro2.rotation.y = 0;

        applyLightColor(carro2, 0xFFCCCB);
        scene.add(carro2);

        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
       animate();
      });
    });

    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      const height = window.innerHeight * 0.8;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    if (isMobile) {
      camera.position.set(0, 3, 0);
      controls.minDistance = 9;
      controls.maxDistance = 15;
    } else if (isTablet) {
      camera.position.set(0, 1.8, 4);
      controls.minDistance = 15;
      controls.maxDistance = 25;
    } else {
      camera.position.set(0, 2, 5);
      controls.minDistance = 15;
      controls.maxDistance = 30;
    }

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  const showPopup = (carModel) => {
    const contentLeft = carContentsLeft[carModel];
    const contentRight = carContentsRight[carModel];
    
    if (contentLeft && contentRight) {
      document.getElementById('popup-text1').innerHTML = contentLeft;
      document.getElementById('popup-text2').innerHTML = contentRight;
      document.getElementById('popup1').style.display = 'block';
      document.getElementById('popup2').style.display = 'block';
    } else {
      document.getElementById('popup-text1').innerHTML = 'Conteúdo não encontrado.';
      document.getElementById('popup1').style.display = 'block';
      document.getElementById('popup-text2').innerHTML = 'Conteúdo não encontrado.';
      document.getElementById('popup2').style.display = 'block';
    }
  };

  const closePopups = () => {
    document.getElementById('popup1').style.display = 'none';
    document.getElementById('popup2').style.display = 'none';
  };

  const carContentsLeft = {
    pneu: `<ul><strong>Fórmula E: Pneu</strong>
    <li>Os carros da Fórmula E utilizam o mesmo pneu, chamado de Michelin Pilot Sport EV.</li><li>Esse tipo de pneu é feito para todo tipo de clima, não necessitando a troca de pneus para pista seca ou para molhada.</li><li>Tem uma maior eficiência energética.</li><li>Durabilidade, podendo utilizar o mesmo pneu a corrida inteira.</li><li>Sustentáveis.</li></ul>`,
    motor: `<ul><strong>Fórmula E: Motor</strong>
    <li>Cada equipe pode escolher o motor que deseja utilizar</li><li>Os motores utilizados são projetados para máxima eficiência e potência, podendo chegar a 350 kW</li><li>Cada equipe pode projetar sua própria unidade de potência, que inclui o motor elétrico, a transmissão e o sistema de controle, permitindo uma variedade de abordagens e inovações tecnológicas.</ul>`,
    chassi: `<ul><strong>Fórmula E: Chassi</strong>
    <li>O GEN3 usa o chassi fabricado pela Dallara com materiais compostos, como fibra de carbono.</li><li>Ele acomoda as unidades de potência elétricas, baterias e sistemas de controle, proporcionando um pacote otimizado para as corridas.<li>Tem um comprimento de 5 metros de comprimento e 1,7 metros de largura</li> </ul>`,
    velocidade: `<ul><strong>Fórmula E: Velocidade </strong><li>O Gen3 pode chegar a uma velocidade de 322 km/h</li><li> Vai de 0 a 100km/h em 1,82 segundos</li></ul>`,
    comprimento: `<ul><strong>Fórmula E: Comprimento</strong>
    <li>Comprimento: 5 metros</li><li>Largura: 1,7 metros</li><li>Altura: 1,2 metros</li></ul>`,
    potencia: `<ul><strong>Fórmula E: Potência</strong>
    <li>O Gen3 possui uma potência de 350 kW feita pelo motor.</li><li>Mas essa potência pode aumentar para 600 kW por conta da recuperação de energia pelos freios.</li></ul>`,
    peso: `<ul><strong>Fórmula E: Peso</strong>
    <li>O Gen3 pesa aproximadamente 850kg</li></ul>`,
    bateria: `<ul><strong>Fórmula E: Bateria</strong>
    <li>Os carros utilizam baterias de íon de lítio que são projetadas especificamente para as demandas das corridas elétricas.</li><li>O Gen3 introduziu baterias com uma capacidade de 66 kWh.</li><li> Aumenta a potência e a eficiência, permitindo velocidades mais altas e melhor desempenho em corridas.</li><li>A Fórmula E tem um forte foco em sustentabilidade, e as baterias são projetadas para serem mais eficientes e com menor impacto ambiental.</li></ul>`,
    software: `<ul><strong>Fórmula E: Software</strong><li>O software é extremamente importante para a FE principalmente para a equipe desenvolver uma estratégia com o piloto para um melhor desempenho durante a corrida. Outros são:</li><li>Telemetria</li><li>Gerenciamento de energia</li><li>Estratégia de corrida</li><li>Análise de desempenho</li><li>Comunicação</li><li>Simulações e desenvolvimento</li><li>Controle de pistas</li><li>Segurança</li></ul>`,
    padronizacao: `<ul><strong>Fórmula: Padronização</strong><li>95% de todos os componentes do carro da FE são exatamente os mesmos para todas as equipes.</li><li></li>Isso é um diferencial muito grande na Fórmula E, por conta que a vitória vai ao piloto que tiver a melhor estratégia e habilidade para aquela corrida.</ul>`,
    tecnologia: `<ul><strong>Fórmula E</strong><li>A Fórmula E é considerada o laboratório de tecnologias para as fabricantes de carros.</li><li>É nesta corrida que as marcas testam suas novas tecnologias para levar para os carros de rua e conseguir ao longo dos anos, deixar um trânsito mais sustentável para o planeta.</li></ul>`
  };

  const carContentsRight = {
    pneu: `<ul><strong>Fórmula 1: Pneu</strong>
        <li>Os carros da Fórmula 1 utilizam diferentes tipos de pneus durante a corrida, fornecidos pela Pirelli.</li><li>Para pista seca, são divididos em 5 tipos, do C1 ao C5, sendo o C1 o mais duro e o C5 o mais macio.</li><li>Para pista molhada, existem dois tipos, intermediários e wets.</li><li>Possuem cores diferentes para facilitar a identificação de cada tipo de pneu.</li></ul>`,
    motor: `<ul><strong>Fórmula 1: Motor</strong>
        <li>Os motores são de combustão interna de 1.6 litros V6 turboalimentados, com sistemas híbridos. Isso significa que eles combinam um motor a gasolina com um sistema elétrico.</li><li>Cada motor é chamado de "Unidade de Potência" (PU) e inclui o motor de combustão interna (ICE), um sistema de recuperação de energia cinética (ERS), um gerador de motor elétrico (MGU-K) e um gerador de calor (MGU-H).</li></ul>`,
    chassi: `<ul><strong>Fórmula 1: Chassi</strong>
        <li> Cada equipe desenvolve um chassi único que é otimizado para o desempenho de seu motor, sistema de suspensão e aerodinâmica </li><li>Geralmente são feitos de fibra de carbono</li><li>Precisa ter um comprimento mínimo de 3,6 metros e uma largura máxima de 2 metros</li></ul>`,
    velocidade: `<ul><strong>Fórmula 1: Velocidade</strong>
        <li>Pode chegar a uma velocidade de 329 km/h</li><li>Vai de o a 100km/h em 2,8 segundos</li></ul>`,
    comprimento: `<ul><strong>Fórmula 1: Comprimento</strong>
        <li>Comprimento: variam entre 4 metros e 4,5 metros</li><li>Largura: no máximo 2 metros</li><li>Altura: Varia entre 0,95 metros e 1,2 metros</li></ul>`,
    potencia: `<ul><strong>Fórmula 1: Potência </strong>
        <li>Possui uma potência de 750 cv feita pelo motor.</li><li>Essa potência pode chegar a 1 050 cv pela regeneração de energia.</li></ul>`,
    peso: `<ul><strong>Fórmula 1: Peso</strong>
        <li>Um carro de Fórmula 1 pesa aproximadamente 798kg</li></ul>`,
    bateria: `<ul><strong>Fórmula 1: Bateria</strong><li>A capacidade da bateria varia dependendo do fabricante e do design específico, mas geralmente é em torno de 4 a 5 kWh. Essa capacidade é suficiente para armazenar energia recuperada durante a frenagem e fornecê-la para o sistema elétrico do carro.</li></ul>`,
    software: `<ul><strong>Fórmula 1: Software</strong><li>Telemetria</li><li>Gerenciamento de energia</li><li>Design</li><li>Análise de desempenho</li><li>Comunicação</li><li>Simulações e desenvolvimento</li><li>Controle de pistas</li><li>Segurança</li></ul>`,
    padronizacao: `<ul><strong>Fórmula 1: Padronização</strong><li>Por mais que exista uma regulamentação sobre chassi, motor, pneu e outros, a os carros da F1 não são padronizados, fazendo que a maior parte da vitória seja por quem melhor constuiu o carro.</li></ul>`,
    tecnologia: `<ul><strong>Fórmula 1: Tecnologia</strong><li>No passado, a F1 foi um laboratório para novas tecnologias automotivas, entretanto isso já não é mais uma verdade.</li><li>Com o crescente debate sobre um mundo mais sustentável, muitos países vão até proibir a fabricação de carros a combustão, por ser um automóvel altamente poluente.</li></ul>`
  };

  return (
    <div>
        <h1 className='tituloCarro3d'>Compare os Carros da <span>Fórmula E</span> e da <span>Fórmula 1</span></h1>
        <div id="containerComparacao"></div>
        <div className="dropdown-containerComparacao">
            <div className="dropdownComparacao">
                <button className="dropbtnComparacao">Peças</button>
                <div className="dropdown-contentComparacao">
                    <a href="#" onClick={(e) => { e.preventDefault(); showPopup('pneu'); }}>Pneu</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); showPopup('motor'); }}>Motor</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); showPopup('chassi'); }}>Chassi</a>
                </div>
            </div>
            <div className="dropdownComparacao">
                <button className="dropbtnComparacao">Principais Diferenças</button>
                <div className="dropdown-contentComparacao">
                    <a href="#" onClick={(e) => { e.preventDefault(); showPopup('velocidade'); }}>Velocidade</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); showPopup('comprimento'); }}>Comprimento</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); showPopup('potencia'); }}>Potência</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); showPopup('peso'); }}>Peso</a>
                </div>
            </div>
            <div className="dropdownComparacao">
                <button className="dropbtnComparacao">Diferenciais FE</button>
                <div className="dropdown-contentComparacao">
                    <a href="#" onClick={(e) => { e.preventDefault(); showPopup('bateria'); }}>Bateria</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); showPopup('software'); }}>Software</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); showPopup('padronizacao'); }}>Padronização</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); showPopup('tecnologia'); }}>Tecnologia</a>
                </div>
            </div>
        </div>


        <div id="popup1" className="popup popup-left">
            <span className="close-btn" onClick={closePopups}>&times;</span>
            <p id="popup-text1"></p>
        </div>

        <div id="popup2" className="popup popup-right">
            <span className="close-btn" onClick={closePopups}>&times;</span>
            <p id="popup-text2"></p>
        </div>
    </div>
  );
};

export default Comparacao;
