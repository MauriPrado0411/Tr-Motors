'use client';

import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  alpha: number;
  life: number;
  decay: number;
  grow: number;
}

interface SmokeCanvasProps {
  active: boolean;
  phase: string;
  carRef: RefObject<HTMLImageElement | null>;
}

export default function SmokeCanvas({ active, phase, carRef }: SmokeCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const activeRef = useRef(active);
  const phaseRef = useRef(phase);
  const carRefRef = useRef(carRef);

  useEffect(() => { activeRef.current = active; }, [active]);
  useEffect(() => { phaseRef.current = phase; }, [phase]);
  useEffect(() => { carRefRef.current = carRef; }, [carRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function getWheelPos() {
      const el = carRefRef.current?.current;
      if (el) {
        const r = el.getBoundingClientRect();
        return { x: r.left + r.width * 0.72, y: r.top + r.height * 0.78 };
      }
      const W = canvas!.width;
      const H = canvas!.height;
      return { x: W * 0.5, y: H * 0.62 };
    }

    function spawn() {
      const pos = getWheelPos();
      const baseX = pos.x;
      const baseY = pos.y;
      const count = phaseRef.current === 'drift' ? 3 : 2;

      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: baseX + (Math.random() - 0.5) * 60,
          y: baseY + (Math.random() - 0.5) * 16,
          vx: (Math.random() - 0.65) * 1.8,
          vy: -(Math.random() * 1.6 + 0.5),
          r: Math.random() * 22 + 14,
          alpha: Math.random() * 0.3 + 0.12,
          life: 1,
          decay: Math.random() * 0.007 + 0.004,
          grow: Math.random() * 0.35 + 0.2,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      if (activeRef.current) spawn();

      particlesRef.current = particlesRef.current.filter(p => p.life > 0.02);

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.r += p.grow;
        p.life -= p.decay;

        const a = p.life * p.alpha;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        g.addColorStop(0,   `rgba(210,215,220,${a})`);
        g.addColorStop(0.5, `rgba(190,195,200,${a * 0.4})`);
        g.addColorStop(1,   `rgba(170,175,180,0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 5,
      }}
    />
  );
}
