import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: { value: 100, density: { enable: true, area: 800 } },
          size: { value: 1, random: true },
          move: { enable: true, speed: 1.5, direction: "none", outModes: "bounce" },
          shape: { type: "circle", stroke: { width: 0, color: "#fff" } },
          color: { value: "#ffffff" },
          opacity: { value: 0.8, random: true },
          links: { enable: true, distance: 100, color: "#ffffff", opacity: 0.4, width: 1 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
