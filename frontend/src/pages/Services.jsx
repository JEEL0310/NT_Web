import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Engineering for" accent="every business challenge.">
        We analyse bottlenecks, architect secure platforms, and deliver systems that drive operational efficiency and long-term scale.
      </PageHero>

      <section className="pb-24">
        <div className="wrap space-y-8 sm:space-y-10">
          {services.map((s, i) => (
            <Reveal
              key={s.slug}
              as="article"
              className="card card-hover group relative overflow-hidden p-7 sm:p-10 lg:p-12 grid gap-8 lg:grid-cols-[1.1fr_1.2fr] border border-line hover:border-brand/30 transition-all duration-300"
            >
              {/* Subtle Ambient Background Graphic */}
              <div className="absolute inset-0 -z-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <img
                  src={`/services/${s.slug}.jpg`}
                  alt=""
                  className="size-full object-cover object-center opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/70" />
              </div>

              {/* Service Header & Narrative */}
              <div className="relative z-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="icon-box size-12 rounded-xl shadow-sm">
                      <Icon name={s.icon} size={24} />
                    </span>
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-ink/10 group-hover:text-brand/20 transition-colors">
                      0{i + 1}
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-[2rem] text-ink mt-6 leading-snug">
                    {s.title}
                  </h2>
                  <p className="mt-3.5 text-ink-2 leading-relaxed text-sm sm:text-base">
                    {s.description}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to={`/services/${s.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#02246A] hover:bg-[#1456D8] transition-all duration-200 active:scale-95 group/btn shadow-soft"
                    style={{
                      clipPath:
                        "polygon(4px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 12px 100%, 0 calc(100% - 12px), 0 4px)",
                      boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <span>View full capabilities</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>

              {/* Key Capabilities Checklist */}
              <div className="relative z-10 self-center bg-surface/70 rounded-2xl p-6 sm:p-7 border border-line/70 backdrop-blur-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-brand mb-4">
                  Core Solutions &amp; Deliverables
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {s.services.map((x) => (
                    <li key={x} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-ink">
                      <CheckCircle2 size={16} className="text-ok mt-0.5 shrink-0" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
