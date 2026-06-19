'use client';

import { useEffect, useRef } from 'react';

/**
 * A subtle, monochrome (white/gray) constellation network rendered on a single
 * full-viewport <canvas>. Nodes drift slowly and link to near neighbours; the
 * cursor grabs nearby nodes (drawing brighter links) and gently parts the web,
 * which reforms as the pointer moves on.
 *
 * One rAF loop, DPR capped, particle count scaled to viewport, paused when the
 * tab is hidden, and disabled for users who prefer reduced motion.
 */

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Props {
  /** Multiplies the resting opacity of nodes + links. 1 = default (very subtle). */
  intensity?: number;
}

const LINK_DIST = 132; // px: node-to-node link threshold
const POINTER_DIST = 190; // px: cursor influence radius
const POINTER_PUSH = 26; // px: max displacement of a node away from the cursor
const NODE_RADIUS = 1.5;
const NODE_ALPHA = 0.34;
const LINK_ALPHA = 0.11;
const DRIFT = 0.16; // base drift speed (px/frame)

const ConstellationBackground = ({ intensity = 1 }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let rafId = 0;

    // Pointer in CSS pixels (canvas is fixed at the viewport origin, so client
    // coordinates map 1:1). `active` is false until the mouse first moves / on leave.
    const pointer = { x: 0, y: 0, active: false };

    const nodeCount = () => {
      const area = width * height;
      const cap = width < 640 ? 32 : 88;
      return Math.max(16, Math.min(cap, Math.round(area / 16500)));
    };

    const seed = () => {
      nodes = Array.from({ length: nodeCount() }, () => {
        const angle = Math.random() * Math.PI * 2;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * DRIFT,
          vy: Math.sin(angle) * DRIFT,
        };
      });
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    // Per-frame displaced positions (base position pushed away from the cursor).
    const dx: number[] = [];
    const dy: number[] = [];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Advance base positions + compute cursor-displaced positions.
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        // Bounce off the edges so positions stay continuous — avoids links
        // popping in/out that a teleport-style wrap-around would cause.
        if (n.x < 0) {
          n.x = 0;
          n.vx = -n.vx;
        } else if (n.x > width) {
          n.x = width;
          n.vx = -n.vx;
        }
        if (n.y < 0) {
          n.y = 0;
          n.vy = -n.vy;
        } else if (n.y > height) {
          n.y = height;
          n.vy = -n.vy;
        }

        let px = n.x;
        let py = n.y;
        if (pointer.active) {
          const ox = n.x - pointer.x;
          const oy = n.y - pointer.y;
          const dist = Math.hypot(ox, oy);
          if (dist < POINTER_DIST && dist > 0.001) {
            const push = (1 - dist / POINTER_DIST) * POINTER_PUSH;
            px += (ox / dist) * push;
            py += (oy / dist) * push;
          }
        }
        dx[i] = px;
        dy[i] = py;
      }

      // Node-to-node links.
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const ax = dx[i];
          const ay = dy[i];
          const bx = dx[j];
          const by = dy[j];
          const dist = Math.hypot(ax - bx, ay - by);
          if (dist < LINK_DIST) {
            const a = (1 - dist / LINK_DIST) * LINK_ALPHA * intensity;
            ctx.strokeStyle = `rgba(255,255,255,${a})`;
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
      }

      // Cursor links + nodes (nodes near the cursor brighten).
      for (let i = 0; i < nodes.length; i++) {
        const px = dx[i];
        const py = dy[i];
        let alpha = NODE_ALPHA * intensity;

        if (pointer.active) {
          const dist = Math.hypot(px - pointer.x, py - pointer.y);
          if (dist < POINTER_DIST) {
            const t = 1 - dist / POINTER_DIST;
            alpha = Math.min(0.9, alpha + t * 0.55);
            ctx.strokeStyle = `rgba(255,255,255,${t * 0.33})`;
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, NODE_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(render);
    };

    const start = () => {
      if (!rafId) rafId = requestAnimationFrame(render);
    };
    const stop = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const onMove = (e: MouseEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
    };
    const onResize = () => resize();
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    resize();

    if (reducedMotion) {
      // Draw a single static frame; no motion, no cursor reactivity. Redraw on
      // resize so the canvas never ends up stretched / partially blank.
      const drawStatic = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.lineWidth = 1;
        for (let i = 0; i < nodes.length; i++) {
          dx[i] = nodes[i].x;
          dy[i] = nodes[i].y;
        }
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dist = Math.hypot(dx[i] - dx[j], dy[i] - dy[j]);
            if (dist < LINK_DIST) {
              ctx.strokeStyle = `rgba(255,255,255,${(1 - dist / LINK_DIST) * LINK_ALPHA * intensity})`;
              ctx.beginPath();
              ctx.moveTo(dx[i], dy[i]);
              ctx.lineTo(dx[j], dy[j]);
              ctx.stroke();
            }
          }
          ctx.fillStyle = `rgba(255,255,255,${NODE_ALPHA * intensity})`;
          ctx.beginPath();
          ctx.arc(dx[i], dy[i], NODE_RADIUS, 0, Math.PI * 2);
          ctx.fill();
        }
      };
      const onStaticResize = () => {
        resize(); // re-fits the canvas bitmap + re-seeds nodes
        drawStatic();
      };
      drawStatic();
      window.addEventListener('resize', onStaticResize);
      return () => {
        window.removeEventListener('resize', onStaticResize);
      };
    }

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('visibilitychange', onVisibility);
    start();

    return () => {
      stop();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
};

export default ConstellationBackground;
