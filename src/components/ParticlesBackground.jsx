import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const particlesConfig = isMobile
    ? {
        particles: {
          number: { value: 50, density: { enable: true, area: 400 } },
          size: { value: 2, random: true },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: "bounce",
          },
          shape: {
            type: "circle",
            stroke: { width: 0, color: isDarkMode ? "#ffffff" : "#6366f1" },
          },
          color: { value: isDarkMode ? "#ffffff" : "#6366f1" },
          opacity: { value: 0.6, random: true },
          links: {
            enable: true,
            distance: 70,
            color: isDarkMode ? "#ffffff" : "#6366f1",
            opacity: isDarkMode ? 0.3 : 0.6,
            width: 0.8,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 70, duration: 0.4 },
            push: { quantity: 2 },
          },
        },
        detectRetina: true,
      }
    : {
        particles: {
          number: { value: 125, density: { enable: true, area: 800 } },
          size: { value: 2, random: true },
          move: {
            enable: true,
            speed: 1,
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
      key={`${isDarkMode ? "dark" : "light"}-${isMobile ? "mobile" : "desktop"}`} // Force re-render on theme or device change
    />
  );
};

export default ParticlesBackground;
