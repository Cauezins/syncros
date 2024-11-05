
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import '../assets/css/login/style.css'
import LoginSection from '../components/login/LoginSection';

function Login() {
    const canvasRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        canvasRef.current.appendChild(renderer.domElement);

        const objects = [];
        const geometries = [
            new THREE.TorusGeometry(1, 0.3, 32, 100),
            new THREE.OctahedronGeometry(1, 2),
            new THREE.TetrahedronGeometry(1, 2),
            new THREE.IcosahedronGeometry(1, 1),
            new THREE.SphereGeometry(1, 64, 64)
        ];

        const createGlowMaterial = () => {
            const hue = Math.random() * 360;
            return new THREE.MeshStandardMaterial({
                color: new THREE.Color(`hsl(${hue}, 70%, 50%)`),
                emissive: new THREE.Color(`hsl(${hue}, 70%, 30%)`),
                roughness: 0.2,
                metalness: 0.8,
                transparent: true,
                opacity: 0.9
            });
        };

        for (let i = 0; i < 8; i++) {
            const geometry = geometries[Math.floor(Math.random() * geometries.length)];
            const material = createGlowMaterial();
            const object = new THREE.Mesh(geometry, material);

            const angle = (i / 8) * Math.PI * 2;
            const radius = 5;
            object.position.x = Math.cos(angle) * radius;
            object.position.y = Math.sin(angle) * radius;
            object.position.z = -2;

            objects.push(object);
            scene.add(object);
        }

        // Iluminação
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);

        const backLight = new THREE.PointLight(0x4477ff, 1);
        backLight.position.set(-10, -10, -10);
        scene.add(backLight);

        const topLight = new THREE.PointLight(0xff7744, 1);
        topLight.position.set(0, 10, 0);
        scene.add(topLight);

        camera.position.z = 10;

        const mouse = new THREE.Vector2();
        const raycaster = new THREE.Raycaster();

        const handleMouseMove = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(objects);

            objects.forEach(object => {
                gsap.to(object.scale, { x: 1, y: 1, z: 1, duration: 0.5 });
            });

            intersects.forEach(intersect => {
                gsap.to(intersect.object.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 0.3 });
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            requestAnimationFrame(animate);

            objects.forEach(object => {
                object.rotation.x += 0.01;
                object.rotation.y += 0.01;
            });

            const time = Date.now() * 0.001;
            objects.forEach((object, index) => {
                const angle = (index / objects.length) * Math.PI * 2;
                const radius = 5;
                object.position.x = Math.cos(angle + time) * radius;
                object.position.y = Math.sin(angle + time) * radius;
            });

            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    return (
        <div className="bg-gray-900 min-h-screen overflow-hidden">
            <div id="canvas-container" ref={canvasRef} style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0 }}></div>
            <LoginSection />
        </div>

    );
}

export default Login;