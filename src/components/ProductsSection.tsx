"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { productItems } from "@/lib/siteContent";

const ProductsSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1, false);
  const [product] = productItems;

  return (
    <section
      id="products"
      ref={sectionRef}
      className={`section-shell bg-gradient-to-b from-slate-50 via-white to-teal-50/40 transition-all duration-700 ${
        sectionVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="section-wrap">
        <div className="section-heading">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            LayerSeven Products
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-950 lg:text-4xl">
            We do not just build for clients. We also build our own SaaS products.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            BlockTrack shows how we think about traceability, workflow design, and
            practical product engineering in a product we are actively developing.
          </p>
        </div>

        <article
          className={`overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition-all duration-500 ${
            sectionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
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
                <h3 className="mt-5 text-3xl font-bold">{product.title}</h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
                  {product.category}
                </p>
              </div>
              <p className="max-w-xl rounded-2xl border border-white/20 bg-black/10 px-4 py-3 text-sm leading-7 text-white/90 backdrop-blur">
                {product.description}
              </p>
            </div>
          </div>

          <div className="grid gap-8 p-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Key capabilities
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {product.bullets.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white">
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
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  {product.cta}
                </Link>
                <Link
                  href="/work/blocktrack"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
                >
                  View Technical Case Study
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProductsSection;
