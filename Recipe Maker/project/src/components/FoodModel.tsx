import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

// Using a simple sphere as a placeholder for a food model
// In a real application, you would use actual 3D models of food items
const FoodModel = ({ position = [0, 0, 0], scale = 1 }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#ff4757" roughness={0.3} metalness={0.2} />
    </mesh>
  );
};

export default FoodModel;