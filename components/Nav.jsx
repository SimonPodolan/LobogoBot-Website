"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Logo } from "./Icon";
import MagneticButton from "./MagneticButton";

const DISCORD_URL = "https://discord.gg/PYyWZ2RdDN";

const LINKS = [
  ["How it works", "#how"],
  ["Features", "#features"],
  ["Pricing", "#pricing"],
];

export default function Nav() {
  const [compact, setCompact] = useState(false);
  const wrapRef = useRef(null);
  const floatRef = useRef(null);
  const last = useRef(0);

  // scroll direction → collapse the pill (candymania behaviour)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 48) setCompact(false);
      else if (y > last.current + 4) setCompact(true);
      else if (y < last.current - 4) setCompact(false);
      last.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const floater = floatRef.current;
    if (!wrap || !floater) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(wrap, { y: compact ? "-130%" : "0%", autoAlpha: compact ? 0 : 1 });
      gsap.set(floater, { autoAlpha: compact ? 1 : 0, y: 0, scale: 1 });
      return;
    }

    gsap.killTweensOf([wrap, floater]);
    if (compact) {
      gsap.to(wrap, { y: "-130%", autoAlpha: 0, duration: 0.4, ease: "power3.inOut" });
      gsap.to(floater, { y: 0, autoAlpha: 1, scale: 1, duration: 0.4, delay: 0.08, ease: "back.out(1.6)" });
    } else {
      gsap.to(wrap, { y: "0%", autoAlpha: 1, duration: 0.45, ease: "power3.out" });
      gsap.to(floater, { y: 14, autoAlpha: 0, scale: 0.85, duration: 0.22, ease: "power3.out" });
    }
  }, [compact]);

  return (
    <header className="lnav">
      <div className="lnav__inner">
        <div ref={wrapRef} className="lnav__pill">
          <Logo />
          <nav className="lnav__links">
            {LINKS.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <MagneticButton href={DISCORD_URL} className="btn btn--primary lnav__cta">
            Request access
          </MagneticButton>
        </div>

        <div ref={floatRef} className="lnav__floater">
          <button className="lnav__round" aria-label="Show menu" onClick={() => setCompact(false)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
          <MagneticButton href={DISCORD_URL} className="btn btn--primary lnav__floatcta">
            Request access
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
