import React from 'react';
import MouseParticles from 'react-mouse-particles';

const ParticlesEffect: React.FC = () => {
  return (
    <MouseParticles
      g={1}
      color="random"
      cull="col,image-wrapper"
      level={6}
      alpha={0.3}
      radius={10}
    />
  );
};

export default ParticlesEffect;