import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  hue: number;
};

const PARTICLE_DENSITY = 160;
const MAX_RADIUS = 3.8;

export const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointer = useRef({ x: 0, y: 0, active: false });
  const particles = useRef<Particle[]>([]);
  const animationFrame = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      spawnParticles(innerWidth, innerHeight);
    };

    const spawnParticles = (width: number, height: number) => {
      if (width === 0 || height === 0) {
        particles.current = [];
        return;
      }
      const total = Math.min(420, Math.floor((width * height) / (15000 - PARTICLE_DENSITY)));
      particles.current = Array.from({ length: Math.max(total, 160) }, () => createParticle(width, height));
    };

    const createParticle = (width: number, height: number): Particle => {
      const speedLimiter = Math.random() * 0.6 + 0.4;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speedLimiter,
        vy: (Math.random() - 0.5) * speedLimiter,
        radius: Math.random() * MAX_RADIUS,
        baseRadius: Math.random() * MAX_RADIUS,
        hue: 265 + Math.random() * 40
      };
    };

    const draw = () => {
      const { innerWidth, innerHeight } = window;
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      const gradient = ctx.createLinearGradient(0, 0, innerWidth, innerHeight);
      gradient.addColorStop(0, 'rgba(180, 132, 255, 0.25)');
      gradient.addColorStop(0.5, 'rgba(124, 58, 237, 0.18)');
      gradient.addColorStop(1, 'rgba(76, 29, 149, 0.22)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, innerWidth, innerHeight);

      for (const particle of particles.current) {
        updateParticle(particle, innerWidth, innerHeight);
        renderParticle(ctx, particle);
      }

      drawConnections(ctx);

      animationFrame.current = requestAnimationFrame(draw);
    };

    const updateParticle = (particle: Particle, width: number, height: number) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;

      const { x, y, active } = pointer.current;
      if (active) {
        const dx = x - particle.x;
        const dy = y - particle.y;
        const dist = Math.hypot(dx, dy);
        const influenceRadius = 260;
        if (dist < influenceRadius) {
          const force = (influenceRadius - dist) / influenceRadius;
          particle.vx -= (dx / dist) * force * 0.6;
          particle.vy -= (dy / dist) * force * 0.6;
          particle.radius = particle.baseRadius + force * 4.2;
        } else {
          particle.radius = lerp(particle.radius, particle.baseRadius, 0.02);
        }
      } else {
        particle.radius = lerp(particle.radius, particle.baseRadius, 0.01);
      }
    };

    const renderParticle = (ctxToRender: CanvasRenderingContext2D, particle: Particle) => {
      const gradient = ctxToRender.createRadialGradient(
        particle.x,
        particle.y,
        Math.max(0.1, particle.radius * 0.2),
        particle.x,
        particle.y,
        particle.radius * 1.6
      );
      gradient.addColorStop(0, `hsla(${particle.hue}, 90%, 72%, 0.9)`);
      gradient.addColorStop(1, `hsla(${particle.hue}, 70%, 32%, 0)`);

      ctxToRender.beginPath();
      ctxToRender.fillStyle = gradient;
      ctxToRender.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctxToRender.fill();
    };

    const drawConnections = (ctxToRender: CanvasRenderingContext2D) => {
      const maxDistance = 220;
      for (let i = 0; i < particles.current.length; i++) {
        const particleA = particles.current[i];
        for (let j = i + 1; j < particles.current.length; j++) {
          const particleB = particles.current[j];
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDistance) {
            const alpha = 1 - dist / maxDistance;
            ctxToRender.strokeStyle = `rgba(200, 180, 255, ${alpha * 0.2})`;
            ctxToRender.lineWidth = alpha * 2;
            ctxToRender.beginPath();
            ctxToRender.moveTo(particleA.x, particleA.y);
            ctxToRender.lineTo(particleB.x, particleB.y);
            ctxToRender.stroke();
          }
        }
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.current = { x: event.clientX, y: event.clientY, active: true };
    };

    const handlePointerLeave = () => {
      pointer.current.active = false;
    };

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="interactive-background" aria-hidden />;
};

const lerp = (start: number, end: number, amount: number) => (1 - amount) * start + amount * end;
