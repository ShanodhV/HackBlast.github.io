import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import styled from 'styled-components';
import { pointsInner, pointsOuter } from '../utils/particles';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin: 0;
  background: url('/path/to/your/hero-image.jpg') center/cover no-repeat;
  color: ${props => props.theme.colors.secondary};
  text-align: center;
`;

const HeroText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  pointer-events: none;
  color: ${props => props.theme.colors.accent};

  @media(min-width: 768px) {
    font-size: 5rem;
  }
`;

const ParticleRing = () => (
  <div className="relative">
    <Canvas
      camera={{ position: [10, -7.5, -5] }}
      style={{ height: '100vh', width: '100vw' }}
      className="bg-transparent"
    >
      <OrbitControls maxDistance={20} minDistance={10} />
      <directionalLight />
      <pointLight position={[-30, 0, -30]} power={10.0} />
      <PointCircle />
    </Canvas>
  </div>
);

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map(point => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map(point => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => (
  <Sphere position={position} args={[0.1, 10, 10]}>
    <meshStandardMaterial
      emissive={color}
      emissiveIntensity={0.5}
      roughness={0.5}
      color={color}
    />
  </Sphere>
);

const HeroSection = () => (
  <HeroContainer id="home">
    <ParticleRing />
    <HeroText>HackBlast 1.0</HeroText>
  </HeroContainer>
);

export default HeroSection;
