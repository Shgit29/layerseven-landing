import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { productItems } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "LayerSeven Products",
  description:
    "LayerSeven products in development around traceability, automation, and business operations.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        eyebrow="Products"
        title="LayerSeven Products"
        description="We are building focused SaaS products around traceability, automation, and business operations."
        accent="teal"
      />

      <section className="section-shell bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="section-wrap">
          <div className="grid gap-8">
            {productItems.map((product) => (
              <article
                key={product.slug}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <div className={`bg-gradient-to-r ${product.palette} px-8 py-8 text-white`}>
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <div className="flex flex-wrap gap-3">
                        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
                          {product.label}
                        </span>
                        <span className="rounded-full border border-emerald-200/30 bg-emerald-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100">
                          {product.status}
                        </span>
                      </div>
                      <h2 className="mt-5 text-3xl font-bold">{product.title}</h2>
                    </div>
                    <p className="max-w-xl rounded-2xl border border-white/20 bg-black/10 px-4 py-3 text-sm leading-7 text-white/90 backdrop-blur">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="grid gap-8 p-8 lg:grid-cols-[1fr_0.95fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Product focus
                    </p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {product.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
                        >
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="panel-card-dark rounded-[1.75rem] border-white/10">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
                      Built with
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/products/${product.slug}`}
                      className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                    >
                      View Product
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
