import { CheckCircle2, AlertTriangle, Cpu, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero eyebrow="Case Studies" title="Systems that deliver" accent="measurable outcomes.">
        Concrete engineering engagements, clear architecture, and quantifiable operational results you can verify on a live dashboard.
      </PageHero>

      <section className="pb-24">
        <div className="wrap space-y-8 sm:space-y-10">
          {caseStudies.map((c) => (
            <Reveal
              key={c.id}
              as="article"
              className="card card-hover p-7 sm:p-10 lg:p-12 border border-line hover:border-brand/30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand/10 text-brand border border-brand/20">
                      {c.industry}
                    </span>
                    {c.technologies && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-surface border border-line text-ink-3">
                        {c.technologies}
                      </span>
                    )}
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-ink mt-3 max-w-3xl leading-snug">
                    {c.title}
                  </h2>
                </div>

                <Button
                  to="/contact"
                  chamfer
                  className="!py-2.5 !px-5 text-xs font-semibold self-start sm:self-auto text-white bg-[#02246A] hover:bg-[#1456D8]"
                >
                  Discuss similar case <ArrowRight size={14} />
                </Button>
              </div>

              {/* 3-Column Structured Breakdown */}
              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                {/* Challenge */}
                <div className="rounded-2xl p-6 bg-white border border-rose-200/60 shadow-soft">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose">
                    <AlertTriangle size={15} />
                    <span>The Bottleneck</span>
                  </div>
                  <p className="mt-3.5 text-xs sm:text-sm text-ink-2 leading-relaxed">
                    {c.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="rounded-2xl p-6 bg-gradient-to-br from-white via-surface to-tint/30 border border-brand/20 shadow-soft">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
                    <Cpu size={15} />
                    <span>Architected Solution</span>
                  </div>
                  <p className="mt-3.5 text-xs sm:text-sm text-ink leading-relaxed">
                    {c.solution}
                  </p>
                </div>

                {/* Impact */}
                <div className="rounded-2xl p-6 bg-gradient-to-br from-white via-surface to-emerald-50/40 border border-ok/25 shadow-soft">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ok">
                    <CheckCircle2 size={15} />
                    <span>Quantified Impact</span>
                  </div>
                  <ul className="mt-3.5 space-y-2.5">
                    {c.impact.map((m) => (
                      <li key={m} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-ink">
                        <CheckCircle2 size={16} className="text-ok mt-0.5 shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
