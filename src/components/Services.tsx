"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { serviceItems } from "@/lib/siteContent";

const Services = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1, false);

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`section-shell bg-gradient-to-b from-white via-slate-50 to-white transition-all duration-700 ${
        sectionVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-teal-500/8 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="section-wrap">
        <div className="section-heading">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-950 lg:text-4xl">
            From idea to working product
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Launch fast without creating technical debt. We focus on the parts
            that move your product forward and keep the implementation grounded.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {serviceItems.map((service, index) => (
            <article
              key={service.title}
              className={`panel-card group transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                sectionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${service.accent} shadow-lg`} />
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Outcome-focused
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-slate-950">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {service.description}
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="panel-card-dark mt-14 py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold">
                We build software that survives real users.
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Clean handoffs, sensible architecture, and direct communication
                matter more than flashy prototypes.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Start Your Project
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
