"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { processSteps } from "@/lib/siteContent";

const Process = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1, false);

  return (
    <section
      id="process"
      ref={sectionRef}
      className={`section-shell bg-gradient-to-b from-slate-50 via-white to-blue-50/40 transition-all duration-700 ${
        sectionVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0">
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-cyan-500/8 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="section-wrap">
        <div className="section-heading-centered">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            How We Work
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-950 lg:text-4xl">
            A process built for clarity, not chaos
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            You should always know what we&apos;re building, why it matters, and
            what happens next.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className={`panel-card relative p-7 transition-all duration-500 ${
                sectionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                  {step.number}
                </span>
                <span className="ml-4 h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
              </div>
              <h3 className="text-xl font-semibold text-slate-950">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {step.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {step.deliverables.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
