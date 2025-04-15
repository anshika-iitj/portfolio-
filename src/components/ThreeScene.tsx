
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

// Animated sphere with fallback error handling
const AnimatedSphere = ({ position, size, color, speed = 0.3 }) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (!sphereRef.current) return;
    sphereRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * speed) * 0.5;
    sphereRef.current.rotation.x = clock.getElapsedTime() * 0.1;
    sphereRef.current.rotation.y = clock.getElapsedTime() * 0.15;
  });

  return (
    <mesh ref={sphereRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial 
        color={color}
        roughness={0.5}
        metalness={0.3}
      />
    </mesh>
  );
};

// Main scene component
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <AnimatedSphere 
        position={[-4, 0, -5]} 
        size={1.5} 
        color="#9b87f5" 
        speed={0.3} 
      />
      <AnimatedSphere 
        position={[4, 2, -10]} 
        size={3} 
        color="#7E69AB" 
        speed={0.2} 
      />
      <AnimatedSphere 
        position={[-3, -3, -8]} 
        size={2} 
        color="#1A1F2C" 
        speed={0.4} 
      />
      <AnimatedSphere 
        position={[5, -2, -12]} 
        size={1.8} 
        color="#8E9196" 
        speed={0.5} 
      />
    </>
  );
};

// Error boundary component
const ErrorFallback = () => {
  return null; // Returns nothing, letting the parent component use FallbackBackground
};

// Export the canvas wrapper component
const ThreeScene = () => {
  return (
    <div className="canvas-container">
      <Canvas 
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 15], fov: 60 }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color('#ffffff00'));
        }}
        shadows
        errorBoundary={ErrorFallback}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
