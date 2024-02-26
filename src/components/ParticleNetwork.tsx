"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
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

export const ParticleNetwork = () => {
  const [init, setInit] = useState(false);
  const [isParticlesLoaded, setIsParticlesLoaded] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
    setIsParticlesLoaded(true);
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
          width: 2.5,
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
          value: 0.7,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 5, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <div
        className={`h-[80vh] absolute inset-0 -z-10 ${isParticlesLoaded && "opacity-0 animate-fade-in"}`}
      >
        <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
      </div>
    );
  }

  return <></>;
};
