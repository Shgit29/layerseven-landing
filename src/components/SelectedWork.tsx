"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { workItems } from "@/lib/siteContent";

const SelectedWork = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1, false);

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`section-shell soft-frame-elevated bg-slate-950 text-white transition-all duration-700 ${
        sectionVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
      </div>

      <div className="section-wrap">
        <div className="section-heading">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
            Selected Work
          </p>
          <h2 className="mt-4 text-3xl font-bold lg:text-4xl">
            Engineering case studies that show how we think, build, and ship.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Production engineering work, AI workflow systems, and product
            architecture examples that reflect real software delivery.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {workItems.map((project, index) => (
            <article
              key={project.title}
              className={`grid h-full grid-rows-[18rem_8.5rem_1fr_auto] overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/5 transition-all duration-500 ${
                sectionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className={`bg-gradient-to-br ${project.palette} p-6`}>
                <div className="flex h-full flex-col justify-between gap-5">
                  <span className="inline-flex min-h-[3.25rem] w-fit max-w-full items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                    {project.category}
                  </span>
                  <div className="rounded-2xl border border-white/15 bg-slate-950/35 px-4 py-4 backdrop-blur">
                    <div className="h-[2.75rem] text-xs uppercase tracking-[0.18em] text-white/70">
                      {project.label}
                    </div>
                    <div className="mt-3 h-[7rem] text-[2rem] font-semibold leading-tight text-white">
                      {project.title}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pt-6">
                <p className="h-[8.5rem] text-sm leading-7 text-slate-300">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-1 flex-col px-6 pb-6">
                <div className="h-[13.5rem] rounded-2xl border border-white/10 bg-black/15 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
                    What stands out
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {project.result}
                  </p>
                </div>

                <div className="mt-6 min-h-[4.75rem] content-start flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/work/${project.slug}`}
                  className="mt-8 inline-flex w-fit items-center rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/5"
                >
                  {project.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
