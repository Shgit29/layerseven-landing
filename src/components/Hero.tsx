"use client";

import Link from "next/link";

const trustPoints = [
  "Registered company in Bahrain",
  "Production software experience",
  "Clear weekly updates",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-teal-50/40 pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-teal-500/12 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-orange-500/12 blur-3xl" />
        <div className="absolute inset-x-0 top-24 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-teal-200 bg-white/85 px-4 py-2 text-sm font-medium text-teal-700 shadow-sm backdrop-blur">
            Bahrain-registered • Remote-first • Serving clients globally
          </div>

          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              LayerSeven Solutions
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Build Your SaaS Product Faster
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              LayerSeven helps startups and growing businesses design, build,
              and launch scalable web platforms, AI integrations, and backend
              systems.
            </p>
            <p className="max-w-2xl text-base leading-7 text-slate-500">
              Clean code, clear communication, reliable delivery. Before
              writing code, we figure out what actually matters.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:scale-[1.02] hover:from-teal-700 hover:to-cyan-700"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-700"
            >
              View Our Work
            </Link>
          </div>

          <div className="grid gap-3 pt-2 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 text-sm font-medium text-slate-700 shadow-sm backdrop-blur"
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl min-w-0">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-teal-500/15 via-cyan-500/10 to-orange-500/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-900/15">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                product-architecture.ts
              </span>
            </div>

            <div className="grid gap-5 p-5 lg:grid-cols-[1fr_1fr]">
              <div className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
                    API Design
                  </span>
                  <span className="text-xs text-slate-400">v1 launch scope</span>
                </div>
                <div className="space-y-3 break-words font-mono text-sm text-slate-300">
                  <div className="min-w-0">
                    <span className="text-cyan-300">POST</span> <span>/auth/login</span>
                  </div>
                  <div className="min-w-0">
                    <span className="text-cyan-300">GET</span> <span>/projects/:id/metrics</span>
                  </div>
                  <div className="min-w-0">
                    <span className="text-cyan-300">POST</span> <span>/ai/answer</span>
                  </div>
                  <div className="min-w-0">
                    <span className="text-cyan-300">QUEUE</span> <span>document-sync-worker</span>
                  </div>
                </div>
              </div>

              <div className="min-w-0 space-y-5">
                <div className="min-w-0 rounded-2xl border border-white/10 bg-white p-4 text-slate-900">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-semibold">Launch Dashboard</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                      Ready for QA
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="min-w-0 rounded-xl bg-slate-100 p-3">
                      <div className="text-xs text-slate-500">Scope</div>
                      <div className="mt-2 whitespace-nowrap text-base font-bold leading-tight sm:text-lg">
                        MVP
                      </div>
                    </div>
                    <div className="min-w-0 rounded-xl bg-slate-100 p-3">
                      <div className="text-xs text-slate-500">Mode</div>
                      <div className="mt-2 whitespace-nowrap text-base font-bold leading-tight tracking-tight sm:text-lg">
                        Remote
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-teal-400/20 bg-gradient-to-br from-teal-500/15 to-cyan-500/10 p-4 text-slate-100">
                  <p className="text-sm font-semibold text-white">Founder note</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    We won&apos;t recommend AI where a simple workflow works better.
                    The goal is to launch something maintainable.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 px-5 py-4">
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    MVP scope
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white">
                    Dashboard, auth, payments
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    AI layer
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white">
                    Search, answers, automation
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    Handoff
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white">
                    Docs, deploys, support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
