import { PointMaterial, Points, Preload } from '@react-three/drei'; // Import Points, PointMaterial, and Preload
import { Canvas, useFrame } from '@react-three/fiber'; // Make sure to import useFrame and Canvas
import { Suspense, useRef, useState } from 'react';
import * as THREE from 'three'; // If you're using Three.js types and constants

const Stars = (props: any) => {
  const ref = useRef<THREE.Points>(null); // Fixed ref type for THREE.Points
  const [sphere] = useState<Float32Array>(() => {
    // Generate random points in a sphere with radius 1.2
    const positions = new Float32Array(5001 * 3); // 5001 points, each with x, y, z
    for (let i = 0; i < positions.length; i += 3) {
      const phi = Math.random() * Math.PI * 2; // Random angle in spherical coordinates
      const theta = Math.random() * Math.PI; // Random angle in spherical coordinates
      const radius = Math.random() * 1.2; // Random radius between 0 and 1.2
      positions[i] = radius * Math.sin(theta) * Math.cos(phi);
      positions[i + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i + 2] = radius * Math.cos(theta);
    }
    return positions;
  });

  useFrame((_state, delta) => {
    if (ref.current) {
      // Rotate the stars every frame
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#85C032"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="absolute inset-0 z-[-1] h-auto w-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
