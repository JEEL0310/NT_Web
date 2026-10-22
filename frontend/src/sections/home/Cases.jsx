import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { caseStudies } from "../../data/caseStudies";
import { gsap } from "../../core/gsap";
import useScene from "../../core/useScene";

/** CASES: cards stack like a deck. Each one shrinks back as the next slides over it. */
export default function Cases() {
  const root = useRef(null);

  useScene(root, () => {
    const cards = Array.from(root.current.querySelectorAll("[data-card]"));
    cards.forEach((card, i) => {
      const next = cards[i + 1];
      if (!next) return;
      gsap.to(card, {
        scale: 0.95,
        ease: "none",
        scrollTrigger: { trigger: next, start: "top 85%", end: "top 20%", scrub: true },
      });
    });
  });

  return (
    <section ref={root} className="section" aria-labelledby="cases-title">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Proven results</span>
            <h2 id="cases-title" className="h-section mt-6 max-w-[18ch]">
              Real systems. <span className="grad-text whitespace-pre">Real outcomes.</span>
            </h2>
          </div>
          <Link to="/case-studies" className="btn btn-ghost">All case studies <ArrowRight size={16} /></Link>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col gap-[12vh]">
          {caseStudies.slice(0, 4).map((c, i) => (
            <article
              key={c.id}
              data-card
              className="card sticky p-7 sm:p-10 lg:p-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] bg-white border border-line shadow-card will-change-transform"
              style={{ top: `calc(6rem + ${i * 1.2}rem)` }}
            >
              <div>
                <span className="text-xs font-bold tracking-[0.14em] uppercase text-brand">{c.industry}</span>
                <h3 className="h-card !text-[clamp(1.5rem,1.1rem+1.6vw,2.6rem)] mt-3 text-ink">{c.title}</h3>
                <p className="mt-4 text-ink-2 leading-relaxed">{c.challenge}</p>
              </div>
              <ul className="space-y-3 self-center">
                {c.impact.map((m) => (
                  <li key={m} className="flex gap-3 rounded-2xl bg-tint/85 border border-line/40 px-4 py-3 text-ink font-medium">
                    <CheckCircle2 size={20} className="text-ok shrink-0 mt-0.5" /> {m}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
