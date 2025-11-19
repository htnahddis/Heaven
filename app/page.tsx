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
    <div className="min-h-screen bg-black text-white overflow-hidden relative mt-15">
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


      {/* <nav className="relative z-50 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt='logo' width={100} height={100}/>
          <span className="text-2xl font-bold tracking-wider">HEAVEN</span>
        </div>
        

        <Link href='/login'><button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
          LOGIN/SIGNUP
        </button></Link>
      </nav> */}


      <div className="relative z-10 container mx-auto px-8 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
        
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              WELCOME TO<br/>
              
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              HEAVEN
              </span>
            </h1>
                <div className="text-white-200 font-semibold text-lg tracking-wide ">
              HEAVEN helps gamers turn passion into a profession by bringing all esports opportunities to one place.
From jobs to tournaments, it’s the platform where every gamer levels up.
            </div>

            <button className="group bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105">
              Let's go!
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
   
   {/* //Added part to extende hte home page */}
   <section className="relative z-10 container mx-auto px-8 py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold">Currently Trending Games</h2>
          <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
            SEE ALL
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Valorant', image: '/main/game1.jpg', players: '40k+' },
            { title: 'League of Legends', image: '/main/game2.jpg', players: '40k+' },
            { title: 'Fortnite', image: '/main/game3.jpg', players: '40k+' },
            { title: 'Call of Duty', image: 'main/game4.jpg', players: '40k+' }
          ].map((game, index) => (
            <div key={index} className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-orange-400 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <div className="aspect-square  flex items-center justify-center">
                <img src={game.image} alt="gameImage"  className="w-full h-full object-cover"/>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-gray-400">{game.players}</span>
                </div>
                <h3 className="text-lg font-semibold">{game.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 container mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-lg blur-2xl opacity-20"></div>
            <div className="relative ">
              <div className="aspect-square bg-gradient-to-br from-green-500/30 to-gray-500/30 rounded-lg flex items-center justify-center">
                
<div className="h-full w-full">
  <video
    className="h-full w-full object-cover bg-red-600"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/main/main-section-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>


              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-5xl font-bold">
             Find Your Next Gaming Job
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Explore exciting opportunities built just for gamers. Search easily, apply confidently, and enjoy the process with full support from our team to help you land the role that fits your passion.
            </p>
            <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
           Stay more connected with the gaming community!
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative  rounded-lg overflow-hidden border border-gray-700 aspect-video flex items-center justify-center">
           <img src="/main/team-image.jpg" alt="team-photo" />
          </div>

          <div className="space-y-6">
            <h3 className="text-4xl font-bold"> One stop solution for GAMING</h3>
         
            <ul className="space-y-4">
              {[
                'Find your team',
                'Stay updated with recent news',
                'Compare your stats',
                'Know your game better'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

     

      
   
   
   
    </div>




  );

  
}