import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { industries } from "../data/industries";

const btnChamfer =
  "polygon(4px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 10px 100%, 0 calc(100% - 10px), 0 4px)";

const sectorMetadata = {
  manufacturing: {
    code: "01",
    keyMetric: "99.99% Line Uptime",
    guardrail: "SCADA & ERP Bus",
  },
  healthcare: {
    code: "03",
    keyMetric: "HIPAA & GDPR Ready",
    guardrail: "Zero-Trust Encryption",
  },
  sports: {
    code: "04",
    keyMetric: "99.99% Ticketing SLA",
    guardrail: "Real-Time WebSockets",
  },
  hospitality: {
    code: "05",
    keyMetric: "PCI-DSS Level 1",
    guardrail: "Multi-Property PMS",
  },
  startups: {
    code: "06",
    keyMetric: "Kubernetes Native",
    guardrail: "Automated CI/CD GitOps",
  },
  cybersecurity: {
    code: "02",
    keyMetric: "SOC 2 & ISO 27001",
    guardrail: "Automated VAPT Hardened",
  },
};

export default function Industries() {
  const { hash } = useLocation();

  // Jump to specific industry when linked as /industries#healthcare
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => {
      const el = document.getElementById(hash.slice(1));
      if (el) window.__lenis ? window.__lenis.scrollTo(el, { offset: -110 }) : el.scrollIntoView({ behavior: "smooth" });
    }, 350);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <>
      <PageHero eyebrow="Industries" title="Digital foundations for" accent="your sector.">
        Every sector has its own operational constraints. Our method remains constant: audit operations, remove manual bottlenecks, and engineer reliable, secure digital systems.
      </PageHero>

      <section className="pb-24">
        <div className="wrap space-y-6 sm:space-y-8">
          {industries.map((ind, idx) => {
            const meta = sectorMetadata[ind.id] || {
              code: `SEC-0${idx + 1}`,
              keyMetric: "99.99% Availability",
              guardrail: "Zero-Trust Security",
            };

            return (
              <Reveal
                key={ind.id}
                as="article"
                id={ind.id}
                className="card card-hover relative overflow-hidden p-6 sm:p-8 lg:p-9 scroll-mt-28 bg-white/90 backdrop-blur-md rounded-2xl border border-line shadow-card hover:border-brand/40 transition-all duration-300 grid gap-6 lg:gap-10 lg:grid-cols-[1fr_1.2fr] items-center"
              >
                {/* Subtle top-right background index number */}
                <span className="absolute top-2 right-4 sm:right-6 font-mono text-5xl font-extrabold text-ink/[0.04] pointer-events-none select-none tracking-tight">
                  0{idx + 1}
                </span>

                {/* Left Column: Sector Header, Overview & Action */}
                <div className="relative z-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="size-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <Icon name={ind.icon} size={20} />
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-brand/10 text-brand">
                        SECTOR // {meta.code}
                      </span>
                    </div>

                    <h2 className="font-display font-bold text-2xl sm:text-[1.75rem] text-ink mt-3 tracking-tight">
                      {ind.title}
                    </h2>

                    <p className="mt-2.5 text-xs sm:text-sm text-ink-2 leading-relaxed">
                      {ind.description}
                    </p>

                    {/* Compact Specs Strip */}
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-surface border border-line text-ink-2">
                        <span className="size-1.5 rounded-full bg-emerald-500" />
                        <span>{meta.keyMetric}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-tint/80 border border-brand/20 text-brand">
                        <ShieldCheck size={12} className="text-brand shrink-0" />
                        <span>{meta.guardrail}</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#02246A] hover:bg-[#1456D8] transition-all duration-200 active:scale-95 shadow-sm group/btn"
                      style={{ clipPath: btnChamfer }}
                    >
                      <span>Consult for {ind.title.split(" ")[0]}</span>
                      <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Minimal & Attractive Transformation Engine */}
                <div className="relative z-10 bg-surface/70 rounded-xl p-4 sm:p-5 border border-line/70 backdrop-blur-sm">
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-line/60 text-[10px] font-bold uppercase tracking-wider text-ink-3">
                    <span>Legacy Friction</span>
                    <span className="text-brand flex items-center gap-1 font-semibold">
                      <Sparkles size={11} /> Engineered Solution
                    </span>
                  </div>

                  <div className="space-y-2">
                    {ind.challenges.map((c, i) => {
                      const s = ind.solutions[i] || ind.solutions[0];
                      return (
                        <div
                          key={c}
                          className="group/row grid grid-cols-[1fr_auto_1.15fr] items-center gap-2 px-3 py-2 rounded-lg bg-white/80 hover:bg-white border border-line/50 hover:border-brand/30 hover:shadow-xs transition-all text-xs"
                        >
                          {/* Left: Challenge */}
                          <span
                            className="text-ink-3 line-through decoration-rose/40 truncate text-[11px] sm:text-xs"
                            title={c}
                          >
                            {c}
                          </span>

                          {/* Center: Connective Arrow */}
                          <ArrowRight
                            size={12}
                            className="text-brand-2/60 group-hover/row:text-brand group-hover/row:translate-x-0.5 transition-all shrink-0"
                          />

                          {/* Right: Engineered Solution */}
                          <span
                            className="font-semibold text-ink group-hover/row:text-brand transition-colors text-[11px] sm:text-xs flex items-center gap-1.5 min-w-0"
                            title={s}
                          >
                            <Check size={12} className="text-ok shrink-0 stroke-[2.5]" />
                            <span className="truncate">{s}</span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
