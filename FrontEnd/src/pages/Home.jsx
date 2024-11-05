import { useEffect, useRef } from 'react';
import '../assets/css/home/style.css';
import NavBar from '../components/home/NavBar';
import HeroSection from '../components/home/HeroSection';
import * as THREE from 'three';
import FeatureSection from '../components/home/FeatureSection';
import CTaSection from '../components/home/CTaSection';
import AboutSection from '../components/home/AboutSection';
import PricingSection from '../components/home/PricingSection';
import FAqSection from '../components/home/FAqSection';
import CTaTwoSection from '../components/home/CTaTwoSection';
import Footer from '../components/home/Footer';

function Home() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const objectsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    // Scene setup with transparent background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });

    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    containerRef.current.appendChild(renderer.domElement);

    // Store refs
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Enhanced geometry definitions with more detail
    const geometries = [
      new THREE.TorusGeometry(0.8, 0.3, 30, 200),
      new THREE.OctahedronGeometry(0.7, 2),
      new THREE.TetrahedronGeometry(0.7, 2),
      new THREE.IcosahedronGeometry(0.7, 2),
      new THREE.SphereGeometry(0.6, 64, 64)
    ];

    // Enhanced material creation
    const createGlowMaterial = () => {
      return new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(`hsl(${190 + Math.random() * 60}, 70%, 50%)`),
        emissive: new THREE.Color(`hsl(${200 + Math.random() * 40}, 70%, 30%)`),
        metalness: 0.2,
        roughness: 0.1,
        transparent: true,
        opacity: 0.9,
        side: THREE.DoubleSide,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1
      });
    };

    // Object creation with fixed scale
    const addObject = (x, y, z) => {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = createGlowMaterial();
      const object = new THREE.Mesh(geometry, material);
      
      object.position.set(x, y, z);
      object.initialPosition = { x, y, z };
      object.baseScale = 1; // Store base scale
      
      object.rotationSpeed = {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01
      };
      
      // Set initial scale
      const scale = 1;
      object.scale.set(scale, scale, scale);
      
      objectsRef.current.push(object);
      scene.add(object);
      return object;
    };

    // Create objects in circular pattern
    const createObjects = () => {
      const radius = 6;
      const heightVariation = 3;
      
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() * 2 - 1) * heightVariation;
        
        addObject(x, y, z);
      }
    };

    createObjects();

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const mainLight = new THREE.PointLight(0xffffff, 0.8);
    mainLight.position.set(0, 5, 10);
    scene.add(mainLight);

    const secondaryLight = new THREE.PointLight(0x4169e1, 0.4);
    secondaryLight.position.set(-5, -5, 5);
    scene.add(secondaryLight);

    camera.position.z = 12;

    // Animation with fixed scaling
    const animate = () => {
      const { x: mouseX, y: mouseY } = mouseRef.current;
      const { x: targetX, y: targetY } = targetRef.current;

      mouseRef.current.x += (targetX - mouseX) * 0.05;
      mouseRef.current.y += (targetY - mouseY) * 0.05;
      camera.position.x = mouseRef.current.x * 0.3;
      camera.position.y = mouseRef.current.y * 0.3;
      camera.lookAt(scene.position);

      objectsRef.current.forEach((object) => {
        object.rotation.x += object.rotationSpeed.x;
        object.rotation.y += object.rotationSpeed.y;
        
        const time = Date.now() * 0.001;
        const initialPos = object.initialPosition;
        
        // Subtle floating movement
        object.position.y = initialPos.y + Math.sin(time + initialPos.x) * 0.1;
        
        // Orbital movement
        const orbitSpeed = 0.1;
        object.position.x = initialPos.x * Math.cos(time * orbitSpeed) - 
                          initialPos.z * Math.sin(time * orbitSpeed);
        object.position.z = initialPos.z * Math.cos(time * orbitSpeed) + 
                          initialPos.x * Math.sin(time * orbitSpeed);
      });

      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );
      
      targetRef.current.x = mouse.x * 2;
      targetRef.current.y = mouse.y * 2;
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(requestRef.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      objectsRef.current.forEach(object => {
        object.geometry.dispose();
        object.material.dispose();
      });
      
      renderer.dispose();
      
      if (containerRef.current && renderer.domElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen overflow-x-hidden">
      <div ref={containerRef} className="fixed top-0 left-0 w-full h-full z-0"></div>
      <NavBar />
      <HeroSection/>
      <FeatureSection/>
      <CTaSection/>
      <AboutSection/>
      <PricingSection/>
      <FAqSection/>
      <CTaTwoSection/>
      <Footer/>
    </div>
  );
}

export default Home;
