import { useEffect, useState, useRef } from "react";
import { gsap } from "../core/gsap";

/**
 * Preloader - Minimalist Luxury Tech Loader for Nuvion Technologies.
 * Combines crisp Swiss-style corporate typography, precision coordinates,
 * razor-thin gradient progress track, and an architectural curtain slide reveal.
 */
export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const [percent, setPercent] = useState(0);
  const rootRef = useRef(null);
  const contentRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    // Lock scroll during preloader
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (window.__lenis) window.__lenis.stop();

    const progressObj = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        // Unlock scroll after curtain fully opens
        document.body.style.overflow = prevOverflow;
        if (window.__lenis) window.__lenis.start();
        setComplete(true);
      },
    });

    // 1. Initial fade-in of central logo and telemetry
    if (contentRef.current) {
      tl.fromTo(
        contentRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        0.1
      );
    }

    // 2. Smooth digital progress counter from 0 to 100 with acceleration and deceleration
    tl.to(
      progressObj,
      {
        val: 100,
        duration: 1.5,
        ease: "power3.inOut",
        onUpdate: () => {
          const current = Math.floor(progressObj.val);
          setPercent(current);
          if (lineRef.current) {
            lineRef.current.style.width = `${progressObj.val}%`;
          }
        },
      },
      0.15
    );

    // 3. Gentle settle at 100%
    if (contentRef.current) {
      tl.to(
        contentRef.current,
        { y: -12, opacity: 0, duration: 0.4, ease: "power2.in" },
        1.7
      );
    }

    // 4. Architectural upward curtain slide reveal
    if (rootRef.current) {
      tl.to(
        rootRef.current,
        { yPercent: -100, duration: 0.75, ease: "power4.inOut" },
        1.85
      );
    }

    return () => {
      document.body.style.overflow = prevOverflow;
      if (window.__lenis) window.__lenis.start();
      tl.kill();
    };
  }, []);

  if (complete) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[99999] bg-[#FBFCFE] text-[#02246A] flex flex-col justify-between p-8 sm:p-14 select-none pointer-events-auto will-change-transform"
      aria-label="Loading Nuvion Technologies"
    >
      {/* Soft luxury ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#1456D8]/5 via-[#2E9BF5]/5 to-transparent blur-3xl rounded-full"
        aria-hidden="true"
      />

      {/* Top Bar: Telemetry & Location Coordinates */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono tracking-widest text-[#02246A]/60">
      </div>

      {/* Centerpiece: Wordmark & Precision Measurement */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-xl w-full mx-auto flex flex-col items-center text-center will-change-transform"
      >
        {/* Crisp High-Res Logo */}
        <div className="w-[210px] sm:w-[270px] mb-8">
          <img
            src="/New_Logos/WORDMARK_TP.png"
            alt="Nuvion Technologies"
            className="w-full h-auto object-contain select-none"
          />
        </div>

        {/* Razor Hairline Progress Bar */}
        <div className="w-full h-[2.5px] bg-[#02246A]/10 rounded-full overflow-hidden relative">
          <div
            ref={lineRef}
            className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-[#02246A] via-[#1456D8] to-[#2E9BF5] transition-all"
          />
        </div>

        {/* Dynamic Percentage & Phase Typography */}
        <div className="w-full mt-4 flex items-center justify-between text-xs font-mono">
          <span className="text-[#02246A]/50 tracking-wider">
            {percent < 30 && "PHASE 01 // CORE ARCHITECTURE"}
            {percent >= 30 && percent < 70 && "PHASE 02 // ZERO-TRUST MESH"}
            {percent >= 70 && percent < 100 && "PHASE 03 // RUNTIME READY"}
            {percent === 100 && "INITIALIZATION COMPLETE"}
          </span>
          <span className="text-xl sm:text-2xl font-bold font-display text-[#1456D8] tabular-nums">
            {String(percent).padStart(2, "0")}%
          </span>
        </div>
      </div>

      {/* Bottom Bar: Engineering Philosophy & Year */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono tracking-widest text-[#02246A]/40">
      </div>
    </div>
  );
}
