import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { serviceItems } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Services | LayerSeven Solutions",
  description:
    "Outcome-focused SaaS development, AI integrations, backend engineering, and support services from LayerSeven Solutions.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="Services"
        title="Engineering support that helps you launch and keep momentum"
        description="We focus on scope, architecture, and delivery decisions that make software easier to ship and easier to live with after launch."
        accent="teal"
      />

      <section className="section-shell">
        <div className="section-wrap grid gap-6 lg:grid-cols-2">
          {serviceItems.map((service) => (
            <article
              key={service.title}
              className="panel-card rounded-[2rem] bg-gradient-to-br from-white to-slate-50"
            >
              <div className="flex items-center justify-between gap-4">
                <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${service.accent} shadow-lg`} />
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Outcome-focused
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-slate-950">{service.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>

              <div className="mt-6 grid gap-3">
                {service.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="section-wrap mt-10">
          <div className="panel-card-dark py-10">
            <h2 className="text-2xl font-semibold">What clients usually value most</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200">
                Clean code, clear communication, and delivery you can track without chasing updates.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200">
                A practical view of AI: we use it where it helps and skip it where a simpler workflow is better.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200">
                Handoffs that make sense for founders, internal teams, or future engineers taking over.
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Send project details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
