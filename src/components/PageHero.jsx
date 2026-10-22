import { useRef, useState } from "react";
import {
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  Code2,
  Cloud,
  Factory,
  HeartPulse,
  Building2,
  Rocket,
  TrendingUp,
  Cpu,
  Globe,
  Radio,
  Clock,
  Lock,
  Trophy,
  Mail,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";
import { gsap } from "../core/gsap";
import useScene from "../core/useScene";

/* ───────── 0. SERVICE DETAIL VISUAL: Dedicated Discipline Blueprint ───────── */
function ServiceDetailVisual({ service }) {
  const slug = service?.slug || "digital-transformation";

  const config = {
    "digital-transformation": {
      icon: Zap,
      coreLabel: "Automated\nEcosystem",
      nodeT: { icon: Cpu, label: "Custom ERP Core", tag: "Discipline 01" },
      nodeR: { icon: Activity, label: "Real-Time BI", tag: "Telemetry" },
      nodeB: {
        icon: CheckCircle2,
        label: "Autonomous Ops",
        tag: "24/7 Engine",
      },
      nodeL: { icon: ShieldCheck, label: "Zero Silos Bus", tag: "Data Sync" },
      status: "Pipeline Active",
    },
    "software-engineering": {
      icon: Code2,
      coreLabel: "Scalable\nPlatform",
      nodeT: { icon: Rocket, label: "SaaS Engine", tag: "Discipline 02" },
      nodeR: { icon: Cpu, label: "API Gateway", tag: "Microservices" },
      nodeB: { icon: Activity, label: "Sub-20ms Speed", tag: "Benchmark" },
      nodeL: {
        icon: ShieldCheck,
        label: "Secure by Design",
        tag: "Production",
      },
      status: "Production Ready",
    },
    cybersecurity: {
      icon: ShieldCheck,
      coreLabel: "Zero-Trust\nMesh",
      nodeT: { icon: Lock, label: "VAPT Hardened", tag: "Discipline 03" },
      nodeR: { icon: Activity, label: "SOC 2 & GDPR", tag: "Compliance" },
      nodeB: { icon: CheckCircle2, label: "API Protection", tag: "Zero-Leak" },
      nodeL: { icon: Cpu, label: "Incident Shield", tag: "Continuous" },
      status: "Defense Active",
    },
    "cloud-engineering": {
      icon: Cloud,
      coreLabel: "Resilient\nCloud Cluster",
      nodeT: { icon: Rocket, label: "Multi-Zone HA", tag: "Discipline 04" },
      nodeR: { icon: Cpu, label: "Automated CI/CD", tag: "GitOps" },
      nodeB: { icon: Activity, label: "Cost-Optimized", tag: "Telemetry" },
      nodeL: { icon: ShieldCheck, label: "Disaster Recovery", tag: "Failover" },
      status: "Cloud Native",
    },
  }[slug] || {
    icon: Cpu,
    coreLabel: "Architecture\nEngine",
    nodeT: { icon: Zap, label: "Core Services", tag: "System 01" },
    nodeR: { icon: Activity, label: "Live Telemetry", tag: "Telemetry" },
    nodeB: { icon: CheckCircle2, label: "Production Ops", tag: "24/7 Engine" },
    nodeL: { icon: ShieldCheck, label: "Secure Mesh", tag: "Data Sync" },
    status: "Verified Pipeline",
  };

  const CoreIcon = config.icon;
  const IconT = config.nodeT.icon;
  const IconR = config.nodeR.icon;
  const IconB = config.nodeB.icon;
  const IconL = config.nodeL.icon;

  return (
    <div className="relative aspect-square w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[480px] grid place-items-center">
      {/* SVG Circuit Blueprint Lines */}
      <div data-hero-ring className="absolute inset-0 will-change-transform">
        <svg
          viewBox="0 0 400 400"
          className="size-full drop-shadow-sm pointer-events-none"
          fill="none"
        >
          <defs>
            <linearGradient id="detail-wire" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#02246A" stopOpacity=".5" />
              <stop offset="50%" stopColor="#1456D8" stopOpacity=".3" />
              <stop offset="100%" stopColor="#2E9BF5" stopOpacity=".5" />
            </linearGradient>
            <radialGradient id="detail-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1456D8" stopOpacity=".15" />
              <stop offset="100%" stopColor="#02246A" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambient Radial Target */}
          <circle
            cx="200"
            cy="200"
            r="175"
            fill="url(#detail-glow)"
            stroke="url(#detail-wire)"
            strokeWidth="1"
            strokeDasharray="6 8"
          />
          <circle
            cx="200"
            cy="200"
            r="120"
            stroke="url(#detail-wire)"
            strokeWidth="1"
            strokeOpacity=".4"
          />
          <circle
            cx="200"
            cy="200"
            r="65"
            stroke="url(#detail-wire)"
            strokeWidth="1.2"
            strokeDasharray="3 5"
          />

          {/* Diagonal Corner Circuit Lines to Center Core */}
          <line
            x1="110"
            y1="85"
            x2="165"
            y2="155"
            stroke="url(#detail-wire)"
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />
          <line
            x1="290"
            y1="85"
            x2="235"
            y2="155"
            stroke="url(#detail-wire)"
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />
          <line
            x1="110"
            y1="315"
            x2="165"
            y2="245"
            stroke="url(#detail-wire)"
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />
          <line
            x1="290"
            y1="315"
            x2="235"
            y2="245"
            stroke="url(#detail-wire)"
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />
        </svg>
      </div>

      {/* Center Specialized Discipline Core - 100% Unobstructed Middle Clearance */}
      <div
        data-hero-core
        className="relative z-10 size-28 sm:size-32 rounded-3xl bg-gradient-to-br from-brand via-brand-2 to-accent text-white flex flex-col items-center justify-center p-3.5 shadow-lift border border-white/20 will-change-transform select-none"
      >
        <CoreIcon size={24} className="text-white mb-1.5 animate-pulse" />
        <span className="font-display font-extrabold text-[11px] sm:text-xs tracking-tight text-center leading-tight whitespace-pre-line">
          {config.coreLabel}
        </span>
        <div className="mt-1.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/15 text-[9px] font-bold uppercase tracking-wider backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {config.status}
        </div>
      </div>

      {/* 4 Diagonal Interactive Architectural Nodes - Zero Overlap */}
      {/* 1. Top-Left Node */}
      <div
        data-hero-node-t
        className="absolute top-[4%] left-[-4%] sm:left-[0%] glass px-3.5 py-2 rounded-xl text-xs font-semibold text-ink flex items-center gap-2.5 shadow-soft hover:shadow-lift transition-all float-y z-20 whitespace-nowrap"
      >
        <span className="size-6 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
          <IconT size={14} />
        </span>
        <div>
          <div className="text-[10px] uppercase font-bold text-brand-2 tracking-wider">
            {config.nodeT.tag}
          </div>
          <div className="text-xs font-bold text-ink">{config.nodeT.label}</div>
        </div>
      </div>

      {/* 2. Top-Right Node */}
      <div
        data-hero-node-r
        className="absolute top-[4%] right-[-4%] sm:right-[0%] glass px-3.5 py-2 rounded-xl text-xs font-semibold text-ink flex items-center gap-2.5 shadow-soft hover:shadow-lift transition-all float-y z-20 whitespace-nowrap"
        style={{ animationDelay: "1.2s" }}
      >
        <span className="size-6 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0">
          <IconR size={14} />
        </span>
        <div>
          <div className="text-[10px] uppercase font-bold text-accent tracking-wider">
            {config.nodeR.tag}
          </div>
          <div className="text-xs font-bold text-ink">{config.nodeR.label}</div>
        </div>
      </div>

      {/* 3. Bottom-Left Node */}
      <div
        data-hero-node-l
        className="absolute bottom-[4%] left-[-4%] sm:left-[0%] glass px-3.5 py-2 rounded-xl text-xs font-semibold text-ink flex items-center gap-2.5 shadow-soft hover:shadow-lift transition-all float-y z-20 whitespace-nowrap"
        style={{ animationDelay: "3.6s" }}
      >
        <span className="size-6 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
          <IconL size={14} />
        </span>
        <div>
          <div className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider">
            {config.nodeL.tag}
          </div>
          <div className="text-xs font-bold text-ink">{config.nodeL.label}</div>
        </div>
      </div>

      {/* 4. Bottom-Right Node */}
      <div
        data-hero-node-b
        className="absolute bottom-[4%] right-[-4%] sm:right-[0%] glass px-3.5 py-2 rounded-xl text-xs font-semibold text-ink flex items-center gap-2.5 shadow-soft hover:shadow-lift transition-all float-y z-20 whitespace-nowrap"
        style={{ animationDelay: "2.4s" }}
      >
        <span className="size-6 rounded-lg bg-brand-2/10 text-brand-2 flex items-center justify-center shrink-0">
          <IconB size={14} />
        </span>
        <div>
          <div className="text-[10px] uppercase font-bold text-brand-2 tracking-wider">
            {config.nodeB.tag}
          </div>
          <div className="text-xs font-bold text-ink">{config.nodeB.label}</div>
        </div>
      </div>
    </div>
  );
}

/* ───────── 1. SERVICES VISUAL: 4-Discipline Connected Architecture Bus ───────── */
function ServicesVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[480px] grid place-items-center">
      {/* SVG Connecting Bus Lines & Dynamic Diamond Mesh */}
      <div data-hero-ring className="absolute inset-0 will-change-transform">
        <svg
          viewBox="0 0 400 400"
          className="size-full drop-shadow-sm pointer-events-none"
          fill="none"
        >
          <defs>
            <linearGradient id="bus-glow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#02246A" stopOpacity=".45" />
              <stop offset="50%" stopColor="#1456D8" stopOpacity=".3" />
              <stop offset="100%" stopColor="#2E9BF5" stopOpacity=".45" />
            </linearGradient>
            <radialGradient id="bus-ambient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2E9BF5" stopOpacity=".12" />
              <stop offset="100%" stopColor="#02246A" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambient Glow */}
          <circle
            cx="200"
            cy="200"
            r="175"
            fill="url(#bus-ambient)"
            stroke="url(#bus-glow)"
            strokeWidth="1"
            strokeDasharray="6 8"
          />

          {/* Connected diamond perimeter bus */}
          <polygon
            points="200,40 360,200 200,360 40,200"
            stroke="url(#bus-glow)"
            strokeWidth="1.5"
            strokeDasharray="5 7"
          />

          {/* Concentric Telemetry Ring */}
          <circle
            cx="200"
            cy="200"
            r="115"
            stroke="url(#bus-glow)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />

          {/* Diagonal Corner Circuit Lines connecting cleanly to Center Core */}
          <line
            x1="110"
            y1="85"
            x2="165"
            y2="155"
            stroke="url(#bus-glow)"
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />
          <line
            x1="290"
            y1="85"
            x2="235"
            y2="155"
            stroke="url(#bus-glow)"
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />
          <line
            x1="110"
            y1="315"
            x2="165"
            y2="245"
            stroke="url(#bus-glow)"
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />
          <line
            x1="290"
            y1="315"
            x2="235"
            y2="245"
            stroke="url(#bus-glow)"
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />
        </svg>
      </div>

      {/* Center Core Engine - 100% Unobstructed Middle Clearance */}
      <div
        data-hero-core
        className="relative z-10 size-28 sm:size-32 rounded-3xl bg-gradient-to-br from-brand via-brand-2 to-accent text-white flex flex-col items-center justify-center p-3.5 shadow-lift border border-white/25 will-change-transform select-none"
      >
        <div className="size-8 rounded-full bg-white/15 flex items-center justify-center mb-1.5 shadow-inner">
          <Cpu size={18} className="text-white animate-pulse" />
        </div>
        <span className="font-display font-extrabold text-xs sm:text-[13px] tracking-tight text-center leading-snug">
          Nuvion
          <br />
          Core Engine
        </span>
      </div>

      {/* 4 Diagonal Discipline Nodes - Zero Overlap & Crystal-Clear Readability */}
      {/* 1. Top-Left: Digital Transformation */}
      <div
        data-hero-node-t
        className="absolute top-[4%] left-[-4%] sm:left-[0%] glass px-3.5 py-2 rounded-xl text-xs font-semibold text-ink flex items-center gap-2.5 shadow-soft hover:shadow-lift transition-all float-y z-20 whitespace-nowrap"
      >
        <span className="size-6 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
          <Zap size={14} />
        </span>
        <div>
          <div className="text-[10px] uppercase font-bold text-brand-2 tracking-wider">
            Discipline 01
          </div>
          <div className="text-xs font-bold text-ink">Automation &amp; ERP</div>
        </div>
      </div>

      {/* 2. Top-Right: Software Engineering */}
      <div
        data-hero-node-r
        className="absolute top-[4%] right-[-4%] sm:right-[0%] glass px-3.5 py-2 rounded-xl text-xs font-semibold text-ink flex items-center gap-2.5 shadow-soft hover:shadow-lift transition-all float-y z-20 whitespace-nowrap"
        style={{ animationDelay: "1.2s" }}
      >
        <span className="size-6 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0">
          <Code2 size={14} />
        </span>
        <div>
          <div className="text-[10px] uppercase font-bold text-accent tracking-wider">
            Discipline 02
          </div>
          <div className="text-xs font-bold text-ink">
            Scalable SaaS &amp; Code
          </div>
        </div>
      </div>

      {/* 3. Bottom-Left: Cybersecurity */}
      <div
        data-hero-node-l
        className="absolute bottom-[4%] left-[-4%] sm:left-[0%] glass px-3.5 py-2 rounded-xl text-xs font-semibold text-ink flex items-center gap-2.5 shadow-soft hover:shadow-lift transition-all float-y z-20 whitespace-nowrap"
        style={{ animationDelay: "3.6s" }}
      >
        <span className="size-6 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
          <ShieldCheck size={14} />
        </span>
        <div>
          <div className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider">
            Discipline 03
          </div>
          <div className="text-xs font-bold text-ink">Zero-Trust Security</div>
        </div>
      </div>

      {/* 4. Bottom-Right: Cloud Engineering */}
      <div
        data-hero-node-b
        className="absolute bottom-[4%] right-[-4%] sm:right-[0%] glass px-3.5 py-2 rounded-xl text-xs font-semibold text-ink flex items-center gap-2.5 shadow-soft hover:shadow-lift transition-all float-y z-20 whitespace-nowrap"
        style={{ animationDelay: "2.4s" }}
      >
        <span className="size-6 rounded-lg bg-brand-2/10 text-brand-2 flex items-center justify-center shrink-0">
          <Cloud size={14} />
        </span>
        <div>
          <div className="text-[10px] uppercase font-bold text-brand-2 tracking-wider">
            Discipline 04
          </div>
          <div className="text-xs font-bold text-ink">
            Cloud &amp; 99.99% Uptime
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────── 2. INDUSTRIES VISUAL: Multi-Sector Operational Radar ───────── */
function IndustriesVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] grid place-items-center">
      {/* SVG Rotating Radar Grid */}
      <div data-hero-ring className="absolute inset-0 will-change-transform">
        <svg
          viewBox="0 0 400 400"
          className="size-full drop-shadow-sm pointer-events-none"
          fill="none"
        >
          <defs>
            <radialGradient id="ind-radar" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2E9BF5" stopOpacity=".12" />
              <stop offset="100%" stopColor="#02246A" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="ind-sweep" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1456D8" stopOpacity=".4" />
              <stop offset="100%" stopColor="#2E9BF5" stopOpacity=".1" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="185"
            fill="url(#ind-radar)"
            stroke="url(#ind-sweep)"
            strokeWidth="1.2"
          />
          <circle
            cx="200"
            cy="200"
            r="135"
            stroke="url(#ind-sweep)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />
          <circle
            cx="200"
            cy="200"
            r="85"
            stroke="url(#ind-sweep)"
            strokeWidth="1"
          />
          <line
            x1="200"
            y1="15"
            x2="200"
            y2="385"
            stroke="#02246A"
            strokeOpacity=".2"
            strokeWidth="1"
          />
          <line
            x1="15"
            y1="200"
            x2="385"
            y2="200"
            stroke="#02246A"
            strokeOpacity=".2"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Center Radar Monogram */}
      <div
        data-hero-core
        className="relative z-10 size-32 rounded-full bg-white border border-brand/20 shadow-lift flex flex-col items-center justify-center p-2 will-change-transform select-none"
      >
        <Activity size={24} className="text-brand animate-pulse" />
        <span className="text-[12px] font-bold text-ink uppercase tracking-wider mt-2">
          Sector Radar
        </span>
      </div>

      {/* 4 Specialized Industry Nodes */}
      <div
        data-hero-node-t
        className="absolute top-[6%] left-[4%] glass px-3.5 py-2 rounded-xl text-xs font-semibold text-ink flex items-center gap-2 shadow-soft hover:shadow-lift transition-all float-y z-20 whitespace-nowrap"
      >
        <Factory size={15} className="text-brand shrink-0" />
        <div>
          <div className="text-[10px] text-ink-3 uppercase font-bold">
            Industrial
          </div>
          <div className="text-xs font-bold text-ink">Smart Manufacturing</div>
        </div>
      </div>

      <div
        data-hero-node-r
        className="absolute top-[8%] right-[2%] glass px-3.5 py-2 rounded-xl text-xs font-semibold text-ink flex items-center gap-2 shadow-soft hover:shadow-lift transition-all float-y z-20 whitespace-nowrap"
        style={{ animationDelay: "1.2s" }}
      >
        <HeartPulse size={15} className="text-rose shrink-0" />
        <div>
          <div className="text-[10px] text-ink-3 uppercase font-bold">
            Healthcare
          </div>
          <div className="text-xs font-bold text-ink">HIPAA Systems</div>
        </div>
      </div>

      <div
        data-hero-node-b
        className="absolute bottom-[8%] right-[4%] glass px-3.5 py-2 rounded-xl text-xs font-semibold text-ink flex items-center gap-2 shadow-soft hover:shadow-lift transition-all float-y z-20 whitespace-nowrap"
        style={{ animationDelay: "2.4s" }}
      >
        <Building2 size={15} className="text-accent shrink-0" />
        <div>
          <div className="text-[10px] text-ink-3 uppercase font-bold">
            Enterprise
          </div>
          <div className="text-xs font-bold text-ink">Multi-Tenant ERP</div>
        </div>
      </div>

      <div
        data-hero-node-l
        className="absolute bottom-[6%] left-[2%] glass px-3.5 py-2 rounded-xl text-xs font-semibold text-ink flex items-center gap-2 shadow-soft hover:shadow-lift transition-all float-y z-20 whitespace-nowrap"
        style={{ animationDelay: "3.6s" }}
      >
        <Rocket size={15} className="text-ok shrink-0" />
        <div>
          <div className="text-[10px] text-ink-3 uppercase font-bold">
            Startups
          </div>
          <div className="text-xs font-bold text-ink">High-Velocity SaaS</div>
        </div>
      </div>
    </div>
  );
}

/* ───────── 3. CASE STUDIES VISUAL: Connected Systems & Proven Outcomes Hub ───────── */
function CaseStudiesVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[480px] grid place-items-center">
      {/* SVG Connecting Topology Lines & Hexagonal Data Ring */}
      <div data-hero-ring className="absolute inset-0 will-change-transform">
        <svg
          viewBox="0 0 400 400"
          className="size-full drop-shadow-sm pointer-events-none"
          fill="none"
        >
          <defs>
            <linearGradient id="case-ring-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#02246A" stopOpacity=".35" />
              <stop offset="50%" stopColor="#1456D8" stopOpacity=".25" />
              <stop offset="100%" stopColor="#2E9BF5" stopOpacity=".35" />
            </linearGradient>
            <linearGradient id="case-glow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1456D8" />
              <stop offset="100%" stopColor="#2E9BF5" />
            </linearGradient>
          </defs>

          {/* Outer Rotating Diamond Geometry */}
          <polygon
            points="200,40 360,200 200,360 40,200"
            stroke="url(#case-ring-grad)"
            strokeWidth="1.5"
            strokeDasharray="5 7"
          />

          {/* Concentric Telemetry Orbit */}
          <circle
            cx="200"
            cy="200"
            r="115"
            stroke="url(#case-ring-grad)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />

          {/* Diagonal Corner Circuit Lines connecting to Center Core */}
          <line
            x1="110"
            y1="85"
            x2="165"
            y2="155"
            stroke="url(#case-ring-grad)"
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />
          <line
            x1="290"
            y1="85"
            x2="235"
            y2="155"
            stroke="url(#case-ring-grad)"
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />
          <line
            x1="110"
            y1="315"
            x2="165"
            y2="245"
            stroke="url(#case-ring-grad)"
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />
          <line
            x1="290"
            y1="315"
            x2="235"
            y2="245"
            stroke="url(#case-ring-grad)"
            strokeWidth="1.2"
            strokeDasharray="3 4"
          />
        </svg>
      </div>

      {/* Center Core: Verified Outcomes Engine - 100% Unobstructed with Wide Clearance */}
      <div
        data-hero-core
        className="relative z-10 size-28 sm:size-32 rounded-3xl bg-gradient-to-br from-brand via-brand-2 to-accent text-white flex flex-col items-center justify-center p-3.5 shadow-lift border border-white/25 will-change-transform select-none"
      >
        <div className="size-8 rounded-full bg-white/15 flex items-center justify-center mb-1.5 shadow-inner">
          <CheckCircle2 size={18} className="text-white animate-pulse" />
        </div>
        <span className="font-display font-extrabold text-xs sm:text-[13px] tracking-tight text-center leading-snug">
          Verified
          <br />
          Outcomes Hub
        </span>
      </div>

      {/* 4 Diagonal Case Study Nodes - Zero Center Overlap */}

      {/* 1. Top-Left Node: Sports Operations Platform */}
      <div
        data-hero-node-t
        className="absolute top-[4%] left-[-4%] sm:left-[0%] glass px-3.5 py-2 rounded-xl text-xs font-semibold text-ink flex items-center gap-2.5 shadow-soft hover:shadow-lift transition-all float-y z-20 whitespace-nowrap"
      >
        <span className="size-6 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
          <Trophy size={14} />
        </span>
        <div>
          <div className="text-[9px] font-mono uppercase font-bold text-brand-2 tracking-wider">
            Case 01 // Sports
          </div>
          <div className="text-xs font-bold text-ink">Operations Automation</div>
        </div>
      </div>

      {/* 2. Top-Right Node: Healthcare Data Platform */}
      <div
        data-hero-node-r
        className="absolute top-[4%] right-[-4%] sm:right-[0%] glass px-3.5 py-2 rounded-xl text-xs font-semibold text-ink flex items-center gap-2.5 shadow-soft hover:shadow-lift transition-all float-y z-20 whitespace-nowrap"
        style={{ animationDelay: "1.2s" }}
      >
        <span className="size-6 rounded-lg bg-rose/10 text-rose flex items-center justify-center shrink-0">
          <HeartPulse size={14} />
        </span>
        <div>
          <div className="text-[9px] font-mono uppercase font-bold text-rose tracking-wider">
            Case 02 // Healthcare
          </div>
          <div className="text-xs font-bold text-ink">GDPR Compliance Mesh</div>
        </div>
      </div>

      {/* 3. Bottom-Left Node: Enterprise Security Audit */}
      <div
        data-hero-node-l
        className="absolute bottom-[4%] left-[-4%] sm:left-[0%] glass px-3.5 py-2 rounded-xl text-xs font-semibold text-ink flex items-center gap-2.5 shadow-soft hover:shadow-lift transition-all float-y z-20 whitespace-nowrap"
        style={{ animationDelay: "3.6s" }}
      >
        <span className="size-6 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
          <ShieldCheck size={14} />
        </span>
        <div>
          <div className="text-[9px] font-mono uppercase font-bold text-emerald-600 tracking-wider">
            Verified Protocol
          </div>
          <div className="text-xs font-bold text-ink">Zero-Downtime</div>
        </div>
      </div>

      {/* 4. Bottom-Right Node: Manufacturing ERP */}
      <div
        data-hero-node-b
        className="absolute bottom-[4%] right-[-4%] sm:right-[0%] glass px-3.5 py-2 rounded-xl text-xs font-semibold text-ink flex items-center gap-2.5 shadow-soft hover:shadow-lift transition-all float-y z-20 whitespace-nowrap"
        style={{ animationDelay: "2.4s" }}
      >
        <span className="size-6 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0">
          <Factory size={14} />
        </span>
        <div>
          <div className="text-[9px] font-mono uppercase font-bold text-accent tracking-wider">
            Case 03 // Manufacturing
          </div>
          <div className="text-xs font-bold text-ink">Distributed ERP Core</div>
        </div>
      </div>
    </div>
  );
}

/* ───────── 4. ABOUT VISUAL: Global Engineering Network & Compass ───────── */
function AboutVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] grid place-items-center">
      {/* SVG Globe / Geometric Network Arcs */}
      <div data-hero-ring className="absolute inset-0 will-change-transform">
        <svg
          viewBox="0 0 400 400"
          className="size-full drop-shadow-sm pointer-events-none"
          fill="none"
        >
          <defs>
            <linearGradient id="globe-net" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#02246A" stopOpacity=".45" />
              <stop offset="100%" stopColor="#2E9BF5" stopOpacity=".25" />
            </linearGradient>
          </defs>
          {/* Latitude & Longitude Coordinate Arcs */}
          <circle
            cx="200"
            cy="200"
            r="180"
            stroke="url(#globe-net)"
            strokeWidth="1.2"
          />
          <ellipse
            cx="200"
            cy="200"
            rx="180"
            ry="85"
            stroke="url(#globe-net)"
            strokeWidth="1"
            strokeDasharray="5 7"
          />
          <ellipse
            cx="200"
            cy="200"
            rx="95"
            ry="180"
            stroke="url(#globe-net)"
            strokeWidth="1"
            strokeOpacity=".3"
          />
        </svg>
      </div>

      {/* Center Delivery HQ Core */}
      <div
        data-hero-core
        className="relative z-10 size-32 rounded-full bg-white border border-brand/20 shadow-lift flex flex-col items-center justify-center p-2 will-change-transform select-none"
      >
        <Globe size={26} className="text-brand animate-pulse mb-1" />
        <span className="font-display font-bold text-[11px] text-center leading-tight">
          Engineered in India
          <br />
          For the World
        </span>
      </div>

      {/* 3 Core Philosophy Pillars */}
      <div
        data-hero-node-t
        className="absolute top-[8%] left-[2%] glass px-3.5 py-2 rounded-xl text-xs font-semibold text-ink flex items-center gap-2 shadow-soft hover:shadow-lift transition-all float-y z-20 whitespace-nowrap"
      >
        <ShieldCheck size={15} className="text-brand shrink-0" />
        <div>
          <div className="text-[10px] text-ink-3 uppercase font-bold">
            Standard 01
          </div>
          <div className="text-xs font-bold text-ink">Secure by Design</div>
        </div>
      </div>

      <div
        data-hero-node-r
        className="absolute top-[14%] right-[0%] glass px-3.5 py-2 rounded-xl text-xs font-semibold text-ink flex items-center gap-2 shadow-soft hover:shadow-lift transition-all float-y z-20 whitespace-nowrap"
        style={{ animationDelay: "1.4s" }}
      >
        <Cpu size={15} className="text-accent shrink-0" />
        <div>
          <div className="text-[10px] text-ink-3 uppercase font-bold">
            Standard 02
          </div>
          <div className="text-xs font-bold text-ink">
            Scalable Architecture
          </div>
        </div>
      </div>

      <div
        data-hero-node-b
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-xl text-xs font-semibold text-ink flex items-center gap-2 shadow-soft hover:shadow-lift transition-all float-y z-20 whitespace-nowrap"
        style={{ animationDelay: "2.8s" }}
      >
        <CheckCircle2 size={15} className="text-ok shrink-0" />
        <div>
          <div className="text-[10px] text-ink-3 uppercase font-bold">
            Core Culture
          </div>
          <div className="text-xs font-bold text-ink">Outcomes Over Output</div>
        </div>
      </div>
    </div>
  );
}

/* ───────── 5. CONTACT VISUAL: Direct Technical Uplink & Real-Time Terminal ───────── */
function ContactVisual() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText("info@nuviontech.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[470px] mx-auto">
      {/* Background Orbital Signal Glow & SVG Telemetry Radii */}
      <div data-hero-ring className="absolute -inset-6 sm:-inset-10 will-change-transform pointer-events-none">
        <svg viewBox="0 0 500 500" className="size-full opacity-60 drop-shadow-sm" fill="none">
          <defs>
            <radialGradient id="contact-radial" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2E9BF5" stopOpacity=".22" />
              <stop offset="70%" stopColor="#1456D8" stopOpacity=".06" />
              <stop offset="100%" stopColor="#02246A" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="contact-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#02246A" stopOpacity=".35" />
              <stop offset="50%" stopColor="#2E9BF5" stopOpacity=".45" />
              <stop offset="100%" stopColor="#1456D8" stopOpacity=".15" />
            </linearGradient>
          </defs>

          {/* Radar Radii & Concentric Waves */}
          <circle cx="250" cy="250" r="230" stroke="url(#contact-line)" strokeWidth="1" strokeDasharray="6 8" />
          <circle cx="250" cy="250" r="170" stroke="url(#contact-line)" strokeWidth="1.2" />
          <circle cx="250" cy="250" r="105" fill="url(#contact-radial)" stroke="url(#contact-line)" strokeWidth="1" strokeDasharray="4 6" />

          {/* Coordinate Crosshairs */}
          <line x1="250" y1="20" x2="250" y2="480" stroke="url(#contact-line)" strokeWidth="1" strokeOpacity=".3" />
          <line x1="20" y1="250" x2="480" y2="250" stroke="url(#contact-line)" strokeWidth="1" strokeOpacity=".3" />

          {/* Tactical Corner Reticles */}
          <path d="M 50 70 L 50 50 L 70 50" stroke="#2E9BF5" strokeWidth="1.5" strokeOpacity=".6" />
          <path d="M 430 50 L 450 50 L 450 70" stroke="#2E9BF5" strokeWidth="1.5" strokeOpacity=".6" />
          <path d="M 50 430 L 50 450 L 70 450" stroke="#2E9BF5" strokeWidth="1.5" strokeOpacity=".6" />
          <path d="M 430 450 L 450 450 L 450 430" stroke="#2E9BF5" strokeWidth="1.5" strokeOpacity=".6" />
        </svg>
      </div>

      {/* Main Glass Console Card */}
      <div
        data-hero-hud
        className="glass rounded-3xl p-6 sm:p-7 border border-white/60 shadow-lift relative overflow-hidden backdrop-blur-xl bg-white/85 will-change-transform z-10"
      >
        {/* Top Console Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-line/70">
          <div className="flex items-center gap-2.5">
            <span className="relative flex size-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-3 bg-emerald-500" />
            </span>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-brand">
                DIRECT TECHNICAL UPLINK
              </div>
              <div className="text-xs font-bold text-ink">
                Senior Architects On-Deck
              </div>
            </div>
          </div>
          <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Radio size={12} className="animate-pulse" />
            LIVE // 24H SLA
          </div>
        </div>

        {/* Live Signal Visualizer Wave */}
        <div className="my-4 py-3 px-4 rounded-2xl bg-tint/60 border border-line/60 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-accent shrink-0 animate-pulse" />
            <div className="text-[11px] font-semibold text-ink-2">
              Bypassing Sales &amp; Gatekeepers
            </div>
          </div>
          {/* Animated Waveform Bars */}
          <div className="flex items-center gap-1">
            <span className="w-1 h-3 bg-brand rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-1 h-5 bg-brand-2 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-1 h-4 bg-accent rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            <span className="w-1 h-6 bg-brand-2 rounded-full animate-bounce" style={{ animationDelay: "450ms" }} />
            <span className="w-1 h-2 bg-brand rounded-full animate-bounce" style={{ animationDelay: "600ms" }} />
          </div>
        </div>

        {/* Direct Channel Metrics & Protocols */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3.5 rounded-2xl bg-surface border border-line/70 hover:border-brand/30 transition-colors">
            <div className="flex items-center gap-2 text-brand mb-1">
              <Clock size={15} />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                RESPONSE
              </span>
            </div>
            <div className="text-sm font-bold text-ink tracking-tight">
              &lt; 24 Hours
            </div>
            <div className="text-[10px] text-ink-3">Evaluation &amp; roadmap</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-surface border border-line/70 hover:border-brand/30 transition-colors">
            <div className="flex items-center gap-2 text-emerald-600 mb-1">
              <Lock size={15} />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                CONFIDENTIAL
              </span>
            </div>
            <div className="text-sm font-bold text-ink tracking-tight">
              Mutual NDA
            </div>
            <div className="text-[10px] text-ink-3">Standard IP protection</div>
          </div>
        </div>

        {/* Direct Email Action Capsule */}
        <div className="p-3 rounded-2xl bg-gradient-to-r from-brand/5 via-accent/5 to-brand-2/5 border border-line flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 overflow-hidden pl-1">
            <Mail size={16} className="text-brand shrink-0" />
            <span className="text-xs font-mono font-bold text-ink truncate">
              info@nuviontech.com
            </span>
          </div>
          <button
            type="button"
            onClick={copyEmail}
            className="px-3 py-1.5 rounded-xl bg-white text-ink text-xs font-semibold shadow-soft hover:shadow-lift border border-line/80 flex items-center gap-1.5 transition-all shrink-0 active:scale-95 cursor-pointer"
            title="Copy email address"
          >
            {copied ? (
              <>
                <Check size={12} className="text-ok" />
                <span className="text-ok font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={12} className="text-ink-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Floating Tactical Badges around Terminal */}
      {/* 1. Top-Right Floating Satellite Badge */}
      <div
        data-hero-node-r
        className="absolute -top-3.5 -right-2 sm:-right-4 glass px-3.5 py-1.5 rounded-xl text-xs font-semibold text-ink shadow-soft flex items-center gap-2 border border-white/60 float-y z-20 whitespace-nowrap"
      >
        <span className="size-2 rounded-full bg-accent animate-pulse" />
        <span className="text-[11px] font-bold text-ink">Zero Sales Pitch</span>
      </div>

      {/* 2. Bottom-Left Floating Satellite Badge */}
      <div
        data-hero-node-l
        className="absolute -bottom-3.5 -left-2 sm:-left-4 glass px-3.5 py-1.5 rounded-xl text-xs font-semibold text-ink shadow-soft flex items-center gap-2 border border-white/60 float-y z-20 whitespace-nowrap"
        style={{ animationDelay: "1.8s" }}
      >
        <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
        <span className="text-[11px] font-bold text-ink">Enterprise IP Guardrails</span>
      </div>
    </div>
  );
}

/* ───────── 6. DEFAULT / FALLBACK VISUAL ───────── */
function DefaultVisual() {
  return <ServicesVisual />;
}

/**
 * PAGE HERO:
 * Dynamic, attractive inner-page header with domain-specific visual graphics.
 * Automatically adapts its visual component to match the page topic.
 */
export default function PageHero({
  eyebrow,
  title,
  accent,
  type,
  service,
  visual,
  children,
}) {
  const root = useRef(null);

  // Auto-resolve visual based on explicit type, service object, or eyebrow string
  const resolveVisual = () => {
    if (visual) return visual;
    const key = (type || eyebrow || "").toLowerCase();
    if (key.includes("service-detail") || service)
      return <ServiceDetailVisual service={service} />;
    if (key.includes("service")) return <ServicesVisual />;
    if (key.includes("industr")) return <IndustriesVisual />;
    if (key.includes("case")) return <CaseStudiesVisual />;
    if (key.includes("about")) return <AboutVisual />;
    if (key.includes("contact") || key.includes("direct") || key.includes("engage"))
      return <ContactVisual />;
    return <DefaultVisual />;
  };

  useScene(root, ({ wide }) => {
    const q = (s) => root.current?.querySelectorAll(s);
    if (!q) return;

    // Load entrance: text cascades in, visual hub scales up
    gsap.fromTo(
      q("[data-hero-text]"),
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.07,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      q("[data-hero-hub]"),
      { opacity: 0, scale: 0.94, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      },
    );

    // Scroll-scrubbed timeline: dynamic elements move with scroll down and rewind on scroll up
    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: root.current,
        start: "top top",
        end: wide ? "+=80%" : "bottom top",
        scrub: 1,
      },
    });

    tl.to(q("[data-hero-copy]"), { yPercent: -12, opacity: 0.25 }, 0);

    // If rotating rings exist
    if (q("[data-hero-ring]")[0]) {
      tl.to(q("[data-hero-ring]"), { rotate: 50 }, 0);
    }
    // If center core exists
    if (q("[data-hero-core]")[0]) {
      tl.to(q("[data-hero-core]"), { scale: 0.93, y: -14 }, 0);
    }
    // If dashboard HUD exists
    if (q("[data-hero-hud]")[0]) {
      tl.to(q("[data-hero-hud]"), { y: -20, scale: 0.97, rotateX: 6 }, 0);
    }
    // If chart curve exists
    if (q("[data-hero-line]")[0]) {
      tl.to(q("[data-hero-line]"), { strokeDashoffset: -40 }, 0);
    }
    // Parallax floating badges & nodes
    if (q("[data-hero-badge]").length) {
      tl.to(q("[data-hero-badge]"), { y: -28, opacity: 0.4, stagger: 0.04 }, 0);
    }
    if (q("[data-hero-node-t]").length) {
      tl.to(q("[data-hero-node-t]"), { y: -20 }, 0);
    }
    if (q("[data-hero-node-b]").length) {
      tl.to(q("[data-hero-node-b]"), { y: 20 }, 0);
    }
    if (q("[data-hero-node-l]").length) {
      tl.to(q("[data-hero-node-l]"), { x: -20 }, 0);
    }
    if (q("[data-hero-node-r]").length) {
      tl.to(q("[data-hero-node-r]"), { x: 20 }, 0);
    }
  });

  return (
    <section
      ref={root}
      className="relative pt-32 sm:pt-40 lg:pt-36 pb-14 sm:pb-20 overflow-hidden"
      aria-labelledby="page-title"
    >
      {/* Ambient background lighting */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-brand-2/15 via-accent/10 to-transparent blur-3xl rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 right-10 w-[450px] h-[300px] bg-gradient-to-bl from-accent/12 via-brand/10 to-transparent blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="wrap relative z-10 grid items-center gap-10 lg:gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left Column: Narrative & Trust Signals */}
        <div data-hero-copy className="max-w-2xl lg:max-w-none">
          <div data-hero-text>
            <span className="eyebrow shadow-sm">{eyebrow}</span>
          </div>

          <h1
            id="page-title"
            data-hero-text
            className="font-display font-extrabold text-[2.4rem] sm:text-[3.25rem] lg:text-[3.5rem] xl:text-[3.8rem] leading-[1.08] tracking-tight mt-5 text-ink"
          >
            {title}{" "}
            {accent && (
              <span className="grad-text block sm:inline">{accent}</span>
            )}
          </h1>

          {children && (
            <p
              data-hero-text
              className="lead mt-5 max-w-xl text-ink-2 leading-relaxed"
            >
              {children}
            </p>
          )}

          {/* Verification Badges */}
          <div
            data-hero-text
            className="mt-8 pt-6 border-t border-line/60 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs font-semibold text-ink-2"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-ok" /> Enterprise
              Architecture
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-brand" /> Zero-Trust
              Security
            </span>
            <span className="flex items-center gap-2">
              <Activity size={15} className="text-brand-2" /> 99.99% Service
              Availability
            </span>
          </div>
        </div>

        {/* Right Column: Unique Domain-Specific Visual Element */}
        <div data-hero-hub className="relative grid place-items-center w-full">
          {resolveVisual()}
        </div>
      </div>
    </section>
  );
}
