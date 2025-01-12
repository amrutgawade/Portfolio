import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const checkDarkMode = () => {
      const darkModeEnabled =
        document.documentElement.classList.contains("dark");
      setIsDarkMode(darkModeEnabled);
    };

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const particlesConfig = {
    particles: {
      number: { value: 125, density: { enable: true, area: 800 } },
      size: { value: 2, random: true },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        outModes: "bounce",
      },
      shape: {
        type: "circle",
        stroke: { width: 0, color: isDarkMode ? "#ffffff" : "#6366f1" },
      },
      color: { value: isDarkMode ? "#ffffff" : "#6366f1" },
      opacity: { value: 0.8, random: true },
      links: {
        enable: true,
        distance: 100,
        color: isDarkMode ? "#ffffff" : "#6366f1",
        opacity: isDarkMode ? 0.4 : 0.8,
        width: 1,
      },
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
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
      key={isDarkMode ? "dark" : "light"} // Force re-render on theme change
    />
  );
};

export default ParticlesBackground;
