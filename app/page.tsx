'use client';

import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Image from 'next/image';
import Link from 'next/link';

function ModelViewer({ modelPath }: { modelPath: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffa500, 1.2);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffff00, 0.8);
    directionalLight2.position.set(-5, 3, -5);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0xffd700, 1.5, 100);
    pointLight.position.set(0, 5, 0);
    scene.add(pointLight);

    let model: THREE.Group;

    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        model = gltf.scene;
        
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 3 / maxDim;
        model.scale.multiplyScalar(scale);

        scene.add(model);
      },
      undefined,
      (error) => {
        console.error('Error loading 3D model:', error);
      }
    );

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (model) {
        model.rotation.y += 0.005;
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [modelPath]);

  return <div ref={containerRef} className="w-full h-full" />;
}


export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M20,20 Q50,80 80,20 T140,20" fill="none" stroke="white" strokeWidth="2" opacity="0.3"/>
              <path d="M40,100 Q70,40 100,100 T160,100" fill="none" stroke="white" strokeWidth="2" opacity="0.3"/>
              <circle cx="30" cy="150" r="15" fill="none" stroke="white" strokeWidth="2" opacity="0.2"/>
              <circle cx="170" cy="60" r="20" fill="none" stroke="white" strokeWidth="2" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)"/>
        </svg>
      </div>


      <nav className="relative z-50 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt='logo' width={100} height={100}/>
          <span className="text-2xl font-bold tracking-wider">HEAVEN</span>
        </div>
        
        {/* <div className="flex items-center gap-12">
          <a href="#" className="hover:text-orange-400 transition-colors">Home</a>
          <a href="#" className="hover:text-orange-400 transition-colors">About us</a>
          <a href="#" className="hover:text-orange-400 transition-colors">News</a>
        </div> */}

        <Link href='/login'><button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
          LOGIN/SIGNUP
        </button></Link>
      </nav>


      <div className="relative z-10 container mx-auto px-8 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="text-orange-400 font-semibold text-lg tracking-wide animate-pulse">
              Proved By prodesigner
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              WELCOME TO<br/>
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                HEAVEN,
              </span><br/>
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Gamer
              </span>
            </h1>

            <button className="group bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105">
              Get more details
              <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>

          <div className="relative flex items-center justify-center h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div 
              className="relative w-full h-full z-10"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              <ModelViewer modelPath="/models/controller.glb" />
            </div>
          </div>
        </div>
      </div>


      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <h2 className="text-[20rem] font-bold text-gray-800 opacity-50 whitespace-nowrap leading-none">
          HEAVEN
        </h2>
      </div>

      <div className="absolute top-1/4 left-10 w-4 h-4 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-orange-300 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
    </div>
  );
}