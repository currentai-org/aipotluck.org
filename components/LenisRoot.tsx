"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

import "lenis/dist/lenis.css";

type LenisRootProps = {
  children: React.ReactNode;
};

/**
 * Smooth scroll; disabled when the user prefers reduced motion.
 */
export function LenisRoot({ children }: LenisRootProps) {
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [reduce]);

  return <>{children}</>;
}
