"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Counter({ to, decimals = 0, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fmt = (v) => prefix + v.toFixed(decimals) + suffix;
    if (reduce) {
      el.textContent = fmt(to);
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const obj = { v: 0 };
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          v: to,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = fmt(obj.v);
          },
        }),
    });
    return () => st.kill();
  }, [to, decimals, prefix, suffix]);
  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const STATS = [
  { node: <Counter to={0.2} decimals={1} suffix="s" />, l: "Median time to detect a live drop" },
  { node: <span>24/7</span>, l: "Always-on cloud monitoring" },
  { node: <Counter to={94} suffix="%" />, l: "Reserved before public sale" },
  { node: <Counter to={120} suffix="k+" />, l: "Tickets secured for members" },
];

export default function Stats() {
  return (
    <section className="section--alt" style={{ padding: 0 }}>
      <div className="container stats">
        {STATS.map((s, i) => (
          <div className="stat" data-animate key={i}>
            <div className="stat__n">{s.node}</div>
            <div className="stat__l">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
