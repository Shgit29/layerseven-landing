"use client";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  accent?: "teal" | "orange" | "blue";
};

const accentClasses = {
  teal: {
    eyebrow: "text-teal-700",
    glowA: "bg-teal-500/10",
    glowB: "bg-cyan-500/10",
  },
  orange: {
    eyebrow: "text-orange-700",
    glowA: "bg-orange-500/10",
    glowB: "bg-amber-500/10",
  },
  blue: {
    eyebrow: "text-blue-700",
    glowA: "bg-blue-500/10",
    glowB: "bg-cyan-500/10",
  },
};

const PageHero = ({ eyebrow, title, description, accent = "teal" }: PageHeroProps) => {
  const palette = accentClasses[accent];

  return (
    <section className="relative overflow-hidden rounded-b-[2.25rem] bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-32 pb-16 lg:pt-36 lg:pb-20">
      <div className="absolute inset-0">
        <div className={`absolute left-0 top-20 h-72 w-72 rounded-full blur-3xl ${palette.glowA}`} />
        <div className={`absolute right-0 bottom-0 h-80 w-80 rounded-full blur-3xl ${palette.glowB}`} />
      </div>

      <div className="section-wrap">
        <div className="max-w-3xl pb-2">
          <p className={`text-sm font-semibold uppercase tracking-[0.22em] ${palette.eyebrow}`}>
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
