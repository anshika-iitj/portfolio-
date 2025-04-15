
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame, Canvas, extend, useThree } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// Animated floating sphere component
const AnimatedSphere = ({ position, size, color, speed, distort = 0.3 }) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (!sphereRef.current) return;
    sphereRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * speed) * 0.5;
    sphereRef.current.rotation.x = clock.getElapsedTime() * 0.1;
    sphereRef.current.rotation.y = clock.getElapsedTime() * 0.15;
  });

  return (
    <Sphere args={[size, 64, 64]} position={position} ref={sphereRef}>
      <MeshDistortMaterial 
        color={color}
        attach="material"
        distort={distort}
        speed={0.5}
        roughness={0.5}
        metalness={0.3}
      />
    </Sphere>
  );
};

// Main scene component
const Scene = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.z = 15;
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <AnimatedSphere 
        position={[-4, 0, -5]} 
        size={1.5} 
        color="#9b87f5" 
        speed={0.3} 
        distort={0.4}
      />
      <AnimatedSphere 
        position={[4, 2, -10]} 
        size={3} 
        color="#7E69AB" 
        speed={0.2} 
        distort={0.2}
      />
      <AnimatedSphere 
        position={[-3, -3, -8]} 
        size={2} 
        color="#1A1F2C" 
        speed={0.4} 
        distort={0.3}
      />
      <AnimatedSphere 
        position={[5, -2, -12]} 
        size={1.8} 
        color="#8E9196" 
        speed={0.5} 
        distort={0.5}
      />
      
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} intensity={0.5} levels={9} mipmapBlur />
      </EffectComposer>
    </>
  );
};

// Export the canvas wrapper component
const ThreeScene = () => {
  return (
    <div className="canvas-container">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 60 }}>
        <Scene />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
