import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { credibilityPoints, partnerItems, trustPoints } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "About | LayerSeven Solutions",
  description:
    "Learn about LayerSeven Solutions, its founder, engineering philosophy, and company background.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="About"
        title="Founder-led engineering with a bias toward practical product decisions"
        description="LayerSeven Solutions is a Bahrain-registered software development company focused on SaaS products, AI-powered tooling, and backend systems that are meant to survive real users."
        accent="teal"
      />

      <section className="section-shell">
        <div className="section-wrap grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel-card rounded-[2rem] bg-slate-50">
            <h2 className="text-2xl font-semibold text-slate-950">Founder story</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Saad Hassan is the founder of LayerSeven Solutions and works as a full-stack
                engineer across product architecture, backend systems, frontend delivery, and
                practical AI integration.
              </p>
              <p>
                The company is built around a simple principle: software should be useful,
                maintainable, and clearly communicated, especially when teams are moving fast.
              </p>
              <p>
                LayerSeven operates remotely, serves clients globally, and keeps its work grounded
                in production realities instead of inflated marketing claims.
              </p>
            </div>
          </div>

          <div className="panel-card rounded-[2rem]">
            <div className="flex items-start gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-teal-600 to-cyan-600 text-2xl font-bold text-white shadow-lg">
                SH
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">Saad Hassan</h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                  Founder & Full-Stack Engineer
                </p>
                <p className="mt-2 text-sm text-slate-500">Bahrain / Pakistan</p>
              </div>
            </div>

            <p className="mt-6 text-base leading-7 text-slate-600">
              Saad is focused on building SaaS products, AI-powered tools, and reliable backend
              systems for startups and growing businesses.
            </p>

            <div className="mt-6 grid gap-3">
              {credibilityPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-wrap mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel-card-dark">
            <h2 className="text-2xl font-semibold">Engineering philosophy</h2>
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200">
                We build software that survives real users.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200">
                We care about clean handoffs, not just flashy prototypes.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200">
                We won&apos;t recommend AI where a simple workflow works better.
              </div>
            </div>
          </div>

          <div className="panel-card rounded-[2rem]">
            <h2 className="text-2xl font-semibold text-slate-950">Company background</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
                >
                  {point}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">
                Network
              </p>
              <div className="mt-4 grid gap-3">
                {partnerItems.map((partner) => (
                  <div
                    key={partner.name}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-base font-semibold text-slate-950">{partner.name}</span>
                      <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-orange-700">
                        {partner.label}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{partner.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
