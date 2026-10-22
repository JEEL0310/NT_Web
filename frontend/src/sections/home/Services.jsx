import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Icon from "../../components/Icon";
import { serviceHighlights } from "../../data/services";
import { gsap } from "../../core/gsap";
import useScene from "../../core/useScene";

/** SERVICES: on wide screens the page scrolls down while the cards travel sideways (and back). */
export default function Services() {
  const root = useRef(null);

  useScene(root, ({ wide }) => {
    const track = root.current.querySelector("[data-track]");
    if (wide) {
      const dist = () => Math.max(0, track.scrollWidth - window.innerWidth + 2 * 48);
      gsap.to(track, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current, start: "top top", end: () => "+=" + dist(),
          pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1,
        },
      });
    } else {
      root.current.querySelectorAll("[data-card]").forEach((c) =>
        gsap.from(c, {
          y: 70, opacity: 0, ease: "none",
          scrollTrigger: { trigger: c, start: "top 92%", end: "top 62%", scrub: true },
        })
      );
    }
  });

  return (
    <section
      ref={root}
      className="relative min-h-svh flex flex-col justify-center overflow-hidden pt-36 sm:pt-40 lg:pt-36 pb-16 lg:pb-20"
      aria-labelledby="services-title"
    >
      <div className="wrap mb-8 sm:mb-10">
        <span className="eyebrow shadow-sm">What we engineer</span>
        <h2 id="services-title" className="h-section mt-5 max-w-[20ch]">
          Four disciplines. <span className="grad-text">One accountable team.</span>
        </h2>
      </div>

      <div
        data-track
        className="flex flex-col min-[900px]:flex-row gap-6 sm:gap-7 px-[clamp(1.1rem,4vw,3.5rem)] will-change-transform"
      >
        {serviceHighlights.map((s, i) => (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            data-card
            className="card card-hover group relative overflow-hidden flex flex-col justify-between p-7 sm:p-8 min-[900px]:shrink-0 min-[900px]:w-[min(28rem,34vw)] min-h-[16rem] min-[900px]:min-h-[19rem] rounded-2xl border border-line shadow-card hover:border-brand/40 transition-all duration-300"
          >
            {/* Ambient Background Graphic Layer (Zero extra card height) */}
            <div className="absolute inset-0 -z-0 pointer-events-none overflow-hidden" aria-hidden="true">
              <img
                src={s.image}
                alt=""
                className="size-full object-cover object-center opacity-25 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/60" />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <span className="icon-box size-12 rounded-xl shadow-sm">
                  <Icon name={s.icon} size={24} />
                </span>
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-ink/10 group-hover:text-brand/90 transition-colors">
                  0{i + 1}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-ink group-hover:text-brand transition-colors leading-snug">
                {s.shortTitle}
              </h3>
              <p className="mt-3 text-sm text-ink-2 leading-relaxed">
                {s.tagline}
              </p>
            </div>

            {/* Explore Action Button */}
            <div className="relative z-10 mt-6 pt-4 border-t border-line/60 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand">
                Explore capabilities
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
