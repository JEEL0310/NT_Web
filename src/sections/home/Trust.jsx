import { Building2, Factory, Trophy, Hotel, ShieldCheck, Activity, GraduationCap, Rocket } from "lucide-react";

const items = [
  [Factory, "Manufacturing & Metal"],
  [ShieldCheck, "Cybersecurity & VAPT"],
  [Trophy, "Sports & Recreation"],
  [Activity, "Waterparks & Visitor RFID"],
  [Hotel, "Hospitality & Hostels"],
  [Building2, "Real Estate & Brokerage"],
  [GraduationCap, "Education & ERP"],
  [Rocket, "SaaS & Enterprise Platforms"],
];

export default function Trust() {
  return (
    <section aria-label="Industries we serve" className="relative py-6 sm:py-10">
      <p className="text-center text-xs font-semibold tracking-[0.18em] uppercase text-ink-3 mb-5 px-4">
        Engineering mission-critical systems across industries
      </p>
      <div className="marquee">
        {[0, 1].map((k) => (
          <div key={k} className="marquee-track" aria-hidden={k === 1}>
            {items.map(([I, t]) => (
              <span key={t} className="inline-flex items-center gap-2.5 rounded-full bg-surface/80 border border-line px-5 py-2.5 text-sm font-medium text-ink whitespace-nowrap">
                <I size={16} className="text-brand" /> {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
