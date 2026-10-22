import { useRef } from "react";
import { ArrowRight, BarChart3, Cloud, Lock, Settings2, ShieldCheck, Workflow, CheckCircle2 } from "lucide-react";
import Button from "../../components/Button";
import { gsap } from "../../core/gsap";
import useScene from "../../core/useScene";

const chips = [
  { icon: Workflow, label: "Automation", a: -90 },
  { icon: BarChart3, label: "Analytics", a: -30 },
  { icon: Cloud, label: "Cloud", a: 30 },
  { icon: ShieldCheck, label: "Security", a: 90 },
  { icon: Lock, label: "Compliance", a: 150 },
  { icon: Settings2, label: "Operations", a: 210 },
];

/**
 * HERO: Perfectly proportioned, responsive hero with scroll-scrubbed system orb.
 * Down: headline lifts away smoothly, system orb zooms & rotates, claim appears.
 * Up: plays in reverse.
 */
export default function Hero() {
  const root = useRef(null);

  useScene(root, ({ wide }) => {
    const q = (s) => root.current.querySelectorAll(s);

    // time-based entrance (plays once on load)
    gsap.from(q("[data-intro]"), {
      y: 32,
      opacity: 0,
      duration: 0.9,
      stagger: 0.08,
      ease: "power3.out",
    });

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: root.current,
        start: "top top",
        end: wide ? "+=140%" : "bottom top",
        pin: wide,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    const orb = q("[data-orb]")[0];

    // Move the orb from the right column to the exact horizontal centre of the viewport.
    const toCenter = () => {
      const r = orb.getBoundingClientRect();
      const cur = Number(gsap.getProperty(orb, "x")) || 0;
      return window.innerWidth / 2 - (r.left + r.width / 2 - cur);
    };

    tl.to(q("[data-copy]"), { yPercent: wide ? -12 : -10, opacity: wide ? 0 : 0.25, ease: "power2.in", duration: wide ? 0.4 : 1 }, 0)
      .to(q("[data-rot]"), { rotate: 120, duration: 1 }, 0);

    if (wide) {
      tl.to(orb, { x: toCenter, ease: "power2.inOut", duration: 0.7 }, 0.1)
        .fromTo(q("[data-cap-l]"), { opacity: 0, x: -60 }, { opacity: 1, x: 0, ease: "power2.out", duration: 0.4 }, 0.6)
        .fromTo(q("[data-cap-r]"), { opacity: 0, x: 60 }, { opacity: 1, x: 0, ease: "power2.out", duration: 0.4 }, 0.6)
        .to({}, { duration: 0.2 });
    }
  });

  return (
    <section
      ref={root}
      className="relative min-h-svh flex flex-col justify-center overflow-hidden pt-36 sm:pt-40 lg:pt-36 pb-16 lg:pb-20"
      aria-labelledby="hero-title"
    >
      <div className="wrap grid items-center gap-12 lg:gap-8 xl:gap-14 lg:grid-cols-[1.12fr_0.88fr]">
        {/* Left Column: Content */}
        <div className="relative grid items-center max-w-2xl lg:max-w-none">
        <div data-copy className="relative z-10 [grid-area:1/1]">
          {/* Eyebrow badge with proper top breathing room */}
          <div data-intro className="flex items-center">
            <span className="eyebrow shadow-sm">
              Secure digital engineering
            </span>
          </div>

          {/* Main Headline - perfectly scaled so it never collides with the orb */}
          <h1
            id="hero-title"
            data-intro
            className="font-display font-extrabold text-[2.5rem] sm:text-[3.25rem] lg:text-[3.4rem] xl:text-[4rem] leading-[1.08] tracking-tight mt-5 text-ink"
          >
            Engineering systems that{" "}
            <span className="grad-text block sm:inline">help business scale.</span>
          </h1>

          {/* Lead Paragraph */}
          <p
            data-intro
            className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-[1.125rem] text-ink-2 leading-relaxed max-w-xl"
          >
            Technology should enable growth — and cybersecurity should protect that growth. We engineer custom ERP systems, enterprise automation, and resilient digital platforms tailored to industry-specific needs.
          </p>

          {/* Call to Actions with matching geometric chamfered shape */}
          <div data-intro className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3.5">
            <Button to="/services" chamfer className="!py-3.5 !px-6 text-sm font-semibold">
              Explore services <ArrowRight size={17} />
            </Button>
            <Button to="/contact" variant="ghost" chamfer className="!py-3.5 !px-6 text-sm font-semibold !bg-white/90">
              Book a consultation
            </Button>
          </div>

          {/* Trust badges */}
          <div
            data-intro
            className="mt-10 pt-6 border-t border-line/60 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-ink-3"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-brand" /> Security by Design
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-brand" /> Custom ERP Systems
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-brand" /> OWASP VAPT Audited
            </span>
          </div>
        </div>

        </div>

        {/* Right Column: Visual System Orb & Interactive Orbit Chips */}
        <div className="relative grid place-items-center lg:justify-items-end w-full">
          <div
            data-orb
            className="relative aspect-square w-[min(80vw,26rem)] sm:w-[min(28rem,64svh)] lg:w-[min(26rem,66svh)] xl:w-[min(29.5rem,68svh)] will-change-transform select-none"
          >
            {/* Subtle radial ambient glow behind orb */}
            <div
              className="absolute inset-4 -z-10 rounded-full bg-gradient-to-tr from-brand/20 via-accent/15 to-transparent blur-3xl opacity-70 pointer-events-none"
              aria-hidden="true"
            />

            {/* Rotating SVG concentric rings & core */}
            <div data-rot className="absolute inset-0 will-change-transform">
              <svg viewBox="0 0 400 400" className="size-full drop-shadow-sm" fill="none" aria-hidden="true">
                <defs>
                  <radialGradient id="hero-core" cx="50%" cy="40%" r="70%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#E3ECFB" />
                  </radialGradient>
                  <linearGradient id="hero-ring" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#02246A" stopOpacity=".55" />
                    <stop offset="100%" stopColor="#2E9BF5" stopOpacity=".25" />
                  </linearGradient>
                  <linearGradient id="hero-dashed" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#02246A" stopOpacity=".35" />
                    <stop offset="100%" stopColor="#2E9BF5" stopOpacity=".5" />
                  </linearGradient>
                </defs>
                {/* Outer Orbit */}
                <circle cx="200" cy="200" r="188" stroke="url(#hero-ring)" strokeWidth="1.2" />
                {/* Middle Dashed Orbit */}
                <circle
                  cx="200"
                  cy="200"
                  r="146"
                  stroke="url(#hero-dashed)"
                  strokeWidth="1.2"
                  strokeDasharray="4 8"
                />
                {/* Inner Orbit */}
                <circle cx="200" cy="200" r="104" stroke="url(#hero-ring)" strokeWidth="1.2" />
                {/* Center Core */}
                <circle cx="200" cy="200" r="72" fill="#2E9BF5" opacity=".10" />
                <circle cx="200" cy="200" r="62" fill="url(#hero-core)" stroke="#02246A" strokeOpacity=".18" strokeWidth="1.2" />
              </svg>
            </div>

            {/* Core Center Label */}
            <div className="absolute inset-0 grid place-items-center pointer-events-none">
              <img src="/New_Logos/MAIN_LOGO_TP.png" alt="Nuvion Technologies" className="w-[22%] h-auto object-contain" />
            </div>

            {/* 6 Orbiting Capabilities Chips */}
            {chips.map(({ icon: I, label, a }) => {
              const r = 41.5;
              const rad = (a * Math.PI) / 180;
              return (
                <div
                  key={label}
                  data-chip
                  className="absolute -translate-x-1/2 -translate-y-1/2 glass rounded-full px-3 py-1.5 sm:px-3.5 sm:py-2 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-[13px] font-semibold text-ink shadow-soft hover:shadow-lift hover:scale-105 transition-all duration-200 cursor-default float-y"
                  style={{
                    left: `${50 + r * Math.cos(rad)}%`,
                    top: `${50 + r * Math.sin(rad)}%`,
                    animationDelay: `${(a + 90) * 8}ms`,
                  }}
                >
                  <I size={15} className="text-brand shrink-0" />
                  <span>{label}</span>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Revealed on scroll (≥900px): captions flank the centred orb so neither side looks empty */}
      <div
        aria-hidden="true"
        className="hidden min-[900px]:flex absolute inset-0 items-center pt-36 sm:pt-40 lg:pt-36 pb-16 lg:pb-20 pointer-events-none"
      >
        <div className="wrap flex items-center justify-between">
          <div data-cap-l className="opacity-0 max-w-[24%] text-left">
            <span className="eyebrow">Unified platform</span>
            <p className="mt-4 font-display font-extrabold text-ink leading-[1.08] tracking-tight text-[clamp(1.75rem,3.2vw,3.25rem)]">
              One <span className="grad-text">system.</span>
            </p>
            <p className="mt-3 text-sm lg:text-base text-ink-2 leading-relaxed">
              Software, automation, security and cloud, engineered as a single foundation.
            </p>
          </div>
          <div data-cap-r className="opacity-0 max-w-[24%] text-right">
            <span className="eyebrow">Built to scale</span>
            <p className="mt-4 font-display font-extrabold text-ink leading-[1.08] tracking-tight text-[clamp(1.75rem,3.2vw,3.25rem)]">
              Every <span className="grad-text">operation.</span>
            </p>
            <p className="mt-3 text-sm lg:text-base text-ink-2 leading-relaxed">
              From the shop floor to the boardroom, every process connected and secure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
