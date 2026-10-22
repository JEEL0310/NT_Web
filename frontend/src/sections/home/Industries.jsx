import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import Icon from "../../components/Icon";
import { industries } from "../../data/industries";
import { gsap } from "../../core/gsap";
import useScene from "../../core/useScene";

/** INDUSTRIES: cards start stacked and tilted, then fan out into the grid as you scroll. */
export default function Industries() {
  const root = useRef(null);

  useScene(root, ({ wide }) => {
    const cards = root.current.querySelectorAll("[data-card]");
    gsap.fromTo(
      cards,
      {
        y: wide ? 160 : 80,
        x: (i) => (wide ? (i % 3 - 1) * -260 : 0),
        rotation: (i) => (i % 3 - 1) * 9,
        scale: 0.82,
        opacity: 0,
      },
      {
        y: 0, x: 0, rotation: 0, scale: 1, opacity: 1, ease: "none", stagger: 0.12,
        scrollTrigger: {
          trigger: root.current.querySelector("[data-grid]"),
          start: "top 88%", end: "center 45%", scrub: 1,
        },
      }
    );
  });

  return (
    <section ref={root} className="section" aria-labelledby="ind-title">
      <div className="wrap">
        <span className="eyebrow">Industries</span>
        <h2 id="ind-title" className="h-section mt-6 max-w-[22ch]">
          Built around <span className="grad-text">how your sector works.</span>
        </h2>

        <div data-grid className="mt-12 sm:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <Link key={ind.id} to={`/industries#${ind.id}`} data-card className="card card-hover group p-7 flex flex-col will-change-transform">
              <div className="flex items-center justify-between">
                <span className="icon-box"><Icon name={ind.icon} /></span>
                <ArrowUpRight size={20} className="text-ink-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand" />
              </div>
              <h3 className="h-card mt-6">{ind.title}</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {ind.solutions.slice(0, 3).map((s) => (
                  <li key={s} className="flex gap-2"><Check size={16} className="text-ok mt-0.5 shrink-0" /> {s}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
