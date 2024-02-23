"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
<<<<<<< HEAD
import type { Container, ISourceOptions } from "@tsparticles/engine";
=======
import { type Container, type ISourceOptions } from "@tsparticles/engine";
>>>>>>> bd8b04e (Add in network particles to home screen)
import { loadSlim } from "@tsparticles/slim";

import "@styles/ParticleNetwork.css";

enum MoveDirection {
  bottom = "bottom",
  bottomLeft = "bottom-left",
  bottomRight = "bottom-right",
  left = "left",
  none = "none",
  right = "right",
  top = "top",
  topLeft = "top-left",
  topRight = "top-right",
  outside = "outside",
  inside = "inside",
}

enum OutMode {
  bounce = "bounce",
  none = "none",
  out = "out",
  destroy = "destroy",
  split = "split",
}

<<<<<<< HEAD
const ParticleNetwork = () => {
  const [init, setInit] = useState(false);
  const [isParticlesLoaded, setIsParticlesLoaded] = useState(false);
=======
export const ParticleNetwork = () => {
  const [init, setInit] = useState(false);
>>>>>>> bd8b04e (Add in network particles to home screen)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
<<<<<<< HEAD
    setIsParticlesLoaded(true);
=======
>>>>>>> bd8b04e (Add in network particles to home screen)
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      fullScreen: {
        enable: false,
        zIndex: -2,
      },
      particles: {
        color: {
          value: "#FF555B",
        },
        links: {
          color: "#FF555B",
          distance: 150,
          enable: true,
          opacity: 1,
<<<<<<< HEAD
          width: 2.5,
=======
          width: 2,
>>>>>>> bd8b04e (Add in network particles to home screen)
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 3,
          straight: true,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
<<<<<<< HEAD
<<<<<<< HEAD
          value: 0.7,
=======
          value: 0.5,
>>>>>>> bd8b04e (Add in network particles to home screen)
=======
          value: 1,
>>>>>>> 1d22529 (Move network particles to be overlapping in the correct location)
        },
        shape: {
          type: "circle",
        },
        size: {
<<<<<<< HEAD
          value: { min: 5, max: 5 },
=======
          value: { min: 3, max: 5 },
>>>>>>> bd8b04e (Add in network particles to home screen)
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <div
        className={`h-[80vh] absolute inset-0 -z-10 opacity-0 ${isParticlesLoaded && "opacity-0 animate-fade-in"}`}
      >
=======
      <div style={{ height: "100vh" }}>
>>>>>>> bd8b04e (Add in network particles to home screen)
=======
      <div className="h-[80vh] absolute inset-0 -z-10">
>>>>>>> 1d22529 (Move network particles to be overlapping in the correct location)
        <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
      </div>
    );
  }

  return <></>;
};
<<<<<<< HEAD

export default ParticleNetwork;
=======
>>>>>>> bd8b04e (Add in network particles to home screen)
