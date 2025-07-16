"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

interface ParticleSystemProps {
  particleCount?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  speed?: number;
}

export default function ParticleSystem({
  particleCount = 50,
  colors = ["#3B82F6", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"],
  minSize = 2,
  maxSize = 6,
  speed = 0.5,
}: ParticleSystemProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Initialize particles
  useEffect(() => {
    if (
      dimensions.width === 0 ||
      dimensions.height === 0 ||
      prefersReducedMotion
    )
      return;

    const newParticles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: (Math.random() * (maxSize - minSize) + minSize) * 5,
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        opacity: (Math.random() * 0.6 + 0.2) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setParticles(newParticles);
  }, [
    dimensions,
    particleCount,
    colors,
    minSize,
    maxSize,
    speed,
    prefersReducedMotion,
  ]);

  // Animation loop
  useEffect(() => {
    if (prefersReducedMotion || particles.length === 0) return;

    const animate = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;

          // Bounce off edges
          if (newX <= 0 || newX >= dimensions.width) {
            particle.speedX *= -1;
            newX = Math.max(0, Math.min(dimensions.width, newX));
          }
          if (newY <= 0 || newY >= dimensions.height) {
            particle.speedY *= -1;
            newY = Math.max(0, Math.min(dimensions.height, newY));
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles.length, dimensions, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div ref={containerRef} className="absolute inset-0 pointer-events-none">
        {/* Static decorative elements for reduced motion users */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500/30 rounded-full" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-500/30 rounded-full" />
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-pink-500/30 rounded-full" />
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-green-500/30 rounded-full" />
        <div className="absolute top-60 left-1/2 w-2 h-2 bg-orange-500/30 rounded-full" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: particle.id * 0.01 }}
        />
      ))}
    </div>
  );
}
