import React, { useEffect, useRef, useState } from 'react'; 
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import CarroCheio from '../../models/carroFE.glb';
import CarroContorno from '../../models/carroFEcon.glb';
import './carros3D.css';
import '../../variaveis.css';
import 'font-awesome/css/font-awesome.min.css';

const ExplorarCarro = () => {
    const containerRef = useRef(null);
  const carroRef = useRef(null);
  const rendererRef = useRef(null);
  const [currentColor, setCurrentColor] = useState('#af2c35');
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
    if (rendererRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF2E2E2);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight * 0.8);
    rendererRef.current = renderer;

    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(renderer.domElement);
    }

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.target.set(0, 0.5, 0);

    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xb0c4de, 1);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xb0c4de, 1);
    directionalLight2.position.set(-5, 5, 5);
    scene.add(directionalLight2);

    const directionalLight3 = new THREE.DirectionalLight(0xb0c4de, 1);
    directionalLight3.position.set(-5, -5, 5);
    scene.add(directionalLight3);

    const fillLight = new THREE.DirectionalLight(0xb0c4de, 2);
    fillLight.position.set(5, 0, -5);
    scene.add(fillLight);

    const gltfLoader = new GLTFLoader();
    let modelIndex = 0;
    const models = [CarroCheio, CarroContorno];

    function loadModel(modelPath, isContour) {
      if (carroRef.current) {
        scene.remove(carroRef.current);
        carroRef.current.traverse((node) => {
          if (node.isMesh) {
            node.geometry.dispose();
            node.material.dispose();
          }
        });
        carroRef.current = null;
      }

      gltfLoader.load(modelPath, (gltf) => {
        carroRef.current = gltf.scene;
        carroRef.current.scale.set(0.1, 0.1, 0.1);
        carroRef.current.position.set(0, -1.5, 0);

        const isMobile = window.innerWidth <= 768;
        const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

        if (isMobile) {
          carroRef.current.scale.set(0.1, 0.1, 0.1);
          carroRef.current.position.set(0, -1, 0);
        } else if (isTablet) {
          carroRef.current.scale.set(0.09, 0.09, 0.09);
          carroRef.current.position.set(0, -0.5, 0);
        } else {
          carroRef.current.scale.set(0.1, 0.1, 0.1);
          carroRef.current.position.set(0, -1.5, 0);
        }

        carroRef.current.rotation.y = Math.PI / -2;

        carroRef.current.traverse((node) => {
          if (node.isMesh) {
            if (isContour) {
              // Aplicar material de contorno
              const outlineMaterial = new THREE.MeshBasicMaterial({ color: 0xa0121b, wireframe: true });
              node.material = outlineMaterial;
            } else {
              // Aplicar material padrão com a cor atual
              const material = new THREE.MeshStandardMaterial({ color: currentColor });
              node.material = material;
            }
          }
        });

        scene.add(carroRef.current);
      });
    }

    loadModel(models[modelIndex], modelIndex === 1);

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
      const width = window.innerWidth;
      const height = window.innerHeight * 0.8;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    if (window.innerWidth <= 768) {
      camera.position.set(0, 1.5, 2);
      controls.minDistance = 15;
      controls.maxDistance = 40;
    } else if (window.innerWidth <= 1024) {
      camera.position.set(0, 1.8, 3);
      controls.minDistance = 16;
      controls.maxDistance = 10;
    } else {
      camera.position.set(0, 2, 5);
      controls.minDistance = 9;
      controls.maxDistance = 40;
    }

    const rotateLeftButton = document.getElementById('rotateLeftButton');
    const rotateRightButton = document.getElementById('rotateRightButton');
    const rotateDownButton = document.getElementById('rotateDownButton');
    const rotateUpButton = document.getElementById('rotateUpButton');
    const changeModelButton = document.getElementById('changeModelButton');

    if (rotateLeftButton) {
      rotateLeftButton.addEventListener('click', () => {
        if (carroRef.current) carroRef.current.rotation.y += Math.PI / 18;
      });
    }

    if (rotateRightButton) {
      rotateRightButton.addEventListener('click', () => {
        if (carroRef.current) carroRef.current.rotation.y -= Math.PI / 18;
      });
    }

    if (rotateDownButton) {
      rotateDownButton.addEventListener('click', () => {
        if (carroRef.current) carroRef.current.rotation.x -= Math.PI / 18;
      });
    }

    if (rotateUpButton) {
      rotateUpButton.addEventListener('click', () => {
        if (carroRef.current) carroRef.current.rotation.x += Math.PI / 18;
      });
    }

    if (changeModelButton) {
      changeModelButton.addEventListener('click', () => {
        modelIndex = (modelIndex + 1) % models.length;
        loadModel(models[modelIndex], modelIndex === 1);
      });
    }

    return () => {
      window.removeEventListener('resize', () => {});
      rotateLeftButton?.removeEventListener('click', () => {});
      rotateRightButton?.removeEventListener('click', () => {});
      rotateDownButton?.removeEventListener('click', () => {});
      rotateUpButton?.removeEventListener('click', () => {});
      changeModelButton?.removeEventListener('click', () => {});

      if (carroRef.current) {
        scene.remove(carroRef.current);
        carroRef.current.traverse((node) => {
          if (node.isMesh) {
            node.geometry.dispose();
            node.material.dispose();
          }
        });
      }
    };
  }, [currentColor]); // Adiciona currentColor como dependência

  useEffect(() => {
    if (carroRef.current) {
      carroRef.current.traverse((node) => {
        if (node.isMesh) {
          node.material.color.set(currentColor); // Muda a cor do carro
        }
      });
    }
  }, [currentColor]); // Atualiza a cor do carro sempre que currentColor mudar

  return (
    <div>
      <h1 className='tituloCarro3d'>Explore o Carro da <span>Fórmula E!</span></h1>
      <div ref={containerRef} id="threejs-canvas-container3d">
        <div id="threejs-loading3d">Carregando...</div>
      </div>
      <div id="threejs-controls3d">
        <button id="rotateLeftButton" className="threejs-control-button3d"><i className="fa fa-arrow-left"></i></button>
        <button id="rotateRightButton" className="threejs-control-button3d"><i className="fa fa-arrow-right"></i></button>
        <button id="rotateDownButton" className="threejs-control-button3d"><i className="fa fa-arrow-down"></i></button>
        <button id="rotateUpButton" className="threejs-control-button3d"> <i className="fa fa-arrow-up"></i></button>
        <button id="changeModelButton" className="threejs-control-button3d">Trocar modelo</button>
        <button
          id="colorPickerButton3d"
          className="threejs-control-button3d"
          onClick={() => setShowColorPicker(!showColorPicker)}
        >
          Mudar Cor
        </button>
        {showColorPicker && (
          <input
            type="color"
            onChange={(e) => setCurrentColor(e.target.value)}
            value={currentColor}
          />
        )}
      </div>
    </div>
  );
  };
  
  export default ExplorarCarro;
