import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { processSteps } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Process | LayerSeven Solutions",
  description:
    "See how LayerSeven Solutions handles product discovery, planning, development, launch, and post-launch support.",
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageHero
        eyebrow="How We Work"
        title="A delivery process designed for clarity and maintainability"
        description="You should know what is being built, what is in scope, and how decisions are made at each stage."
        accent="orange"
      />

      <section className="section-shell">
        <div className="section-wrap">
          <div className="grid gap-6 lg:grid-cols-2">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="panel-card rounded-[2rem]"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                    {step.number}
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Phase
                    </p>
                    <h2 className="text-2xl font-semibold text-slate-950">{step.title}</h2>
                  </div>
                </div>

                <p className="mt-6 text-base leading-7 text-slate-600">{step.description}</p>

                <div className="mt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">
                    Typical deliverables
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {step.deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-900"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="panel-card-dark mt-10 py-10">
            <h2 className="text-2xl font-semibold">A few rules we try to keep</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200">
                Before writing code, we figure out what actually matters.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200">
                We build in milestones so feedback arrives early, not after everything is already expensive.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200">
                The goal is not just to launch. The goal is to launch something maintainable.
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Start the conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
