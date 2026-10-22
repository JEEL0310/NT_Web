import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Target,
  Sparkles,
  Users2,
  Lock,
  Layers,
  Cpu,
  Globe2,
  CheckCircle2,
  Workflow,
  TrendingUp,
} from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { processSteps } from "../data/engineeringProcess";

const coreValues = [
  {
    icon: Sparkles,
    title: "Innovation",
    desc: "Continuously adopting emerging technologies to drive real business transformation.",
  },
  {
    icon: Target,
    title: "Integrity",
    desc: "Building enduring trust with clients through transparency, honesty, and accountability.",
  },
  {
    icon: ShieldCheck,
    title: "Security by Design",
    desc: "Integrating cybersecurity as a fundamental development principle across every layer.",
  },
  {
    icon: Users2,
    title: "Collaboration",
    desc: "Partnering closely with engineering and leadership teams for shared operational success.",
  },
  {
    icon: Zap,
    title: "Agility",
    desc: "Rapidly adapting to market dynamics, changing user demands, and technological change.",
  },
];

const partnerPillars = [
  {
    title: "Business-First Engineering",
    desc: "We design technology around real business processes and operational requirements, not hype.",
    icon: Workflow,
  },
  {
    title: "Security by Design",
    desc: "Security is considered throughout architecture, development, infrastructure, and deployment.",
    icon: Lock,
  },
  {
    title: "Industry-Specific Solutions",
    desc: "We build systems around the workflows of specific industries rather than forcing businesses into generic tools.",
    icon: Layers,
  },
  {
    title: "Full-Stack Engineering Capability",
    desc: "From custom ERPs to cross-platform mobile apps, cloud infrastructure, and connected IoT systems.",
    icon: Cpu,
  },
  {
    title: "Scalable Architecture",
    desc: "Our systems are engineered with scalability, maintainability, performance, and long-term growth in mind.",
    icon: TrendingUp,
  },
  {
    title: "Long-Term Partnership",
    desc: "We work beyond initial rollout through continuous enhancement, support, optimization, and security updates.",
    icon: Users2,
  },
];

const btnChamfer =
  "polygon(4px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 10px 100%, 0 calc(100% - 10px), 0 4px)";

const targetMarkets = [
  "United States",
  "United Kingdom",
  "Canada",
  "France",
  "Germany",
  "Netherlands",
  "Switzerland",
  "Australia",
];

export default function About() {
  return (
    <>
      <PageHero
        type="about"
        eyebrow="Nuvion Technologies Pvt. Ltd."
        title="Powered by tech —"
        accent="Protected by security."
      >
        Nuvion Technologies Pvt. Ltd. is a future-focused software development and IT solutions company specialising in custom ERP systems, enterprise automation, and cybersecurity. We empower organisations across manufacturing, education, finance, sports, and real estate to operate smarter, safer, and more efficiently.
      </PageHero>

      <section className="pb-24 sm:pb-32 pt-6 sm:pt-10 relative">
        {/* Soft ambient glow */}
        <div
          className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-b from-brand/5 via-accent/5 to-transparent blur-3xl rounded-full"
          aria-hidden="true"
        />

        <div className="wrap relative z-10 space-y-24 sm:space-y-32">
          {/* 1. Mission & Vision Cards */}
          <Reveal className="grid gap-6 sm:grid-cols-2">
            <div className="card p-8 sm:p-10 border border-brand/20 bg-gradient-to-br from-white via-surface to-tint/30 shadow-card rounded-3xl relative overflow-hidden">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand block mb-2">
                OUR PURPOSE
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
                Our Mission
              </h2>
              <p className="mt-4 text-ink-2 leading-relaxed text-sm sm:text-base">
                To empower businesses with intelligent, secure, and scalable digital solutions that enhance operational efficiency, automate workflows, and safeguard digital assets.
              </p>
            </div>

            <div className="card p-8 sm:p-10 border border-accent/20 bg-gradient-to-br from-white via-surface to-accent/5 shadow-card rounded-3xl relative overflow-hidden">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-accent block mb-2">
                OUR AMBITION
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
                Our Vision
              </h2>
              <p className="mt-4 text-ink-2 leading-relaxed text-sm sm:text-base">
                To become a global leader in ERP and cybersecurity-driven enterprise software, transforming how organisations manage, protect, and scale their digital operations.
              </p>
            </div>
          </Reveal>

          {/* 2. Core Values */}
          <div>
            <Reveal className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow shadow-sm">What Guides Us</span>
              <h2 className="h-section mt-4">
                Our Core <span className="grad-text">Values.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-ink-2">
                Five guiding principles embedded into every line of code, architectural blueprint, and client partnership.
              </p>
            </Reveal>

            <Reveal
              stagger
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
            >
              {coreValues.map((v) => {
                const IconComponent = v.icon;
                return (
                  <div
                    key={v.title}
                    className="card card-hover p-6 sm:p-7 border border-line hover:border-brand/40 flex flex-col justify-between group rounded-2xl will-change-transform"
                  >
                    <div>
                      <span className="icon-box size-12 rounded-xl shadow-sm group-hover:scale-105 group-hover:border-brand/30 transition-transform duration-300">
                        <IconComponent size={22} className="text-brand" strokeWidth={2} />
                      </span>
                      <h3 className="font-display font-bold text-lg text-ink mt-5 group-hover:text-brand transition-colors duration-300">
                        {v.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-ink-2 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Reveal>
          </div>

          {/* 3. Why Partner with Nuvion Technologies */}
          <div>
            <Reveal className="max-w-2xl">
              <span className="eyebrow shadow-sm">Strategic Advantages</span>
              <h2 className="h-section mt-4">
                Why partner with <span className="grad-text">Nuvion Technologies.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-ink-2">
                We combine deep enterprise domain knowledge with modern application engineering and offensive security rigor.
              </p>
            </Reveal>

            <Reveal
              stagger
              className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {partnerPillars.map((p) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={p.title}
                    className="card card-hover p-6 sm:p-7 border border-line hover:border-brand/30 rounded-2xl flex flex-col justify-between"
                  >
                    <div>
                      <div className="size-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4 shadow-xs">
                        <IconComponent size={20} />
                      </div>
                      <h3 className="font-display font-bold text-lg text-ink">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-ink-2 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Reveal>
          </div>

          {/* 4. Our 6-Step Engineering Framework */}
          <div>
            <Reveal className="max-w-2xl">
              <span className="eyebrow shadow-sm">Engineering Lifecycle</span>
              <h2 className="h-section mt-4">
                Our six-step <span className="grad-text">approach.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-ink-2">
                A structured, disciplined methodology ensuring every system is secure, scalable, and built for real business operations.
              </p>
            </Reveal>

            <Reveal
              stagger
              className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
            >
              {processSteps.map((s) => (
                <div
                  key={s.number}
                  className="card card-hover p-5 sm:p-6 border border-line hover:border-brand/40 flex flex-col justify-between group rounded-2xl will-change-transform"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-display text-2xl font-extrabold grad-text group-hover:scale-110 origin-left transition-transform duration-300 inline-block">
                        {s.number}
                      </span>
                      <span className="size-2 rounded-full bg-brand/25 group-hover:bg-brand group-hover:scale-125 transition-all duration-300" />
                    </div>
                    <h3 className="font-display font-bold text-base text-ink group-hover:text-brand transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs text-ink-2 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>

          {/* 5. Global Outlook & Target Markets */}
          <Reveal
            className="card p-8 sm:p-12 lg:p-14 bg-gradient-to-br from-[#02246A] via-[#0B3B95] to-[#1456D8] text-white rounded-3xl relative overflow-hidden shadow-lift"
          >
            {/* Subtle background world map / globe arc */}
            <div
              className="absolute -right-20 -bottom-20 size-96 rounded-full bg-white/5 blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-white/15 text-white border border-white/20 mb-4">
                  <Globe2 size={13} />
                  GLOBAL DIGITAL ENGINEERING
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                  Engineered in India. <br />
                  Partnering across the World.
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed text-sm sm:text-base max-w-xl">
                  Nuvion Technologies Pvt. Ltd. is building its presence as a global digital engineering partner for organisations seeking secure, scalable, and industry-specific technology solutions.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-[#02246A] bg-white hover:bg-slate-100 transition-all duration-200 active:scale-95 group shadow-soft cursor-pointer shrink-0"
                    style={{ clipPath: btnChamfer }}
                  >
                    Initiate Engagement <ArrowRight size={17} />
                  </Link>
                </div>
              </div>

              {/* Target Markets Grid */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/15">
                <div className="text-xs font-mono uppercase font-bold tracking-wider text-accent mb-4">
                  Key Target Markets &amp; Geographic Reach
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-white">
                  {targetMarkets.map((m) => (
                    <div key={m} className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-white/5 border border-white/10">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/15 text-[11px] text-white/70 leading-relaxed">
                  We build long-term partnerships with organisations that value engineering quality, security, scalability, and operational impact.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
