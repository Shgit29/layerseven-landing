"use client";

import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/siteContent";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "SaaS MVP Development", href: "/services" },
    { name: "AI Integrations", href: "/services" },
    { name: "Backend/API Engineering", href: "/services" },
    { name: "Maintenance", href: "/services" },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="soft-footer-frame relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" />
        <div className="absolute -left-12 top-0 h-72 w-72 rounded-full bg-teal-500/8 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-500/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 font-bold text-white shadow-lg">
                L7
              </div>
              <span className="text-2xl font-semibold">LayerSeven</span>
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Serious product engineering, without the agency noise.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-400">
              LayerSeven Solutions builds SaaS products, production workflow systems,
              and practical AI integrations for startups and growing businesses.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Book a Call
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              View Work
            </Link>
          </div>
        </div>

        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
              Contact
            </p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Bahrain-registered, remote-first, and available for product builds,
              backend systems, and practical AI integration work.
            </p>
            <a
              href="mailto:hello@layer7solution.com"
              className="mt-5 inline-flex text-sm font-medium text-white transition hover:text-teal-300"
            >
              hello@layer7solution.com
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {navLinks.filter((link) => link.label !== "Home").map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-teal-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="transition hover:text-teal-300">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Location</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <p>Manama, Bahrain</p>
              <p>Serving clients globally</p>
              <p>Remote-first delivery</p>
            </div>

            <Link
              href="/products"
              className="mt-6 inline-flex text-sm font-medium text-white transition hover:text-teal-300"
            >
              View LayerSeven Products
            </Link>

            <h4 className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Social
            </h4>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 text-slate-300 transition hover:border-teal-400/50 hover:text-teal-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-400">
              © {currentYear} LayerSeven Solutions. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Bahrain-registered • Remote-first • Built for maintainable products
            </p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-teal-400/50 hover:text-teal-300"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
