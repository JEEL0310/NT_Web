import { useRef } from "react";
import { gsap } from "../../core/gsap";
import useScene from "../../core/useScene";

const stats = [
  { v: 70, suffix: "%", label: "less manual admin work", dec: 0 },
  { v: 80, suffix: "%", label: "faster data retrieval", dec: 0 },
  { v: 40, suffix: "%", label: "faster order processing", dec: 0 },
  { v: 99.9, suffix: "%", label: "uptime engineering target", dec: 1 },
];

const fmt = (n, d) => n.toFixed(d);

/** PROOF: numbers count up with scroll position and count back down when you scroll up. */
export default function Proof() {
  const root = useRef(null);

  useScene(root, () => {
    const els = Array.from(root.current.querySelectorAll("[data-num]"));
    els.forEach((el, i) => {
      const o = { n: 0 };
      el.textContent = fmt(0, stats[i].dec);
      gsap.to(o, {
        n: stats[i].v, ease: "none",
        onUpdate: () => (el.textContent = fmt(o.n, stats[i].dec)),
        scrollTrigger: { trigger: root.current, start: "top 85%", end: "center 50%", scrub: 1 },
      });
    });
    // restore the final numbers if animations are torn down (resize / reduced motion)
    return () => els.forEach((el, i) => (el.textContent = fmt(stats[i].v, stats[i].dec)));
  });

  return (
    <section ref={root} className="section" aria-label="Results">
      <div className="wrap">
        <div className="card p-8 sm:p-12 lg:p-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-left">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display font-extrabold text-ink text-[clamp(2.8rem,2rem+3vw,5.5rem)] leading-none tracking-tight">
                <span data-num>{fmt(s.v, s.dec)}</span>
                <span className="grad-text">{s.suffix}</span>
              </div>
              <p className="mt-3 text-ink-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
