import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Box, Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

interface RobotProps {
  mousePosition: { x: number; y: number };
}

const Robot = ({ mousePosition }: RobotProps) => {
  const robotRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const eyeLeftRef = useRef<THREE.Mesh>(null);
  const eyeRightRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (robotRef.current) {
      // Convert mouse position to world coordinates
      const targetX = (mousePosition.x / window.innerWidth) * 2 - 1;
      const targetY = -(mousePosition.y / window.innerHeight) * 2 + 1;
      
      // Smooth movement towards cursor
      robotRef.current.position.x = THREE.MathUtils.lerp(
        robotRef.current.position.x,
        targetX * viewport.width * 0.5,
        0.05
      );
      robotRef.current.position.y = THREE.MathUtils.lerp(
        robotRef.current.position.y,
        targetY * viewport.height * 0.5,
        0.05
      );
      
      // Add subtle floating animation
      robotRef.current.position.z = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      
      // Head bobbing
      if (headRef.current) {
        headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 3) * 0.1;
      }
      
      // Eye blinking effect
      if (eyeLeftRef.current && eyeRightRef.current) {
        const blink = Math.sin(state.clock.elapsedTime * 0.5) > 0.8 ? 0.1 : 1;
        eyeLeftRef.current.scale.y = blink;
        eyeRightRef.current.scale.y = blink;
      }
    }
  });

  return (
    <group ref={robotRef} position={[0, 0, 0]} scale={0.8}>
      {/* Body */}
      <Box args={[1, 1.5, 0.8]} position={[0, -1, 0]}>
        <meshStandardMaterial color="hsl(var(--primary))" metalness={0.7} roughness={0.3} />
      </Box>
      
      {/* Head */}
      <Box ref={headRef} args={[0.8, 0.8, 0.8]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="hsl(var(--primary))" metalness={0.8} roughness={0.2} />
      </Box>
      
      {/* Eyes */}
      <Sphere ref={eyeLeftRef} args={[0.1]} position={[-0.25, 0.6, 0.35]}>
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
      </Sphere>
      <Sphere ref={eyeRightRef} args={[0.1]} position={[0.25, 0.6, 0.35]}>
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
      </Sphere>
      
      {/* Antenna */}
      <Cylinder args={[0.02, 0.02, 0.3]} position={[0, 1.1, 0]}>
        <meshStandardMaterial color="hsl(var(--accent))" />
      </Cylinder>
      <Sphere args={[0.05]} position={[0, 1.25, 0]}>
        <meshStandardMaterial color="#ff0080" emissive="#ff0080" emissiveIntensity={0.8} />
      </Sphere>
      
      {/* Arms */}
      <Cylinder args={[0.1, 0.1, 0.8]} position={[-0.7, -0.5, 0]} rotation={[0, 0, Math.PI / 6]}>
        <meshStandardMaterial color="hsl(var(--primary))" metalness={0.6} roughness={0.4} />
      </Cylinder>
      <Cylinder args={[0.1, 0.1, 0.8]} position={[0.7, -0.5, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <meshStandardMaterial color="hsl(var(--primary))" metalness={0.6} roughness={0.4} />
      </Cylinder>
      
      {/* Hands */}
      <Sphere args={[0.15]} position={[-1, -0.9, 0]}>
        <meshStandardMaterial color="hsl(var(--accent))" />
      </Sphere>
      <Sphere args={[0.15]} position={[1, -0.9, 0]}>
        <meshStandardMaterial color="hsl(var(--accent))" />
      </Sphere>
      
      {/* Chest panel */}
      <Box args={[0.4, 0.6, 0.05]} position={[0, -0.8, 0.42]}>
        <meshStandardMaterial color="hsl(var(--accent))" emissive="hsl(var(--accent))" emissiveIntensity={0.2} />
      </Box>
      
      {/* Status light */}
      <Sphere args={[0.05]} position={[0, -0.6, 0.45]}>
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={1} />
      </Sphere>
    </group>
  );
};

const RobotFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffff" />
        <Robot mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export default RobotFollower;