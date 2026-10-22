import { useRef } from "react";
import { gsap } from "../../core/gsap";
import useScene from "../../core/useScene";

import react from "../../assets/tech-logos/react.svg";
import next from "../../assets/tech-logos/nextdotjs.svg";
import flutter from "../../assets/tech-logos/flutter.svg";
import tailwind from "../../assets/tech-logos/tailwindcss.svg";
import node from "../../assets/tech-logos/nodedotjs.svg";
import python from "../../assets/tech-logos/python.svg";
import django from "../../assets/tech-logos/django.svg";
import postgres from "../../assets/tech-logos/postgresql.svg";
import mongo from "../../assets/tech-logos/mongodb.svg";
import redis from "../../assets/tech-logos/redis.svg";
import aws from "../../assets/tech-logos/amazonwebservices.svg";
import azure from "../../assets/tech-logos/microsoftazure.svg";
import docker from "../../assets/tech-logos/docker.svg";
import linux from "../../assets/tech-logos/linux.svg";

const rawLogos = [
  ["React", react, "https://react.dev"],
  ["Next.js", next, "https://nextjs.org"],
  ["Flutter", flutter, "https://flutter.dev"],
  ["Tailwind", tailwind, "https://tailwindcss.com"],
  ["Node.js", node, "https://nodejs.org"],
  ["Python", python, "https://www.python.org"],
  ["Django", django, "https://www.djangoproject.com"],
  ["PostgreSQL", postgres, "https://www.postgresql.org"],
  ["MongoDB", mongo, "https://www.mongodb.com"],
  ["Redis", redis, "https://redis.io"],
  ["AWS", aws, "https://aws.amazon.com"],
  ["Azure", azure, "https://azure.microsoft.com"],
  ["Docker", docker, "https://www.docker.com"],
  ["Linux", linux, "https://www.linux.org"],
];

// Pre-calculate deterministic geometric orbit coordinates and radial bloom vectors
const logoData = rawLogos.map(([name, src, url], i) => {
  const outer = i % 2 === 0;
  const total = rawLogos.length / 2;
  const a = ((Math.floor(i / 2) / total) * 360 + (outer ? 0 : 360 / total / 2) - 90) * (Math.PI / 180);
  const r = outer ? 44 : 30;
  return {
    name,
    src,
    url,
    outer,
    xPercent: 50 + r * Math.cos(a),
    yPercent: 50 + r * Math.sin(a),
    // Radial offset vector pointing towards center hub
    dx: -Math.cos(a) * (r * 2.8),
    dy: -Math.sin(a) * (r * 2.8),
  };
});

/** STACK: Silky-smooth, hardware-accelerated orbit animation with GPU layer isolation. */
export default function Stack() {
  const root = useRef(null);

  useScene(root, ({ wide }) => {
    const orbit = root.current?.querySelector("[data-orbit]");
    const track = root.current?.querySelector("[data-orbit-track]");
    const logoNodes = root.current?.querySelectorAll("[data-logo]");
    const counterNodes = root.current?.querySelectorAll("[data-logo-counter]");
    const core = root.current?.querySelector("[data-core]");

    if (!orbit || !track || !logoNodes) return;

    // Master scrub timeline: perfectly smoothed (scrub: 1.2) with GPU transforms
    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: orbit,
        start: "top 88%",
        end: wide ? "bottom 15%" : "bottom 35%",
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    // 1. Center brand hub smooth scale-in
    if (core) {
      tl.fromTo(
        core,
        { scale: 0.65, opacity: 0.3 },
        { scale: 1, opacity: 1, ease: "power2.out", duration: 0.35 },
        0
      );
    }

    // 2. Deterministic radial bloom: logos expand smoothly outward along their orbit axes
    tl.fromTo(
      logoNodes,
      {
        x: (i) => logoData[i].dx,
        y: (i) => logoData[i].dy,
        scale: 0.25,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        duration: 0.45,
      },
      0
    );

    // 3. Smooth orbital rotation: entire track revolves around the central core
    tl.to(
      track,
      {
        rotate: 45,
        ease: "none",
        duration: 1,
      },
      0.15
    );

    // 4. Counter-rotation: logos counter-rotate in lockstep so they stay perfectly upright and legible
    tl.to(
      counterNodes,
      {
        rotate: -45,
        ease: "none",
        duration: 1,
      },
      0.15
    );
  });

  return (
    <section ref={root} className="section overflow-hidden" aria-labelledby="stack-title">
      <div className="wrap text-center">
        <span className="eyebrow">Technology</span>
        <h2 id="stack-title" className="h-section mt-6 mx-auto max-w-[20ch]">
          Modern tools, <span className="grad-text">one coherent stack.</span>
        </h2>

        <div data-orbit className="relative mx-auto mt-14 aspect-square w-[min(92vw,40rem)] select-none">
          {/* Static Center Hub: Anchored Nuvion Brand Core */}
          <div data-core className="absolute inset-0 grid place-items-center pointer-events-none z-30 will-change-transform">
            <div className="grid place-items-center size-[28%] rounded-full bg-gradient-to-br from-brand via-brand-2 to-accent shadow-lift border border-white/20 select-none p-3 sm:p-4">
              <img
                src="/New_Logos/WORKMARK_LIGHT_TP.png"
                alt="Nuvion Technologies"
                className="w-[84%] h-auto object-contain filter drop-shadow-sm select-none"
              />
            </div>
          </div>

          {/* Rotating Celestial Orbit Track */}
          <div data-orbit-track className="absolute inset-0 size-full will-change-transform">
            {/* Dashed outer ring */}
            <div className="absolute inset-[6%] rounded-full border border-dashed border-brand/25 pointer-events-none" aria-hidden="true" />
            {/* Solid inner ring */}
            <div className="absolute inset-[26%] rounded-full border border-line pointer-events-none" aria-hidden="true" />

            {/* Orbiting Tech Logos with isolated GPU layers and dedicated clickable outbound links */}
            {logoData.map((item) => (
              <div
                key={item.name}
                data-logo
                className="absolute -translate-x-1/2 -translate-y-1/2 will-change-transform z-20 pointer-events-auto"
                style={{ left: `${item.xPercent}%`, top: `${item.yPercent}%` }}
              >
                {/* Counter-rotation container keeps logos upright while allowing CSS hover scaling without GSAP interference */}
                <div data-logo-counter className="will-change-transform">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visit ${item.name} official site`}
                    aria-label={`Visit ${item.name} official site`}
                    className="grid place-items-center size-14 sm:size-16 rounded-2xl bg-surface/95 backdrop-blur-sm border border-line shadow-soft hover:shadow-lift hover:border-brand/40 hover:bg-white hover:scale-110 active:scale-95 transition-[border-color,background-color,box-shadow,transform] duration-200 cursor-pointer group"
                  >
                    <img
                      src={item.src}
                      alt={item.name}
                      loading="lazy"
                      className="size-[75%] object-contain transition-transform duration-200 group-hover:scale-105"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
