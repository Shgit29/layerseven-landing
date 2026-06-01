import type { Metadata } from "next";
import Link from "next/link";
import { productItems } from "@/lib/siteContent";

const product = productItems.find((item) => item.slug === "blocktrack");

export const metadata: Metadata = {
  title: "BlockTrack | LayerSeven Products",
  description:
    "BlockTrack is a supply chain traceability platform in development by LayerSeven Solutions.",
};

export default function BlockTrackPage() {
  if (!product) return null;

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-teal-50/40 pt-32 pb-20 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="section-wrap">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3">
              {product.heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700 shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              {product.heroTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              {product.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                Request Product Discussion
              </Link>
              <Link
                href="/work/blocktrack"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-700"
              >
                View Technical Case Study
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="section-wrap space-y-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="panel-card">
              <h2 className="text-2xl font-semibold text-slate-950">
                Supply chains still rely on fragmented records.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{product.problem}</p>
            </div>
            <div className="panel-card-dark border-white/10">
              <h2 className="text-2xl font-semibold">A shared workflow for traceability.</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{product.solution}</p>
            </div>
          </div>

          <div>
            <div className="section-heading">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                Key Capabilities
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {product.capabilities.map((item) => (
                <div key={item.title} className="panel-card">
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="panel-card">
              <h2 className="text-2xl font-semibold text-slate-950">Who It Is For</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {product.whoFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="panel-card-dark border-white/10">
              <h2 className="text-2xl font-semibold">Current Status</h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{product.statusCopy}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {product.techStack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="panel-card border-slate-200 bg-gradient-to-br from-white to-slate-50">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              Interested in supply chain traceability?
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-950">
              Start a conversation
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              If your business works with product movement, batch records, or supply
              chain visibility, we would be happy to discuss whether BlockTrack could
              fit your workflow.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
