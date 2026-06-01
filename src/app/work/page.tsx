import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { workItems } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Work | LayerSeven Solutions",
  description:
    "Selected software engineering projects from LayerSeven Solutions across SaaS, AI, backend systems, and product delivery.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageHero
        eyebrow="Selected Work"
        title="Case studies grounded in production software and product engineering"
        description="LayerSeven builds products for clients, contributes to production engineering work, and designs internal workflow systems with practical architecture."
        accent="blue"
      />

      <section className="section-shell">
        <div className="section-wrap">
          <div className="grid gap-8">
            {workItems.map((project) => (
              <article
                key={project.title}
                className="panel-card overflow-hidden p-0"
              >
                <div className={`bg-gradient-to-r ${project.palette} px-8 py-8 text-white`}>
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">
                        {project.label}
                      </p>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                        {project.category}
                      </p>
                      <h2 className="mt-3 text-3xl font-bold">{project.title}</h2>
                    </div>
                    <div className="rounded-2xl border border-white/20 bg-black/10 px-4 py-3 text-sm leading-7 text-white/90 backdrop-blur">
                      {project.description}
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 p-8 lg:grid-cols-3">
                  <div className="rounded-[1.5rem] bg-slate-50 p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Problem
                    </p>
                    <p className="mt-3 text-base leading-7 text-slate-600">{project.problem}</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-slate-50 p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Solution
                    </p>
                    <p className="mt-3 text-base leading-7 text-slate-600">{project.solution}</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
                      Result / Learning
                    </p>
                    <p className="mt-3 text-base leading-7 text-slate-300">{project.result}</p>
                  </div>
                </div>

                <div className="border-t border-slate-200 px-8 py-6">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      {project.cta}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
