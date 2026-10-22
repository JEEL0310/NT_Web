import { useRef } from "react";
import { processSteps } from "../../data/engineeringProcess";
import { gsap } from "../../core/gsap";
import useScene from "../../core/useScene";

/** PROCESS: a line draws itself and the five steps light up one by one; rewinds on scroll up. */
export default function Process() {
  const root = useRef(null);

  useScene(root, ({ wide }) => {
    const q = (s) => root.current.querySelectorAll(s);
    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: wide
        ? { trigger: root.current, start: "top top", end: "+=130%", pin: true, scrub: 1, anticipatePin: 1 }
        : { trigger: q("[data-steps]")[0], start: "top 75%", end: "bottom 60%", scrub: 1 },
    });

    tl.fromTo(
      q("[data-line]"),
      wide ? { scaleX: 0, transformOrigin: "left center" } : { scaleY: 0, transformOrigin: "center top" },
      wide ? { scaleX: 1, duration: processSteps.length } : { scaleY: 1, duration: processSteps.length },
      0
    );
    q("[data-step]").forEach((el, i) => {
      tl.fromTo(el, { opacity: 0.25, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, i * 0.95)
        .fromTo(el.querySelector("[data-node]"), { backgroundColor: "#FFFFFF", color: "#1456D8", scale: 0.85 }, { backgroundColor: "#1456D8", color: "#FFFFFF", scale: 1, duration: 0.5 }, i * 0.95);
    });
  });

  return (
    <section
      ref={root}
      className="relative min-h-svh flex flex-col justify-center overflow-hidden pt-32 sm:pt-36 lg:pt-32 pb-16 sm:pb-20"
      aria-labelledby="process-title"
    >
      <div className="wrap">
        <div>
          <span className="eyebrow shadow-sm">How we work</span>
          <h2
            id="process-title"
            className="font-display font-extrabold text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] text-ink leading-[1.12] tracking-tight mt-5 max-w-[22ch]"
          >
            A six-step framework, <span className="grad-text">zero guesswork.</span>
          </h2>
        </div>

        <div
          data-steps
          className="relative mt-12 sm:mt-16 lg:mt-20 grid gap-10 min-[900px]:grid-cols-6 min-[900px]:gap-4 lg:gap-5"
        >
          {/* Background track line */}
          <div
            className="absolute left-[1.55rem] top-6 bottom-6 w-0.5 min-[900px]:left-[1.55rem] min-[900px]:right-[1.55rem] min-[900px]:top-[1.55rem] min-[900px]:bottom-auto min-[900px]:h-0.5 min-[900px]:w-auto bg-line"
            aria-hidden="true"
          />
          {/* Animated active progress line */}
          <div
            data-line
            className="absolute left-[1.55rem] top-6 bottom-6 w-0.5 min-[900px]:left-[1.55rem] min-[900px]:right-[1.55rem] min-[900px]:top-[1.55rem] min-[900px]:bottom-auto min-[900px]:h-0.5 min-[900px]:w-auto bg-gradient-to-b min-[900px]:bg-gradient-to-r from-brand to-accent will-change-transform"
            aria-hidden="true"
          />

          {processSteps.map((s) => (
            <article
              key={s.number}
              data-step
              className="relative pl-[4.5rem] min-[900px]:pl-0 min-[900px]:pt-[4.5rem] will-change-transform"
            >
              <span
                data-node
                className="absolute left-0 top-0 grid place-items-center size-[3.1rem] rounded-full border border-brand/20 bg-white text-brand font-display font-extrabold text-sm sm:text-base shadow-soft transition-colors duration-300"
              >
                {s.number}
              </span>
              <h3 className="font-display font-bold text-lg sm:text-xl text-ink tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-xs sm:text-[0.925rem] text-ink-2 leading-relaxed">
                {s.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
