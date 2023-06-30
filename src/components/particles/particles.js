import React from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";



export const Particle = () => {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
   await console.log(container);
  }, []);

  const particleOptions = {
   fpsLimit: 120,
    interactivity: {
     events: {
      onClick: {
       enable: true,
       mode: "push",
      },
     onHover: {
      enable: true,
      mode: "repulse",
     },
     resize: true,
     },
     modes: {
      push: {
       quantity: 4,
      },
      repulse: {
       distance: 200,
        duration: 0.4,
      },
     },
    }, 
    particles: 
    {
     color: {
      value: "#00008B",
     },
     links: {
      color: "#00008B",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
     },
     collisions: {
      enable: true,
     },
     move: {
      direction: "none",
      enable: true,
      outModes: {
       default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
     },
     number: {
      density: {
       enable: true,
       area: 800,
      },
      value: 80,
     },
     opacity: {
      value: 0.5,
     },
     shape: {
      type: "circle",
     },
     size: {
      value: { min: 1, max: 5 },
     },
    },
    detectRetina: true,
}
  
  return (
    <Particles id="tsparticles"  className='particles' init={particlesInit} loaded={particlesLoaded} 
    options={particleOptions } />   
  );
};

export default Particle;