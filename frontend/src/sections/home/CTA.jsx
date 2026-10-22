import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { gsap } from "../../core/gsap";
import useScene from "../../core/useScene";

const ctaPolygon =
  "polygon(8px 0, calc(100% - 18px) 0, 100% 18px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 18px 100%, 0 calc(100% - 18px), 0 8px)";
const btnChamfer =
  "polygon(4px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 10px 100%, 0 calc(100% - 10px), 0 4px)";

/** CTA: Minimal, compact, single-color executive banner */
export default function CTA() {
  const root = useRef(null);

  useScene(root, () => {
    const card = root.current?.querySelector("[data-cta]");
    if (!card) return;

    gsap.fromTo(
      card,
      { y: 32, opacity: 0.4 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.7,
        scrollTrigger: {
          trigger: root.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <section ref={root} className="py-12 sm:py-16 relative overflow-hidden" aria-labelledby="cta-title">
      <div className="wrap">
        {/* Sleek, Minimal Container (max-w-4xl) */}
        <div
          data-cta
          className="relative max-w-4xl mx-auto filter drop-shadow-[0_16px_36px_rgba(2,36,106,0.18)] will-change-transform"
        >
          {/* 1px border stroke layer */}
          <div className="p-[1px] bg-white/20 transition-all duration-300" style={{ clipPath: ctaPolygon }}>
            {/* Single Solid Color Background: Nuvion Navy (#02246A) */}
            <div
              className="px-6 py-10 sm:px-12 sm:py-14 text-center text-white bg-[#02246A]"
              style={{ clipPath: ctaPolygon }}
            >
              <h2
                id="cta-title"
                className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[2.35rem] leading-tight text-white tracking-tight mx-auto max-w-xl"
              >
                Ready to engineer what comes next?
              </h2>

              <p className="mt-3 sm:mt-4 mx-auto max-w-lg text-sm sm:text-base text-white/80 leading-relaxed">
                Tell us how your operations run today. We'll map the bottlenecks and show you a secure, scalable path forward.
              </p>

              {/* High-Contrast Action Buttons with sleek matching chamfer */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#02246A] bg-white hover:bg-slate-100 transition-all duration-200 shadow-md active:scale-95 group"
                  style={{
                    clipPath: btnChamfer,
                  }}
                >
                  <span>Start a conversation</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 transition-all duration-200 active:scale-95 border border-white/20"
                  style={{
                    clipPath: btnChamfer,
                  }}
                >
                  See our services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
