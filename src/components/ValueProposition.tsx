"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { partnerItems, stackItems, trustPoints } from "@/lib/siteContent";

const ValueProposition = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1, false);

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className={`section-shell bg-gradient-to-b from-white via-teal-50/30 to-white transition-all duration-700 ${
        sectionVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0">
        <div className="absolute left-10 top-24 h-72 w-72 rounded-full bg-teal-500/8 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/8 blur-3xl" />
      </div>

      <div className="section-wrap">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel-card-dark">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">
              Why LayerSeven
            </p>
            <h2 className="mt-4 text-3xl font-bold">
              Practical engineering, founder-led communication
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              We care about clean handoffs, not just flashy prototypes. That means
              sensible architecture, direct updates, and software that is easier
              to maintain after launch.
            </p>
            <p className="mt-5 text-base leading-7 text-slate-300">
              The goal is not just to launch. The goal is to launch something
              maintainable.
            </p>
          </div>

          <div className="panel-card">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              Grounded trust points
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {trustPoints.map((point, index) => (
                <div
                  key={point}
                  className={`rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700 transition-all duration-500 ${
                    sectionVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel-card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Partners, Vendors & Clients
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">
              Built with a real working network
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We prefer grounded credibility over fake logo walls. Here are
              two companies in our software network.
            </p>
            <div className="mt-6 grid gap-4">
              {partnerItems.map((partner) => (
                <div
                  key={partner.name}
                  className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h4 className="text-xl font-semibold text-slate-950">{partner.name}</h4>
                    <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-orange-700">
                      {partner.label}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {partner.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel-card-dark">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Founder-Led Notes
            </p>
            <div className="mt-6 grid gap-4">
              {[
                "We won't recommend AI where a simple workflow works better.",
                "Before writing code, we figure out what actually matters.",
                "The goal is not just to launch. The goal is to launch something maintainable.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="panel-card mt-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Built with modern, reliable tools
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">
              The stack we reach for most often
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We choose tools that help teams ship faster without making the
              codebase harder to live with later.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {stackItems.map((item, index) => (
              <span
                key={item}
                className={`rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-500 ${
                  sectionVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
