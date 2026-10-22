import { Navigate, useParams, Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Code2,
  ShieldCheck,
  Cloud,
  Cpu,
  Activity,
  Layers,
  ArrowUpRight,
  Lock,
  Rocket,
  Check,
  Boxes,
  Workflow,
  BarChart3,
  Server,
  FileCheck,
} from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { services } from "../data/services";

// Dynamic punchy accent titles per service to avoid repetitive word walls
const accentMap = {
  "digital-transformation": "Ecosystems.",
  "software-engineering": "Platforms.",
  cybersecurity: "& Trust Mesh.",
  "cloud-engineering": "& Reliability.",
};

// Impact tags for each solution index
const impactTags = [
  "Synchronised",
  "24/7 Automation",
  "Live Telemetry",
  "Single Truth",
  "Instant Workflows",
];

// Icon mapping helper for capabilities
const capabilityIcons = [
  Cpu,
  Workflow,
  BarChart3,
  Layers,
  Boxes,
  FileCheck,
  Server,
  Activity,
  ShieldCheck,
  Rocket,
];

const ctaPolygon =
  "polygon(8px 0, calc(100% - 18px) 0, 100% 18px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 18px 100%, 0 calc(100% - 18px), 0 8px)";
const btnChamfer =
  "polygon(4px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 10px 100%, 0 calc(100% - 10px), 0 4px)";

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug);
  if (!s) return <Navigate to="/services" replace />;

  // Filter other services for quick navigation
  const otherServices = services.filter((x) => x.slug !== slug);

  return (
    <>
      {/* 1. HERO: Crisp, punchy, beautiful with dedicated discipline visual */}
      <PageHero
        eyebrow="ENGINEERING DISCIPLINE"
        title={s.shortTitle}
        accent={accentMap[s.slug] || "Architecture."}
        service={s}
        type="service-detail"
      >
        {s.tagline}
      </PageHero>

      {/* 2. LIVE METRICS RIBBON: High-impact scannable telemetry */}
      {/* <section className="relative -mt-6 sm:-mt-8 z-20 pb-10 sm:pb-14">
        <div className="wrap">
          <Reveal y={20}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-line shadow-soft hover:shadow-lift transition-shadow duration-300">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-surface/60 border border-line/60">
                <div className="size-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <Activity size={18} />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-extrabold text-ink leading-tight">99.99%</div>
                  <div className="text-[11px] font-semibold text-ink-3">Production SLA</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-surface/60 border border-line/60">
                <div className="size-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0">
                  <Cpu size={18} />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-extrabold text-ink leading-tight">100%</div>
                  <div className="text-[11px] font-semibold text-ink-3">Custom Architecture</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-surface/60 border border-line/60">
                <div className="size-10 rounded-xl bg-brand-2/10 text-brand-2 flex items-center justify-center shrink-0">
                  <Workflow size={18} />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-extrabold text-ink leading-tight">24/7</div>
                  <div className="text-[11px] font-semibold text-ink-3">Autonomous Ops</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-surface/60 border border-line/60">
                <div className="size-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-extrabold text-ink leading-tight">&lt; 20ms</div>
                  <div className="text-[11px] font-semibold text-ink-3">Global Sync Speed</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section> */}

      {/* 3. SYSTEM EVOLUTION MATRIX: Transforming friction into flow */}
      <section className="py-14 sm:py-20 relative overflow-hidden">
        <div className="wrap">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="eyebrow shadow-sm">SYSTEM EVOLUTION</span>
            <h2 className="h-section mt-4">
              From Legacy Friction to <span className="grad-text">Engineered Flow.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink-2">
              How Nuvion dismantles traditional operational bottlenecks with unified, enterprise-grade architecture.
            </p>
          </Reveal>

          {/* Paired Transformation Flow Items */}
          <Reveal stagger className="mt-12 space-y-3.5 max-w-4xl mx-auto">
            {s.problems.map((problem, i) => {
              const solution = s.solutions[i] || s.solutions[0];
              const tag = impactTags[i] || "Optimized";
              return (
                <div
                  key={problem}
                  className="group grid gap-3 sm:gap-4 md:grid-cols-[1fr_auto_1.3fr] items-center p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-line shadow-soft hover:shadow-lift transition-all hover:border-brand/40"
                >
                  {/* Left: Legacy Friction */}
                  <div className="flex items-center gap-3 text-ink-2">
                    <span className="size-7 rounded-lg bg-rose/10 text-rose flex items-center justify-center shrink-0">
                      <AlertTriangle size={15} />
                    </span>
                    <span className="text-xs sm:text-sm font-medium line-through decoration-rose/40 decoration-1 text-ink-3 group-hover:text-ink-2 transition-colors">
                      {problem}
                    </span>
                  </div>

                  {/* Center: Connective Flow Arrow */}
                  <div className="hidden md:flex justify-center text-brand-2">
                    <ArrowRight size={16} className="text-brand group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Right: Engineered Solution */}
                  <div className="flex items-center justify-between gap-3 pl-0 md:pl-2">
                    <div className="flex items-center gap-2.5">
                      <span className="size-7 rounded-lg bg-ok/10 text-ok flex items-center justify-center shrink-0">
                        <Check size={15} className="stroke-[2.5]" />
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-ink">
                        {solution}
                      </span>
                    </div>
                    <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand/10 text-brand shrink-0">
                      {tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* 4. MODULAR ARCHITECTURE CAPABILITIES: Structured visual cards instead of a tag cloud */}
      <section className="py-14 sm:py-20 relative overflow-hidden">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <Reveal>
              <span className="eyebrow shadow-sm">ENGINEERING SCOPE</span>
              <h2 className="h-section mt-4">
                Capabilities <span className="grad-text">included.</span>
              </h2>
              <p className="mt-2 text-sm text-ink-2 max-w-lg">
                Every component is modular, production-ready, and engineered to scale seamlessly with your infrastructure.
              </p>
            </Reveal>

            <Reveal className="hidden md:block">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-tint border border-brand/20 text-brand">
                <CheckCircle2 size={14} className="text-ok" /> Enterprise Source Code Owned
              </span>
            </Reveal>
          </div>

          {/* Visual Capabilities Cards Grid */}
          <Reveal stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.services.map((item, idx) => {
              const IconComp = capabilityIcons[idx % capabilityIcons.length];
              return (
                <div
                  key={item}
                  className="card p-5 sm:p-6 bg-white/90 backdrop-blur-sm border border-line shadow-soft hover:shadow-lift hover:border-brand/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="size-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                        <IconComp size={18} />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-ink-3 px-2 py-0.5 rounded bg-surface border border-line/60">
                        Module {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base text-ink group-hover:text-brand transition-colors">
                      {item}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-line/50 flex items-center justify-between text-xs text-ink-3">
                    <span className="font-medium">Full Integration</span>
                    <ArrowUpRight size={14} className="text-brand opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              );
            })}
          </Reveal>

          {/* Compliance or Architecture Note */}
          {s.note && (
            <Reveal className="mt-8 p-4 rounded-xl bg-tint/60 border border-brand/20 flex items-center gap-3 text-xs text-ink-2 max-w-2xl">
              <Lock size={16} className="text-brand shrink-0" />
              <span>{s.note}</span>
            </Reveal>
          )}
        </div>
      </section>

      {/* 5. DELIVERY LIFECYCLE: 4-Phase Engineering Framework */}
      <section className="py-14 sm:py-20 relative overflow-hidden">
        <div className="wrap">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="eyebrow shadow-sm">EXECUTION LIFECYCLE</span>
            <h2 className="h-section mt-4">
              Predictable, sprint-based <span className="grad-text">delivery pipeline.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink-2">
              From initial technical discovery to production cutover and automated 24/7 telemetry monitoring.
            </p>
          </Reveal>

          <Reveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card p-6 bg-white/90 backdrop-blur-sm border border-line shadow-soft relative overflow-hidden hover:shadow-lift hover:border-brand/40 transition-all">
              <div className="text-3xl font-extrabold text-brand/20 font-mono">01</div>
              <div className="font-display font-bold text-base text-ink mt-2">Discovery &amp; Audit</div>
              <p className="mt-2 text-xs text-ink-3 leading-relaxed">
                Comprehensive assessment of legacy workflows, data contracts, and architectural bottlenecks.
              </p>
            </div>

            <div className="card p-6 bg-white/90 backdrop-blur-sm border border-line shadow-soft relative overflow-hidden hover:shadow-lift hover:border-brand/40 transition-all">
              <div className="text-3xl font-extrabold text-brand/20 font-mono">02</div>
              <div className="font-display font-bold text-base text-ink mt-2">Architecture Blueprint</div>
              <p className="mt-2 text-xs text-ink-3 leading-relaxed">
                Schema definition, API gateway topology, and zero-trust security guardrail modeling.
              </p>
            </div>

            <div className="card p-6 bg-white/90 backdrop-blur-sm border border-line shadow-soft relative overflow-hidden hover:shadow-lift hover:border-brand/40 transition-all">
              <div className="text-3xl font-extrabold text-brand/20 font-mono">03</div>
              <div className="font-display font-bold text-base text-ink mt-2">Sprint Engineering</div>
              <p className="mt-2 text-xs text-ink-3 leading-relaxed">
                Clean, documented code with CI/CD automation, unit coverage, and weekly milestone demos.
              </p>
            </div>

            <div className="card p-6 bg-white/90 backdrop-blur-sm border border-line shadow-soft relative overflow-hidden hover:shadow-lift hover:border-brand/40 transition-all">
              <div className="text-3xl font-extrabold text-brand/20 font-mono">04</div>
              <div className="font-display font-bold text-base text-ink mt-2">Zero-Downtime Launch</div>
              <p className="mt-2 text-xs text-ink-3 leading-relaxed">
                Phased production rollout, staff enablement, and continuous 99.99% uptime telemetry.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. EXPLORE OTHER DISCIPLINES: Visual switcher */}
      <section className="py-14 sm:py-20 relative overflow-hidden">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow shadow-sm">CONNECTED CAPABILITIES</span>
            <h2 className="h-section mt-4">
              Explore other <span className="grad-text">disciplines.</span>
            </h2>
          </Reveal>

          <Reveal stagger className="mt-8 grid gap-4 sm:grid-cols-3">
            {otherServices.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="group card p-5 sm:p-6 bg-white/90 backdrop-blur-sm border border-line shadow-soft hover:shadow-lift hover:border-brand/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="size-10 rounded-xl bg-surface border border-line/70 text-brand flex items-center justify-center mb-3 group-hover:bg-brand group-hover:text-white transition-colors">
                    {item.slug === "software-engineering" && <Code2 size={18} />}
                    {item.slug === "cybersecurity" && <ShieldCheck size={18} />}
                    {item.slug === "cloud-engineering" && <Cloud size={18} />}
                    {item.slug === "digital-transformation" && <Zap size={18} />}
                  </div>
                  <h3 className="font-display font-bold text-base text-ink group-hover:text-brand transition-colors">
                    {item.shortTitle}
                  </h3>
                  <p className="mt-1.5 text-xs text-ink-3 line-clamp-2 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-line/60 flex items-center gap-1.5 text-xs font-semibold text-brand">
                  <span>View Architecture</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 7. HIGH-CONVERTING MINIMAL SINGLE-COLOR CTA: Matching Home Page CTA style */}
      <section className="pb-16 sm:pb-24 relative overflow-hidden" aria-labelledby="cta-title">
        <div className="wrap">
          <Reveal className="relative max-w-4xl mx-auto filter drop-shadow-[0_16px_36px_rgba(2,36,106,0.18)]">
            {/* 1px border stroke layer */}
            <div className="p-[1px] bg-white/20 transition-all duration-300" style={{ clipPath: ctaPolygon }}>
              {/* Single Solid Color Background: Nuvion Navy (#02246A) */}
              <div
                className="px-6 py-10 sm:px-12 sm:py-14 text-center text-white bg-[#02246A]"
                style={{ clipPath: ctaPolygon }}
              >
                <span className="inline-block px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-white/15 text-white/90 mb-3">
                  Direct Engineering Engagement
                </span>
                <h2
                  id="cta-title"
                  className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[2.35rem] leading-tight text-white tracking-tight mx-auto max-w-xl"
                >
                  Ready to engineer your {s.shortTitle.toLowerCase()}?
                </h2>

                <p className="mt-3 sm:mt-4 mx-auto max-w-lg text-sm sm:text-base text-white/80 leading-relaxed">
                  Schedule a 30-minute architecture review with our senior engineering team. No sales pressure — only technical clarity and honest feasibility.
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
                    <span>Book technical consultation</span>
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
                    All services
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
