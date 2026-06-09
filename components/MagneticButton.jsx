"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

/* Magnetic hover: the button eases toward the cursor with spring-like motion,
   then settles back on leave. Decorative — gated to fine-pointer devices. */
export default function MagneticButton({
  as = "a",
  href = "#",
  className = "",
  children,
  strength = 0.4,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    const move = (e) => {
      const r = el.getBoundingClientRect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      xTo(mx * strength);
      yTo(my * strength);
    };
    const leave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [strength]);

  const Tag = as;
  return (
    <Tag ref={ref} href={as === "a" ? href : undefined} className={className} {...rest}>
      {children}
    </Tag>
  );
}
