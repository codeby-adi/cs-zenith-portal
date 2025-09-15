import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Extend Three.js objects
extend({ Points, PointMaterial });

interface ParticleSystemProps {
  count?: number;
  mouse?: React.MutableRefObject<[number, number]>;
}

const ParticleSystem = ({ count = 5000, mouse }: ParticleSystemProps) => {
  const mesh = useRef<THREE.Points>(null);
  const light = useRef<THREE.PointLight>(null);

  // Generate random particle positions
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Random positions in a sphere
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      // Gradient colors from cyan to purple
      const gradient = Math.random();
      colors[i * 3] = gradient * 0.1 + 0.3; // R
      colors[i * 3 + 1] = gradient * 0.8 + 0.2; // G  
      colors[i * 3 + 2] = gradient * 0.9 + 0.1; // B
    }
    
    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      // Rotate the particle system
      mesh.current.rotation.x = state.clock.elapsedTime * 0.1;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
      
      // Interactive mouse effect
      if (mouse?.current) {
        mesh.current.rotation.x += mouse.current[1] * 0.0001;
        mesh.current.rotation.y += mouse.current[0] * 0.0001;
      }
    }
    
    if (light.current) {
      light.current.intensity = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <group>
      <pointLight ref={light} position={[10, 10, 10]} color="#00ffff" intensity={1} />
      <Points ref={mesh} positions={positions} colors={colors}>
        <PointMaterial
          size={0.015}
          vertexColors
          blending={THREE.AdditiveBlending}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

interface ParticleBackgroundProps {
  className?: string;
}

const ParticleBackground = ({ className = "" }: ParticleBackgroundProps) => {
  const mouse = useRef<[number, number]>([0, 0]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current = [
        event.clientX - window.innerWidth / 2,
        event.clientY - window.innerHeight / 2,
      ];
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ParticleSystem mouse={mouse} />
        <ambientLight intensity={0.1} />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;