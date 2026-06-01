import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { workItems } from "@/lib/siteContent";

const project = workItems.find((item) => item.slug === "healthcare-scheduling-platform");

export const metadata: Metadata = {
  title: "Healthcare Scheduling Platform | Work",
  description:
    "Production engineering case study covering healthcare scheduling workflows, APIs, authentication, and reliability improvements.",
};

export default function HealthcareSchedulingPage() {
  if (!project) return null;

  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow={project.label}
        title={project.title}
        description={project.heroSubtitle}
        accent="blue"
      />

      <section className="section-shell bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="section-wrap space-y-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="panel-card">
              <h2 className="text-2xl font-semibold text-slate-950">Problem</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{project.problem}</p>
            </div>
            <div className="panel-card-dark border-white/10">
              <h2 className="text-2xl font-semibold">Solution</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{project.solution}</p>
            </div>
          </div>

          <div className="panel-card">
            <h2 className="text-2xl font-semibold text-slate-950">Key Contributions</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.contributions.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="panel-card">
              <h2 className="text-2xl font-semibold text-slate-950">Tech Stack</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{project.techStack}</p>
            </div>
            <div className="panel-card-dark border-white/10">
              <h2 className="text-2xl font-semibold">Outcome</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{project.result}</p>
              <p className="mt-4 text-base leading-8 text-slate-300">{project.whatThisShows}</p>
            </div>
          </div>

          <div className="panel-card bg-gradient-to-br from-white to-slate-50">
            <h2 className="text-3xl font-bold text-slate-950">{project.finalCta}</h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
