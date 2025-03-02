import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import FoodModel from './FoodModel';

const ThreeScene = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-70">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <FoodModel position={[-2, 0, 0]} scale={0.5} />
          <FoodModel position={[2, 0, 0]} scale={0.7} />
          <FoodModel position={[0, 2, -2]} scale={0.6} />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;