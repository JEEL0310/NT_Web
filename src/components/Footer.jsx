import { Link } from "react-router-dom";
import { ArrowUp, ShieldCheck, Lock, Cloud, MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { services } from "../data/services";
import { navLinks } from "../data/navigation";

export default function Footer() {
  const toTop = () =>
    window.__lenis ? window.__lenis.scrollTo(0, { duration: 1.4 }) : window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative pt-8 pb-8">
      <div className="wrap">
        <div className="grid gap-12 md:gap-8 md:grid-cols-12 py-12 border-t border-line">
          {/* Company Brand & Purpose */}
          <div className="md:col-span-5">
            <img src="/New_Logos/MAIN_LOGO_TP.png" alt="Nuvion Technologies Pvt. Ltd." className="h-9 w-auto mb-4 object-contain" />
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand mb-2">
              Nuvion Technologies Pvt. Ltd.
            </div>
            <p className="max-w-md text-sm text-ink-2 leading-relaxed">
              Technology should enable growth — and cybersecurity should protect that growth. Custom ERP systems, enterprise automation, and resilient software engineered for scale.
            </p>

            {/* Direct Contact Snapshot */}
            <div className="mt-5 space-y-2 text-xs text-ink-2">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-brand shrink-0 mt-0.5" />
                <span>East-616, Sidhdhraj Z Square, Near The Landmark, Kudasan, Gandhinagar, Gujarat, India – 382419</span>
              </div>
              <div className="flex items-center gap-4 pt-1 font-semibold text-ink">
                <a href="tel:+918799523738" className="flex items-center gap-1.5 hover:text-brand transition-colors">
                  <Phone size={13} className="text-emerald-600" /> +91 8799523738
                </a>
                <span className="text-line">•</span>
                <a href="mailto:info@nuviontech.com" className="flex items-center gap-1.5 hover:text-brand transition-colors">
                  <Mail size={13} className="text-brand" /> info@nuviontech.com
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium">
              {[[ShieldCheck, "Security by Design"], [Lock, "OWASP aligned"], [Cloud, "Cloud native"]].map(([I, t]) => (
                <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface border border-line px-3 py-1.5 text-ink-2">
                  <I size={14} className="text-brand" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <nav aria-label="Company" className="md:col-span-3">
            <h4 className="text-sm uppercase tracking-widest text-ink-3 font-sans font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-ink-2 hover:text-brand transition-colors text-sm">{l.label}</Link>
                </li>
              ))}
            </ul>

            <h4 className="text-sm uppercase tracking-widest text-ink-3 font-sans font-semibold mt-8 mb-3">Connect</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <a
                  href="https://www.linkedin.com/company/nuvion-technologies-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-ink-2 hover:text-brand transition-colors"
                >
                  <span>LinkedIn</span> <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nuvion.technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-ink-2 hover:text-brand transition-colors"
                >
                  <span>Instagram (@nuvion.technologies)</span> <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </nav>

          {/* Services Links */}
          <nav aria-label="Services" className="md:col-span-4">
            <h4 className="text-sm uppercase tracking-widest text-ink-3 font-sans font-semibold mb-4">Core Disciplines</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-ink-2 hover:text-brand transition-colors text-sm font-medium">{s.shortTitle}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 rounded-xl bg-surface border border-line text-xs text-ink-2">
              <div className="font-bold text-ink mb-1">Target Global Markets:</div>
              <div>US, UK, Canada, France, Germany, Netherlands, Switzerland &amp; Australia.</div>
            </div>
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-line text-sm text-ink-3">
          <p>© {new Date().getFullYear()} Nuvion Technologies Pvt. Ltd. Digital Engineering. Secure Systems. Better Operations.</p>
          <button onClick={toTop} className="inline-flex items-center gap-2 rounded-full bg-surface border border-line px-4 py-2 text-ink hover:text-brand transition-colors cursor-pointer text-xs font-semibold">
            <ArrowUp size={14} /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
