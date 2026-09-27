'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis for luxurious, inertia-based smooth scrolling
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.6,
      prevent: (node) => {
        if (!node || !(node instanceof HTMLElement)) return false;
        return (
          node.hasAttribute('data-lenis-prevent') ||
          Boolean(node.closest('[data-lenis-prevent]')) ||
          node.classList.contains('lenis-prevent') ||
          Boolean(node.closest('.lenis-prevent'))
        );
      },
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Synchronize Lenis state with body scroll lock when modals/dialogs are active
    const checkScrollLock = () => {
      const isLocked =
        document.body.style.overflow === 'hidden' ||
        document.body.classList.contains('overflow-hidden') ||
        document.documentElement.classList.contains('overflow-hidden');

      if (isLocked) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    const observer = new MutationObserver(checkScrollLock);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['style', 'class'],
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
