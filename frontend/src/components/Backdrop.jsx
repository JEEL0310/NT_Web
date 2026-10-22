import { useLayoutEffect, useRef } from "react";
import { gsap } from "../core/gsap";

/**
 * One continuous, fixed backdrop for the entire site, which is what makes
 * every section feel like a single page. The colour blobs travel and morph
 * with the page's scroll progress (scrubbed, so they reverse going up).
 */
export default function Backdrop() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia(ref);
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      ref.current.querySelectorAll("[data-blob]").forEach((el, i) => {
        gsap.to(el, {
          xPercent: (i % 2 ? -1 : 1) * 55,
          yPercent: (i - 1) * 70,
          scale: 1 + i * 0.3,
          rotate: i * 40,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.4,
            invalidateOnRefresh: true,
          },
        });
      });
    });
    return () => mm.revert();
  }, []);

  const blob = "absolute rounded-full will-change-transform";
  return (
    <div ref={ref} aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#FBFCFF_0%,#EEF3FC_100%)]" />
      <div
        data-blob
        className={`${blob} -top-[18%] -left-[12%] w-[55vmax] h-[55vmax]`}
        style={{ background: "radial-gradient(closest-side, rgba(20,86,216,.18), transparent)" }}
      />
      <div
        data-blob
        className={`${blob} top-[20%] -right-[15%] w-[50vmax] h-[50vmax]`}
        style={{ background: "radial-gradient(closest-side, rgba(46,155,245,.18), transparent)" }}
      />
      <div
        data-blob
        className={`${blob} -bottom-[20%] left-[15%] w-[48vmax] h-[48vmax]`}
        style={{ background: "radial-gradient(closest-side, rgba(2,36,106,.10), transparent)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(rgba(11,16,32,.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at 50% 30%, #000 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, #000 0%, transparent 75%)",
        }}
      />
    </div>
  );
}
