import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import SignUpSection from '../components/signup/SignUpSection';
import '@/assets/css/SignUpPage/style.css'

function Signup() {
    const containerRef = useRef();

    useEffect(() => {
        // Configuração da cena
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        if (containerRef.current) {
            containerRef.current.appendChild(renderer.domElement);
        }

        // Criação dos objetos 3D
        const objects = [];
        const geometries = [
            new THREE.TorusGeometry(1, 0.3, 16, 100),
            new THREE.OctahedronGeometry(1),
            new THREE.TetrahedronGeometry(1),
            new THREE.IcosahedronGeometry(1),
            new THREE.SphereGeometry(1, 32, 32),
        ];

        const createGlowMaterial = () => {
            return new THREE.MeshPhongMaterial({
                color: new THREE.Color(`hsl(${Math.random() * 360}, 70%, 50%)`),
                emissive: new THREE.Color(`hsl(${Math.random() * 360}, 70%, 30%)`),
                shininess: 100,
                transparent: true,
                opacity: 0.9,
            });
        };

        for (let i = 0; i < 8; i++) {
            const geometry = geometries[Math.floor(Math.random() * geometries.length)];
            const material = createGlowMaterial();
            const object = new THREE.Mesh(geometry, material);

            const angle = (i / 8) * Math.PI * 2;
            const radius = 8;
            object.position.x = Math.cos(angle) * radius;
            object.position.y = Math.sin(angle) * radius;
            object.position.z = -2;

            objects.push(object);
            scene.add(object);
        }

        // Iluminação
        const ambientLight = new THREE.AmbientLight(0x404040);
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(10, 10, 10);
        scene.add(ambientLight);
        scene.add(pointLight);

        camera.position.z = 15;

        // Interação com o mouse
        const mouse = new THREE.Vector2();
        const raycaster = new THREE.Raycaster();

        const onMouseMove = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(objects);

            objects.forEach(object => {
                gsap.to(object.scale, {
                    x: 1,
                    y: 1,
                    z: 1,
                    duration: 0.5
                });
            });

            intersects.forEach(intersect => {
                gsap.to(intersect.object.scale, {
                    x: 1.5,
                    y: 1.5,
                    z: 1.5,
                    duration: 0.3
                });
            });
        };

        document.addEventListener('mousemove', onMouseMove);

        // Animação
        const animate = () => {
            requestAnimationFrame(animate);

            objects.forEach(object => {
                object.rotation.x += 0.01;
                object.rotation.y += 0.01;
            });

            const time = Date.now() * 0.001;
            objects.forEach((object, index) => {
                const angle = (index / objects.length) * Math.PI * 2;
                const radius = 8;
                object.position.x = Math.cos(angle + time) * radius;
                object.position.y = Math.sin(angle + time) * radius;
            });

            renderer.render(scene, camera);
        };

        animate();

        // Ajuste de tela
        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', onWindowResize);

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onWindowResize);
            renderer.dispose();
        };
    }, []);
    
    return (
        <div className="bg-gray-900 min-h-screen overflow-hidden">
            <div id="canvas-container" ref={containerRef} style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0 }}></div>
            <SignUpSection />
        </div>
    );
}

export default Signup;
