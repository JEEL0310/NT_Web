import { useRef } from "react";
import { Check } from "lucide-react";
import { gsap } from "../../core/gsap";
import useScene from "../../core/useScene";

const pairs = [
  ["Manual spreadsheets", "Automated workflows"],
  ["Disconnected data", "One source of truth"],
  ["Slow approvals", "Instant approvals"],
  ["No visibility", "Live dashboards"],
  ["Security gaps", "Zero-trust security"],
  ["Legacy tools", "Modern platforms"],
  ["Human error", "Validated systems"],
  ["Siloed teams", "Connected teams"],
];

/**
 * STORY: Minimal, contained scroll-scrubbed transformation.
 * Cards stay strictly in their grid on the right, smoothly transitioning
 * from friction (rose tint) to clarity (white/brand border) as you scroll down,
 * and rewinding cleanly as you scroll up.
 */
export default function Story() {
  const root = useRef(null);

  useScene(root, ({ wide }) => {
    const q = (s) => root.current.querySelectorAll(s);
    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: wide
        ? { trigger: root.current, start: "top top", end: "+=120%", pin: true, scrub: 1, anticipatePin: 1 }
        : { trigger: q("[data-stage]")[0], start: "top 85%", end: "center 40%", scrub: 1 },
    });

    // 1. Headline morph: "Operations in chaos" -> "Operations in control"
    tl.fromTo(
      q("[data-title-chaos]"),
      { opacity: 1, y: 0 },
      { opacity: 0, y: -18, duration: 0.4 },
      0.35
    ).fromTo(
      q("[data-title-control]"),
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.4 },
      0.45
    );

    // 2. Status badge indicator morph and dynamic width expansion
    const pill = root.current?.querySelector("[data-status-pill]");
    const chaosEl = root.current?.querySelector("[data-status-chaos]");
    const controlEl = root.current?.querySelector("[data-status-control]");

    if (pill && chaosEl && controlEl) {
      const getChaosWidth = () => Math.ceil(chaosEl.offsetWidth) + 4;
      const getControlWidth = () => Math.ceil(controlEl.scrollWidth) + 16;

      gsap.set(pill, { width: getChaosWidth });
      tl.to(
        pill,
        {
          width: getControlWidth,
          duration: 0.35,
          ease: "power1.inOut",
        },
        0.38
      );
    }

    tl.fromTo(
      q("[data-status-chaos]"),
      { autoAlpha: 1, y: 0 },
      { autoAlpha: 0, y: -6, duration: 0.3 },
      0.38
    ).fromTo(
      q("[data-status-control]"),
      { autoAlpha: 0, y: 6 },
      { autoAlpha: 1, y: 0, duration: 0.3 },
      0.44
    );

    // 3. Contained cards: in-place micro-motion (never flying across the screen)
    tl.fromTo(
      q("[data-chip]"),
      {
        y: (i) => (i % 2 === 0 ? -10 : 10),
        scale: 0.98,
        backgroundColor: "rgba(255, 241, 242, 0.75)",
        borderColor: "rgba(244, 63, 94, 0.32)",
      },
      {
        y: 0,
        scale: 1,
        backgroundColor: "#FFFFFF",
        borderColor: "rgba(20, 86, 216, 0.22)",
        stagger: 0.04,
        duration: 0.7,
      },
      0.2
    );

    // 4. Internal text morph inside each card: Problem -> Solution
    tl.fromTo(
      q("[data-p]"),
      { opacity: 1, y: 0 },
      { opacity: 0, y: -10, duration: 0.35, stagger: 0.04 },
      0.32
    ).fromTo(
      q("[data-s]"),
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.35, stagger: 0.04 },
      0.48
    );
  });

  return (
    <section
      ref={root}
      className="relative min-h-svh flex flex-col justify-center overflow-hidden pt-32 sm:pt-36 lg:pt-32 pb-16 sm:pb-20"
      aria-labelledby="story-title"
    >
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        {/* Left narrative column */}
        <div>
          <span className="eyebrow shadow-sm">From chaos to clarity</span>
          <h2
            id="story-title"
            className="font-display font-extrabold text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] leading-[1.12] tracking-tight mt-5 grid max-w-[22ch]"
          >
            <span data-title-chaos className="[grid-area:1/1] text-rose will-change-transform">
              Operations<br />in chaos.
            </span>
            <span data-title-control className="[grid-area:1/1] grad-text opacity-0 will-change-transform">
              Operations<br />in control.
            </span>
          </h2>

          <p className="lead mt-6 max-w-md">
            Businesses rarely fail from a lack of ideas. They stall because operations can't scale. We replace the
            scattered tools and manual steps with one connected, secure foundation.
          </p>

          {/* Minimal status indicator with dynamic width on scroll */}
          <div className="mt-8 flex items-center">
            <div
              data-status-pill
              className="relative inline-flex items-center rounded-full border border-line bg-white/95 shadow-soft backdrop-blur-sm overflow-hidden text-xs font-semibold will-change-[width]"
            >
              <div
                data-status-chaos
                className="flex items-center gap-2 pl-4 pr-5 py-2 text-rose whitespace-nowrap will-change-transform"
              >
                <span className="size-2 rounded-full bg-rose animate-pulse shrink-0" />
                <span>Status: Fragile legacy bottlenecks</span>
              </div>
              <div
                data-status-control
                className="absolute inset-y-0 left-0 flex items-center gap-2 pl-4 pr-6 py-2 text-brand whitespace-nowrap opacity-0 will-change-transform"
              >
                <span className="size-2 rounded-full bg-ok animate-pulse shrink-0" />
                <span className="text-brand font-bold">Status: Centralized System</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Contained, cleanly aligned transformation cards */}
        <div data-stage className="grid grid-cols-2 gap-3 sm:gap-4 will-change-transform">
          {pairs.map(([p, s]) => (
            <div
              key={s}
              data-chip
              className="card !rounded-2xl p-4 sm:p-5 min-h-[5.4rem] grid items-center border transition-all duration-300 will-change-transform"
            >
              {/* Problem label */}
              <span
                data-p
                className="[grid-area:1/1] flex items-center gap-2 text-xs sm:text-sm lg:text-[0.95rem] font-semibold text-rose will-change-transform"
              >
                <span className="size-1.5 rounded-full bg-rose/60 shrink-0" />
                <span>{p}</span>
              </span>

              {/* Solution label */}
              <span
                data-s
                className="[grid-area:1/1] opacity-0 flex items-center gap-2 text-xs sm:text-sm lg:text-[0.95rem] font-semibold text-ink will-change-transform"
              >
                <Check size={16} className="text-ok shrink-0 stroke-[2.5]" />
                <span>{s}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
