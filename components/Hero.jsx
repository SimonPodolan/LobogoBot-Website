"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "./Icon";
import LiveFeed from "./LiveFeed";
import MagneticButton from "./MagneticButton";

const WHOP_URL = "https://whop.com/lobogobot/";

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // headline lines rise out of their masks
      gsap.to(".hero__word", {
        y: 0,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.08,
        delay: 0.15,
      });
      // supporting elements ease in after
      gsap.from(".hero__fade", {
        opacity: 0,
        y: 18,
        filter: "blur(8px)",
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.55,
      });
      // media floats up + parallax on scroll
      gsap.from(".hero__card", {
        opacity: 0,
        y: 40,
        scale: 0.97,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.45,
      });
      gsap.to(".hero__card", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" className="hero" ref={root}>
      <div className="hero__container hero__inner">
        <div>
          <h1 className="hero__title">
            <span className="hero__line">
              <span className="hero__word">Watch</span>{" "}
              <span className="hero__word">the</span>
            </span>
            <span className="hero__line">
              <span className="hero__word accent">drop.</span>
            </span>
          </h1>
          <p className="hero__sub hero__fade">
            Lobogo combines a Ticketmaster availability monitor, a Windows agent,
            and a Chrome extension. Set your ticket criteria, receive a cart link
            in your private Discord channel, and complete checkout yourself.
          </p>
          <div className="hero__cta hero__fade">
            <MagneticButton href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
              Request access <Icon name="arrow" size={18} stroke={2.2} />
            </MagneticButton>
            <a className="btn btn--ghost btn--lg" href="#how">
              <Icon name="play" size={16} /> How it works
            </a>
          </div>
          <div className="hero__trust hero__fade">
            <span>
              <Icon name="target" size={16} style={{ color: "var(--accent)" }} /> Event and ticket filters
            </span>
            <span>
              <Icon name="clock" size={16} style={{ color: "var(--accent)" }} /> Supported queue flows
            </span>
            <span>
              <Icon name="bell" size={16} style={{ color: "var(--accent)" }} /> Checkout link to Discord
            </span>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__glow" aria-hidden />
          <div className="hero__card">
            <LiveFeed rows={5} />
          </div>
        </div>
      </div>
    </section>
  );
}
