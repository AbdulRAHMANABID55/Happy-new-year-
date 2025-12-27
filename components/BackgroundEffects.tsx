import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

export const BackgroundEffects: React.FC = () => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Initial burst
    const duration = 3000;
    const end = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    }

    const frame = () => {
      // launch a few confetti from the left edge
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FACC15', '#ffffff', '#FFD700']
      });
      // and a few from the right edge
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FACC15', '#ffffff', '#FFD700']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    // Occasional fireworks
    intervalRef.current = setInterval(() => {
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
        const random = (min: number, max: number) => Math.random() * (max - min) + min;

        confetti({
            ...defaults,
            particleCount: 50,
            origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 },
            colors: ['#FFD700', '#FFA500']
        });
        confetti({
            ...defaults,
            particleCount: 50,
            origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 },
            colors: ['#FFD700', '#FFFFFF']
        });
    }, 2500);

    return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Starry background effect can be CSS based */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
        {/* Glows */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
    </div>
  );
};