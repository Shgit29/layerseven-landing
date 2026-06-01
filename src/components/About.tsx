"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { credibilityPoints } from "@/lib/siteContent";

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1, false);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`section-shell bg-gradient-to-b from-slate-50/70 via-white to-teal-50/30 transition-all duration-700 ${
        sectionVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0">
        <div className="absolute -left-8 top-16 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="section-wrap">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              About
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-950 lg:text-4xl">
              A founder-led engineering studio for serious product work
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                LayerSeven Solutions helps startups and growing businesses build
                SaaS products, AI-powered tools, and backend systems that are
                ready for real users.
              </p>
              <p>
                We keep the process direct: understand the business problem,
                scope what matters, and ship with a clean path for handoff and
                growth.
              </p>
              <p>
                Engineering experience across production software, SaaS systems,
                and company operations shapes how we work.
              </p>
              <p className="font-medium text-slate-700">
                Bahrain registration, remote-first delivery, and practical
                engineering discipline are the baseline, not the sales pitch.
              </p>
            </div>
          </div>

          <div className="panel-card-strong">
            <div className="flex items-start gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-teal-600 to-cyan-600 text-2xl font-bold text-white shadow-lg">
                SH
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-950">
                  Saad Hassan
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                  Founder & Full-Stack Engineer
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Bahrain / Pakistan
                </p>
              </div>
            </div>

            <p className="mt-6 text-base leading-7 text-slate-600">
              Saad is a full-stack engineer and founder of LayerSeven
              Solutions, focused on building SaaS products, AI-powered tools,
              and reliable backend systems for startups and growing businesses.
            </p>

            <div className="mt-6 grid gap-3">
              {credibilityPoints.map((point, index) => (
                <div
                  key={point}
                  className={`rounded-2xl bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700 transition-all duration-500 ${
                    sectionVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
