import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleSystemProps {
  count?: number;
  mousePosition?: { x: number; y: number };
  isInteractive?: boolean;
}

const AdvancedParticleSystem = ({ 
  count = 8000, 
  mousePosition = { x: 0, y: 0 },
  isInteractive = true 
}: ParticleSystemProps) => {
  const mesh = useRef<THREE.Points>(null);
  const { viewport, camera } = useThree();
  const [connections, setConnections] = useState<THREE.BufferGeometry | null>(null);

  // Generate particle positions and properties
  const [positions, colors, velocities] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Position particles in a larger space
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      
      // Velocity for organic movement
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
      
      // Dynamic colors based on position
      const hue = (Math.atan2(positions[i * 3 + 1], positions[i * 3]) + Math.PI) / (2 * Math.PI);
      const color = new THREE.Color().setHSL(hue * 0.3 + 0.5, 0.8, 0.6);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return [positions, colors, velocities];
  }, [count]);

  // Create connections between nearby particles
  useEffect(() => {
    const connectionGeometry = new THREE.BufferGeometry();
    const connectionPositions = [];
    const connectionColors = [];
    
    // Find nearby particles and create connections
    for (let i = 0; i < count; i += 10) { // Sample every 10th particle for performance
      const x1 = positions[i * 3];
      const y1 = positions[i * 3 + 1];
      const z1 = positions[i * 3 + 2];
      
      for (let j = i + 10; j < Math.min(i + 100, count); j += 10) {
        const x2 = positions[j * 3];
        const y2 = positions[j * 3 + 1];
        const z2 = positions[j * 3 + 2];
        
        const distance = Math.sqrt((x2-x1)**2 + (y2-y1)**2 + (z2-z1)**2);
        
        if (distance < 8) {
          connectionPositions.push(x1, y1, z1, x2, y2, z2);
          
          // Fade color based on distance
          const alpha = 1 - (distance / 8);
          connectionColors.push(0.2, 0.8, 1, alpha, 0.2, 0.8, 1, alpha);
        }
      }
    }
    
    connectionGeometry.setAttribute('position', new THREE.Float32BufferAttribute(connectionPositions, 3));
    connectionGeometry.setAttribute('color', new THREE.Float32BufferAttribute(connectionColors, 4));
    
    setConnections(connectionGeometry);
  }, [positions, count]);

  useFrame((state) => {
    if (!mesh.current) return;

    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    const colors = mesh.current.geometry.attributes.color.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      // Organic particle movement
      positions[i * 3] += velocities[i * 3];
      positions[i * 3 + 1] += velocities[i * 3 + 1];
      positions[i * 3 + 2] += velocities[i * 3 + 2];
      
      // Boundary wrapping
      if (Math.abs(positions[i * 3]) > 20) velocities[i * 3] *= -1;
      if (Math.abs(positions[i * 3 + 1]) > 20) velocities[i * 3 + 1] *= -1;
      if (Math.abs(positions[i * 3 + 2]) > 20) velocities[i * 3 + 2] *= -1;
      
      // Mouse interaction
      if (isInteractive) {
        const mouseX = (mousePosition.x / window.innerWidth) * 2 - 1;
        const mouseY = -(mousePosition.y / window.innerHeight) * 2 + 1;
        const mouseWorldX = mouseX * viewport.width * 0.5;
        const mouseWorldY = mouseY * viewport.height * 0.5;
        
        const dx = mouseWorldX - positions[i * 3];
        const dy = mouseWorldY - positions[i * 3 + 1];
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 5) {
          const force = (5 - distance) / 5;
          velocities[i * 3] += dx * force * 0.0001;
          velocities[i * 3 + 1] += dy * force * 0.0001;
          
          // Color change on interaction
          colors[i * 3] = Math.min(1, colors[i * 3] + force * 0.1);
          colors[i * 3 + 2] = Math.min(1, colors[i * 3 + 2] + force * 0.1);
        }
      }
      
      // Wave motion
      const wave = Math.sin(state.clock.elapsedTime + i * 0.01) * 0.1;
      positions[i * 3 + 2] += wave * 0.01;
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.geometry.attributes.color.needsUpdate = true;
    
    // Rotate entire system
    mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <group>
      {/* Main particle system */}
      <Points ref={mesh} positions={positions} colors={colors}>
        <PointMaterial
          size={0.02}
          vertexColors
          blending={THREE.AdditiveBlending}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.8}
        />
      </Points>
      
      {/* Connection lines */}
      {connections && (
        <primitive object={new THREE.Line(connections, new THREE.LineBasicMaterial({
          vertexColors: true,
          transparent: true,
          opacity: 0.3,
          blending: THREE.AdditiveBlending
        }))} />
      )}
      
      {/* Environmental lighting */}
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff00ff" />
      <ambientLight intensity={0.1} />
    </group>
  );
};

interface AdvancedParticlesProps {
  className?: string;
}

const AdvancedParticles = ({ className = "" }: AdvancedParticlesProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <AdvancedParticleSystem mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export default AdvancedParticles;