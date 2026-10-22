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
  BadgeCheck,
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

const deliveryStandards = [
  {
    icon: ShieldCheck,
    title: "100% IP Ownership",
    desc: "Complete source code, documentation, and asset rights transferred to your organization.",
  },
  {
    icon: Lock,
    title: "Zero-Trust Hardened",
    desc: "Security by design adhering to OWASP standards, role-based controls, and data encryption.",
  },
  {
    icon: Cpu,
    title: "High-Resilience Arch",
    desc: "Engineered for 99.99% availability, seamless horizontal scaling, and disaster recovery.",
  },
  {
    icon: Users2,
    title: "Direct Lead Access",
    desc: "Collaborate directly with dedicated senior architects and engineers without agency friction.",
  },
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

          {/* 5. Official Accreditations & Recognitions */}
          <div>
            <Reveal className="max-w-3xl">
              <span className="eyebrow shadow-sm flex items-center gap-1.5 w-fit">
                <BadgeCheck size={14} className="text-brand" />
                Accreditations &amp; Industry Affiliations
              </span>
              <h2 className="h-section mt-4">
                Recognised Credentials. <br />
                <span className="grad-text">Global Industry Standing.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-ink-2">
                Backed by official Government of India enterprise registration and active international membership in the world’s premier attractions association.
              </p>
            </Reveal>

            <Reveal stagger className="mt-10 grid gap-6 md:grid-cols-2">
              {/* IAAPA Member 2026 */}
              <div className="card card-hover p-8 sm:p-10 border border-line hover:border-brand/40 bg-gradient-to-br from-white via-surface to-brand/[0.04] rounded-3xl flex flex-col justify-between group shadow-card">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="h-16 px-4 py-2 bg-white rounded-2xl border border-line shadow-xs flex items-center">
                      <img
                        src="/iaapa-member-2026.png"
                        alt="IAAPA Member 2026"
                        className="h-11 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-brand/10 text-brand border border-brand/20">
                      <span className="size-1.5 rounded-full bg-brand animate-pulse" />
                      Active 2026 Member
                    </span>
                  </div>

                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-accent block mb-1.5">
                    International Trade Association
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-ink">
                    IAAPA Official Member
                  </h3>
                  <p className="mt-3 text-sm text-ink-2 leading-relaxed">
                    Nuvion Technologies is an official member of <strong>IAAPA (International Association of Amusement Parks and Attractions)</strong> — the premier global authority representing permanently located entertainment, leisure facilities, and attractions across 100+ nations.
                  </p>
                  <p className="mt-2.5 text-xs sm:text-sm text-ink-2 leading-relaxed">
                    As an IAAPA member, we engineer specialized enterprise automation, guest workflow systems, custom ERP engines, and high-availability digital solutions tailored for the global attractions and amusement ecosystem.
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-line flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-surface border border-line text-ink-2">
                    Amusement &amp; Leisure Tech
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-surface border border-line text-ink-2">
                    Global Attraction Standards
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-surface border border-line text-ink-2">
                    Enterprise Member
                  </span>
                </div>
              </div>

              {/* Udyam Registration (MSME) */}
              <div className="card card-hover p-8 sm:p-10 border border-line hover:border-brand/40 bg-gradient-to-br from-white via-surface to-accent/[0.04] rounded-3xl flex flex-col justify-between group shadow-card">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="h-16 px-4 py-2 bg-white rounded-2xl border border-line shadow-xs flex items-center gap-3">
                      <img
                        src="/msme-udyam-logo.png"
                        alt="Udyam Registration - Ministry of MSME, Govt. of India"
                        className="h-12 w-auto object-contain"
                        loading="lazy"
                      />
                      <div className="leading-tight">
                        <div className="text-[11px] font-bold text-ink uppercase tracking-wider">Ministry of MSME</div>
                        <div className="text-[10px] text-ink-3">Government of India</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 border border-emerald-500/25">
                      <CheckCircle2 size={13} className="text-emerald-600" />
                      Govt. Registered
                    </span>
                  </div>

                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand block mb-1.5">
                    Statutory Enterprise Registration
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-ink">
                    Udyam Registered Enterprise
                  </h3>
                  <p className="mt-3 text-sm text-ink-2 leading-relaxed">
                    Nuvion Technologies Pvt. Ltd. is an officially recognized enterprise certified under the <strong>Udyam Registration framework of the Ministry of Micro, Small &amp; Medium Enterprises (MSME)</strong>, Government of India.
                  </p>
                  <p className="mt-2.5 text-xs sm:text-sm text-ink-2 leading-relaxed">
                    This statutory credential reflects our adherence to national compliance standards, verified corporate legitimacy, and strong commitment to technological innovation and digital excellence in Indian IT engineering.
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-line flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-surface border border-line text-ink-2">
                    Udyam Certified
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-surface border border-line text-ink-2">
                    Statutory Compliance
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-surface border border-line text-ink-2">
                    MSME India
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 6. Global Outlook & Enterprise Standards */}
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
                  <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/15 text-xs text-white/90">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <span className="size-2 rounded-full bg-emerald-400" />
                      IAAPA Member
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="flex items-center gap-1.5 font-semibold">
                      <CheckCircle2 size={13} className="text-emerald-300" />
                      Udyam Registered
                    </span>
                  </div>
                </div>
              </div>

              {/* Enterprise Delivery Standards */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/15 shadow-xl">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="text-xs font-mono uppercase font-bold tracking-wider text-accent">
                    Enterprise Delivery Standards
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-400/15 text-emerald-300 border border-emerald-400/30">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Verified SLA
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white">
                  {deliveryStandards.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <Icon size={16} className="text-emerald-400 shrink-0" />
                          <span className="text-xs font-bold tracking-tight">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-white/75 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-5 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-[11px] text-white/75 leading-relaxed">
                  <span>Protected under mutual Non-Disclosure Agreement (NDA) from Day 1.</span>
                  <span className="font-mono text-[10px] text-white/50 shrink-0">ISO &amp; OWASP Standards</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
