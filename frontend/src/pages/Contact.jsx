import { useState, useRef } from "react";
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
import Recaptcha from "../components/Recaptcha";

const btnChamfer =
  "polygon(4px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 4px), calc(100% - 4px) 100%, 10px 100%, 0 calc(100% - 10px), 0 4px)";

const MAP_URL = "https://maps.app.goo.gl/QJTdKJJxfccz1j1a9";
const OFFICE_ADDRESS =
  "East-616, Sidhdhraj Z Square, Near The Landmark, Kudasan, Gandhinagar, Gujarat, India – 382419";
const PHONE_NUMBER = "+91 9537531054";
const EMAIL_ADDRESS = "info@nuviontech.com";
const LINKEDIN_URL =
  "https://www.linkedin.com/company/nuvion-technologies-pvt-ltd/";
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
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [deliveredRecipient, setDeliveredRecipient] = useState("");
  const [formValues, setFormValues] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg("");
  };

  const isFormComplete =
    formValues.first.trim() !== "" &&
    formValues.last.trim() !== "" &&
    formValues.email.trim() !== "" &&
    formValues.phone.trim() !== "" &&
    formValues.company.trim() !== "" &&
    formValues.message.trim() !== "";

  const isRecaptchaVerified = Boolean(recaptchaToken);
  const isSubmitDisabled = !isFormComplete || !isRecaptchaVerified || loading;

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

  const submit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!isFormComplete) {
      setErrorMsg("Please fill in all required fields before submitting.");
      return;
    }

    if (!recaptchaToken) {
      setErrorMsg(
        "Please complete the Google reCAPTCHA verification to prevent automated spam.",
      );
      return;
    }

    const payload = {
      first: formValues.first.trim(),
      last: formValues.last.trim(),
      email: formValues.email.trim(),
      phone: formValues.phone.trim(),
      company: formValues.company.trim(),
      topic: selectedTopic,
      timeline: "Flexible",
      message: formValues.message.trim(),
      recaptchaToken,
    };

    setLoading(true);

    try {
      const baseUrl = import.meta.env.VITE_API_URL || "";
      const apiEndpoint = baseUrl
        ? `${baseUrl.replace(/\/+$/, "")}/api/contact`
        : "/api/contact";

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data;
      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        data = await response.json();
      } else {
        await response.text();
        throw new Error(
          response.status === 404 || response.status === 405
            ? "Backend mail service is not reachable at this URL. GitHub Pages cannot run Node.js backend. Please verify your backend server is deployed and VITE_API_URL is set."
            : `Server returned an unexpected response (${response.status}). Please try again or email info@nuviontech.com.`
        );
      }

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Failed to deliver inquiry. Please try again.",
        );
      }

      setDeliveredRecipient(data.recipient || "info@nuviontech.com");
      setSent(true);
    } catch (err) {
      console.error("Contact submission error:", err);
      setErrorMsg(
        err.message ||
          "Network error. Please try again or email info@nuviontech.com directly.",
      );
      recaptchaRef.current?.reset();
      setRecaptchaToken("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        type="contact"
        eyebrow="Direct Engineering Engagement"
        title="Let's engineer"
        accent="what comes next."
      >
        Tell us about your operations, bottlenecks, and scale ambitions. Speak
        directly with senior architects — no sales gatekeepers, no pressure.
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
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand block mb-2">
                  INQUIRY TRANSMITTED SUCCESSFULLY
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink">
                  Delivered to {deliveredRecipient || "our team"}
                </h3>
                <p className="mt-3.5 text-sm sm:text-base text-ink-2 max-w-lg mx-auto leading-relaxed">
                  Thank you for getting in touch. Your technical inquiry and
                  project details have been successfully delivered to our core
                  architecture inbox at{" "}
                  <strong className="text-ink">{deliveredRecipient || "info@nuviontech.com"}</strong>.
                </p>
                <div className="mt-5 p-3.5 rounded-xl bg-surface border border-line text-xs text-ink-2 max-w-md mx-auto flex items-center justify-center gap-2">
                  <Clock size={15} className="text-brand shrink-0" />
                  <span>
                    Our engineering leads will review your specs and respond
                    within <strong>24 business hours</strong>.
                  </span>
                </div>
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setRecaptchaToken("");
                      setErrorMsg("");
                      setFormValues({
                        first: "",
                        last: "",
                        email: "",
                        phone: "",
                        company: "",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-[#02246A] hover:bg-[#1456D8] rounded-xl shadow-soft transition-all duration-200 active:scale-95 cursor-pointer"
                    style={{ clipPath: btnChamfer }}
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="relative z-10 grid gap-6">
                {/* Topic Pill Selector */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-ink block mb-2.5">
                    Select Engineering Domain <span className="text-rose-500">*</span>
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
                    <span>
                      First Name <span className="text-rose-500">*</span>
                    </span>
                    <input
                      name="first"
                      value={formValues.first}
                      onChange={handleChange}
                      required
                      className="input rounded-xl bg-white/80"
                      placeholder="First Name"
                      autoComplete="given-name"
                    />
                  </label>
                  <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-ink">
                    <span>
                      Last Name <span className="text-rose-500">*</span>
                    </span>
                    <input
                      name="last"
                      value={formValues.last}
                      onChange={handleChange}
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
                    <span>
                      Work Email <span className="text-rose-500">*</span>
                    </span>
                    <input
                      name="email"
                      type="email"
                      value={formValues.email}
                      onChange={handleChange}
                      required
                      className="input rounded-xl bg-white/80"
                      placeholder="Enter your mail id here..."
                      autoComplete="email"
                    />
                  </label>
                  <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-ink">
                    <span>
                      Mobile Number <span className="text-rose-500">*</span>
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      value={formValues.phone}
                      onChange={handleChange}
                      required
                      className="input rounded-xl bg-white/80"
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                    />
                  </label>
                </div>

                {/* Company / Organization */}
                <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-ink">
                  <span>
                    Company / Organization <span className="text-rose-500">*</span>
                  </span>
                  <input
                    name="company"
                    value={formValues.company}
                    onChange={handleChange}
                    required
                    className="input rounded-xl bg-white/80"
                    placeholder="Company Name"
                    autoComplete="organization"
                  />
                </label>

                {/* Project Details */}
                <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-ink">
                  <span>
                    Current Tech Stack &amp; Bottlenecks <span className="text-rose-500">*</span>
                  </span>
                  <textarea
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="input rounded-xl bg-white/80 resize-y leading-relaxed"
                    placeholder="Briefly describe your existing platforms, key operational pain points, and scale objectives…"
                  />
                </label>

                {/* Google reCAPTCHA Anti-Spam Security */}
                <div className="pt-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-ink flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-brand" />
                      <span>
                        Spam Protection &amp; Human Verification <span className="text-rose-500">*</span>
                      </span>
                    </label>
                    <span className="text-[10px] text-ink-3 font-mono">
                      Google reCAPTCHA v2
                    </span>
                  </div>
                  <Recaptcha
                    ref={recaptchaRef}
                    onChange={(token) => {
                      setRecaptchaToken(token);
                      if (errorMsg) setErrorMsg("");
                    }}
                    onExpired={() => {
                      setRecaptchaToken("");
                    }}
                    onError={() => {
                      setErrorMsg(
                        "reCAPTCHA service error. Please refresh and try again.",
                      );
                    }}
                  />
                </div>

                {/* Real-Time Form Completion Feedback */}
                {!isFormComplete ? (
                  <div className="flex items-center gap-2 text-[11px] text-amber-600 bg-amber-500/10 border border-amber-500/20 px-3.5 py-2 rounded-xl font-medium">
                    <span className="size-1.5 rounded-full bg-amber-500 animate-pulse shrink-0" />
                    <span>Please complete all required fields marked with <strong className="text-rose-500">*</strong> to enable the submit button.</span>
                  </div>
                ) : !isRecaptchaVerified ? (
                  <div className="flex items-center gap-2 text-[11px] text-brand bg-brand/10 border border-brand/20 px-3.5 py-2 rounded-xl font-medium">
                    <span className="size-1.5 rounded-full bg-brand animate-pulse shrink-0" />
                    <span>Please check the Google reCAPTCHA box above to verify you are human and enable submission.</span>
                  </div>
                ) : null}

                {/* Error Message Display */}
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs font-semibold flex items-center gap-2">
                    <span className="size-2 rounded-full bg-rose-500 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitDisabled}
                    className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white transition-all duration-200 group shadow-soft shrink-0 ${
                      isSubmitDisabled
                        ? "bg-slate-400 opacity-50 cursor-not-allowed pointer-events-none"
                        : "bg-[#02246A] hover:bg-[#1456D8] active:scale-95 cursor-pointer shadow-lift"
                    }`}
                    style={{ clipPath: btnChamfer }}
                  >
                    {loading ? (
                      <>
                        <span className="size-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>Transmitting to info@nuviontech.com...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit technical enquiry</span>
                        <Send
                          size={15}
                          className="transition-transform duration-200 group-hover:translate-x-0.5"
                        />
                      </>
                    )}
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
                Connect directly with technical decision-makers without
                gatekeepers.
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
                target="_blank"
                rel="noopener noreferrer"
                href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent("Hi, I would like to inquire about your services.")}`}
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
                Every request receives a qualified architectural assessment from
                an engineering lead within one business day.
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
                East-616, Sidhdhraj Z Square, Near The Landmark, Kudasan,
                Gandhinagar, Gujarat, India – 382419
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
      <section
        id="hq-location"
        className="pb-24 scroll-mt-24 relative overflow-hidden"
      >
        <div className="wrap">
          {/* Section Heading */}
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow shadow-sm">GLOBAL HEADQUARTERS</span>
            <h2 className="h-section mt-4">
              Visit our <span className="grad-text">Engineering Lab.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink-2">
              Located in Gandhinagar's technology corridor. Schedule an on-site
              architecture session or reach out for executive engagements.
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
                    East-616, Sidhdhraj Z Square, Near The Landmark, Kudasan,
                    Gandhinagar, Gujarat, India – 382419
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-brand">
                    <PhoneCall size={13} className="text-emerald-600" />
                    <a
                      href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                      className="hover:underline"
                    >
                      {PHONE_NUMBER}
                    </a>
                    <span className="text-ink-3">•</span>
                    <a
                      href={`mailto:${EMAIL_ADDRESS}`}
                      className="hover:underline"
                    >
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
                          <span className="text-ok font-bold">
                            Address Copied
                          </span>
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
