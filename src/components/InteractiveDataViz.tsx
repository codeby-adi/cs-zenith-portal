import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

interface DataNode {
  id: string;
  label: string;
  value: number;
  color: string;
  position: [number, number, number];
}

const DataSphere = ({ node, isHovered, onClick }: { 
  node: DataNode; 
  isHovered: boolean; 
  onClick: () => void;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      const scale = isHovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <group position={node.position} onClick={onClick}>
      <Sphere ref={meshRef} args={[node.value * 0.5]}>
        <meshStandardMaterial 
          color={node.color} 
          emissive={node.color} 
          emissiveIntensity={isHovered ? 0.3 : 0.1}
          transparent
          opacity={0.8}
        />
      </Sphere>
      <Text
        ref={textRef}
        position={[0, node.value * 0.6, 0]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {node.label}
      </Text>
    </group>
  );
};

const InteractiveDataViz = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<DataNode | null>(null);
  
  const dataNodes: DataNode[] = [
    { id: '1', label: 'AI Research', value: 2.5, color: '#ff6b6b', position: [-4, 2, 0] },
    { id: '2', label: 'Cybersecurity', value: 2.2, color: '#4ecdc4', position: [4, 1, 0] },
    { id: '3', label: 'Data Science', value: 2.8, color: '#45b7d1', position: [0, -2, 2] },
    { id: '4', label: 'IoT Systems', value: 2.0, color: '#96ceb4', position: [-3, -1, -2] },
    { id: '5', label: 'Blockchain', value: 1.8, color: '#feca57', position: [3, 3, -1] },
  ];

  return (
    <div className="relative w-full h-96">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4ecdc4" />
        
        {dataNodes.map((node) => (
          <DataSphere
            key={node.id}
            node={node}
            isHovered={hoveredNode === node.id}
            onClick={() => setSelectedNode(node)}
          />
        ))}
      </Canvas>
      
      {selectedNode && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-primary/20"
        >
          <h3 className="text-lg font-semibold text-white mb-2">{selectedNode.label}</h3>
          <p className="text-sm text-gray-300">Research Impact: {selectedNode.value}/3.0</p>
          <button 
            onClick={() => setSelectedNode(null)}
            className="mt-2 text-xs text-primary hover:text-primary/80"
          >
            Close
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default InteractiveDataViz;