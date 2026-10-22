import { useState } from "react";
import {
  CheckCircle2,
  Mail,
  MapPin,
  Send,
  Clock,
  ShieldCheck,
  ExternalLink,
  Copy,
  Check,
  Navigation,
  Building2,
  Sparkles,
  PhoneCall,
  Calendar,
} from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

const btnChamfer =
  "polygon(4px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 10px 100%, 0 calc(100% - 10px), 0 4px)";

const MAP_URL = "https://maps.app.goo.gl/QJTdKJJxfccz1j1a9";
const OFFICE_ADDRESS =
  "East-616, Sidhdhraj Z Square, Near The Landmark, Kudasan, Gandhinagar, Gujarat, India – 382419";
const PHONE_NUMBER = "+91 8799523738";
const EMAIL_ADDRESS = "info@nuviontech.com";
const LINKEDIN_URL = "https://www.linkedin.com/company/nuvion-technologies-pvt-ltd/";
const INSTAGRAM_URL = "https://www.instagram.com/nuvion.technologies/";

const topics = [
  "Digital Transformation",
  "Software Engineering",
  "Cybersecurity & Zero-Trust",
  "Cloud & DevOps",
  "Architecture Audit",
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyAddress = () => {
    navigator.clipboard?.writeText(OFFICE_ADDRESS);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2200);
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText("info@nuviontech.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const submit = (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    const body = `Name: ${d.first} ${d.last}\nCompany: ${d.company || "N/A"}\nEmail: ${d.email}\nPhone: ${d.phone || "N/A"}\nTopic: ${selectedTopic}\nTimeline: ${d.timeline || "Flexible"}\n\nProject Overview:\n${d.message}`;
    window.location.href = `mailto:info@nuviontech.com?subject=${encodeURIComponent(
      "Architecture Enquiry: " + selectedTopic
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        type="contact"
        eyebrow="Direct Engineering Engagement"
        title="Let's engineer"
        accent="what comes next."
      >
        Tell us about your operations, bottlenecks, and scale ambitions. Speak directly with senior architects — no sales gatekeepers, no pressure.
      </PageHero>

      {/* 1. Main Inquiry & Direct Protocols */}
      <section className="pb-16 sm:pb-20">
        <div className="wrap grid gap-8 lg:grid-cols-[1.25fr_0.75fr] items-start">
          {/* Main Inquiry Form */}
          <Reveal className="card p-7 sm:p-10 lg:p-11 bg-white/90 backdrop-blur-md border border-line shadow-card rounded-3xl relative overflow-hidden">
            {/* Subtle top ambient glow */}
            <div
              className="absolute -top-24 -left-24 size-48 rounded-full bg-brand/10 blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 mb-8 pb-6 border-b border-line/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand block mb-1">
                  START AN ARCHITECTURE REVIEW
                </span>
                <h2 className="font-display font-bold text-2xl text-ink tracking-tight">
                  Schedule Technical Review
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-semibold self-start sm:self-auto">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                Response within 24h
              </div>
            </div>

            {sent ? (
              <div className="relative z-10 py-12 text-center">
                <div className="size-16 rounded-2xl bg-ok/10 text-ok flex items-center justify-center mx-auto mb-5 shadow-xs">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-display font-bold text-2xl text-ink">
                  Draft Generated Successfully
                </h3>
                <p className="mt-3 text-sm text-ink-2 max-w-md mx-auto leading-relaxed">
                  Your default email client has been opened with your structured project brief. Send it directly to connect with our engineering team, or email us directly at{" "}
                  <a
                    href="mailto:info@nuviontech.com"
                    className="text-brand font-semibold hover:underline"
                  >
                    info@nuviontech.com
                  </a>
                  .
                </p>
                <div className="mt-8 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="px-6 py-2.5 text-xs font-semibold text-ink bg-surface hover:bg-white border border-line rounded-lg transition-all"
                  >
                    Edit brief
                  </button>
                  <a
                    href="mailto:info@nuviontech.com"
                    className="px-6 py-2.5 text-xs font-bold text-white bg-[#02246A] hover:bg-[#1456D8] rounded-lg shadow-sm transition-all"
                    style={{ clipPath: btnChamfer }}
                  >
                    Open Mailer Again
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="relative z-10 grid gap-6">
                {/* Topic Pill Selector */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-ink block mb-2.5">
                    Select Engineering Domain
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setSelectedTopic(t)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          selectedTopic === t
                            ? "bg-[#02246A] text-white shadow-xs"
                            : "bg-surface hover:bg-white text-ink-2 border border-line/70 hover:border-brand/30"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Names */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-ink">
                    First Name
                    <input
                      name="first"
                      required
                      className="input rounded-xl bg-white/80"
                      placeholder="First Name"
                      autoComplete="given-name"
                    />
                  </label>
                  <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-ink">
                    Last Name
                    <input
                      name="last"
                      required
                      className="input rounded-xl bg-white/80"
                      placeholder="Last Name"
                      autoComplete="family-name"
                    />
                  </label>
                </div>

                {/* Work Email & Mobile Number */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-ink">
                    Work Email
                    <input
                      name="email"
                      type="email"
                      required
                      className="input rounded-xl bg-white/80"
                      placeholder="Enter your mail id here..."
                      autoComplete="email"
                    />
                  </label>
                  <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-ink">
                    Mobile Number
                    <input
                      name="phone"
                      type="tel"
                      required
                      className="input rounded-xl bg-white/80"
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                    />
                  </label>
                </div>

                {/* Company / Organization */}
                <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-ink">
                  Company / Organization
                  <input
                    name="company"
                    className="input rounded-xl bg-white/80"
                    placeholder="Company Name"
                    autoComplete="organization"
                  />
                </label>

                {/* Project Details */}
                <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-ink">
                  Current Tech Stack &amp; Bottlenecks
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="input rounded-xl bg-white/80 resize-y leading-relaxed"
                    placeholder="Briefly describe your existing platforms, key operational pain points, and scale objectives…"
                  />
                </label>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-[#02246A] hover:bg-[#1456D8] transition-all duration-200 active:scale-95 group shadow-soft cursor-pointer shrink-0"
                    style={{ clipPath: btnChamfer }}
                  >
                    <span>Submit technical enquiry</span>
                    <Send
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </button>

                  <div className="flex items-center gap-2 text-[11px] text-ink-3">
                    <ShieldCheck size={14} className="text-brand shrink-0" />
                    <span>Protected under mutual NDA terms</span>
                  </div>
                </div>
              </form>
            )}
          </Reveal>

          {/* Right Column: Direct Channels & SLA Confidence */}
          <div className="grid gap-4 sm:gap-5 content-start">
            {/* Direct Email Card */}
            <Reveal className="card p-6 sm:p-7 bg-white/90 backdrop-blur-md border border-line shadow-card rounded-2xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="size-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center shadow-xs">
                  <Mail size={20} />
                </span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-surface hover:bg-white border border-line text-ink-2 transition-all cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={12} className="text-ok" />
                      <span className="text-ok font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="font-display font-bold text-lg text-ink mt-4">
                Direct Engineering Desk
              </h3>
              <p className="text-xs text-ink-3 mt-1 leading-relaxed">
                Connect directly with technical decision-makers without gatekeepers.
              </p>
              <a
                href="mailto:info@nuviontech.com"
                className="mt-3.5 inline-flex items-center gap-1.5 text-brand font-bold text-sm hover:underline"
              >
                <span>info@nuviontech.com</span>
                <ExternalLink size={13} />
              </a>
            </Reveal>

            {/* Direct Phone / Call Card */}
            <Reveal className="card p-6 sm:p-7 bg-white/90 backdrop-blur-md border border-line shadow-card rounded-2xl">
              <div className="flex items-center justify-between">
                <span className="size-11 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shadow-xs">
                  <PhoneCall size={20} />
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600">
                  DIRECT LINE
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-ink mt-4">
                Phone &amp; WhatsApp
              </h3>
              <p className="text-xs text-ink-3 mt-1 leading-relaxed">
                Direct phone consultation with our technology advisors.
              </p>
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                className="mt-3.5 inline-flex items-center gap-1.5 text-brand font-bold text-sm hover:underline"
              >
                <span>{PHONE_NUMBER}</span>
                <ExternalLink size={13} />
              </a>
            </Reveal>

            {/* SLA Protocol */}
            <Reveal className="card p-6 sm:p-7 bg-white/90 backdrop-blur-md border border-line shadow-card rounded-2xl">
              <div className="flex items-center justify-between">
                <span className="size-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center shadow-xs">
                  <Clock size={20} />
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600">
                  GUARANTEED
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-ink mt-4">
                24-Hour Review Service
              </h3>
              <p className="text-xs text-ink-2 mt-1.5 leading-relaxed">
                Every request receives a qualified architectural assessment from an engineering lead within one business day.
              </p>
            </Reveal>

            {/* Quick HQ Summary Card */}
            <Reveal className="card p-6 sm:p-7 bg-gradient-to-br from-white via-surface to-tint/30 border border-brand/20 shadow-card rounded-2xl">
              <div className="flex items-center justify-between">
                <span className="size-11 rounded-xl bg-[#02246A] text-white flex items-center justify-center shadow-xs">
                  <MapPin size={20} />
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-surface border border-line text-ink-3">
                  REGISTERED OFFICE
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-ink mt-4">
                Nuvion Technologies Pvt. Ltd.
              </h3>
              <p className="text-xs text-ink-2 mt-1.5 leading-relaxed">
                East-616, Sidhdhraj Z Square, Near The Landmark, Kudasan, Gandhinagar, Gujarat, India – 382419
              </p>
              <a
                href="#hq-location"
                className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline"
              >
                <span>View interactive office map</span>
                <Navigation size={12} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Interactive Office Location & Live Google Map Section */}
      <section id="hq-location" className="pb-24 scroll-mt-24 relative overflow-hidden">
        <div className="wrap">
          {/* Section Heading */}
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow shadow-sm">GLOBAL HEADQUARTERS</span>
            <h2 className="h-section mt-4">
              Visit our <span className="grad-text">Engineering Lab.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink-2">
              Located in Gandhinagar's technology corridor. Schedule an on-site architecture session or reach out for executive engagements.
            </p>
          </Reveal>

          {/* Interactive Map Container */}
          <Reveal className="relative overflow-hidden rounded-3xl border border-line shadow-card bg-white/90 backdrop-blur-md">
            {/* The Google Maps Embed */}
            <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] bg-surface">
              <iframe
                title="Nuvion Technologies Office Location"
                src="https://maps.google.com/maps?q=23.1756223,72.6298777&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[15%] contrast-[1.04] hover:grayscale-0 transition-all duration-500"
              />

              {/* Floating Glassmorphism Office Information Card */}
              <div className="p-4 sm:p-0 sm:absolute sm:bottom-6 sm:left-6 z-10 w-full sm:max-w-md">
                <div className="bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-line/90 shadow-lift">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-brand/10 text-brand">
                      <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      NUVION TECHNOLOGIES ®
                    </span>
                    <span className="text-[10px] font-mono text-ink-3 font-semibold">
                      GANDHINAGAR
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-ink">
                    Nuvion Technologies Pvt. Ltd.
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-ink-2 leading-relaxed">
                    East-616, Sidhdhraj Z Square, Near The Landmark, Kudasan, Gandhinagar, Gujarat, India – 382419
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-brand">
                    <PhoneCall size={13} className="text-emerald-600" />
                    <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`} className="hover:underline">
                      {PHONE_NUMBER}
                    </a>
                    <span className="text-ink-3">•</span>
                    <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:underline">
                      {EMAIL_ADDRESS}
                    </a>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-line/60 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-ink-3 tracking-wider block">
                        Office Schedule
                      </span>
                      <span className="font-semibold text-ink text-[11px] sm:text-xs">
                        Mon – Sat: 9:30 AM – 6:30 PM IST
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-ink-3 tracking-wider block">
                        Airport Transit
                      </span>
                      <span className="font-semibold text-ink text-[11px] sm:text-xs">
                        ~20 min from AMD Airport
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex flex-wrap items-center gap-2.5">
                    <a
                      href={MAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#02246A] hover:bg-[#1456D8] transition-all duration-200 shadow-sm active:scale-95 group/btn"
                      style={{ clipPath: btnChamfer }}
                    >
                      <Navigation size={13} />
                      <span>Open in Google Maps</span>
                      <ExternalLink
                        size={12}
                        className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
                      />
                    </a>

                    <button
                      type="button"
                      onClick={copyAddress}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-ink-2 bg-surface hover:bg-white border border-line rounded-lg transition-all cursor-pointer"
                    >
                      {copiedAddress ? (
                        <>
                          <Check size={13} className="text-ok" />
                          <span className="text-ok font-bold">Address Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
