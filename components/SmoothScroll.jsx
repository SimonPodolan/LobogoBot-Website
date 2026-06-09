"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.registerPlugin(ScrollTrigger);

    let lenis;
    let rafFn;

    if (!reduce) {
      lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, smoothWheel: true });

      // Update ScrollTrigger whenever Lenis scrolls
      lenis.on("scroll", ScrollTrigger.update);

      // Sync Lenis's raf with GSAP's ticker
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      // Important to avoid lag smoothing messing with Lenis
      gsap.ticker.lagSmoothing(0);
    }

    const ctx = gsap.context(() => {
      if (reduce) return;
      // generic scroll reveal for anything marked [data-animate]
      ScrollTrigger.batch("[data-animate]", {
        start: "top 86%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08,
            overwrite: true,
          }),
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((s) => s.kill());
      gsap.ticker.remove(lenis?.raf);
      if (lenis) lenis.destroy();
    };
  }, []);

  return children;
}
