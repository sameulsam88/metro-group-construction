import { Link, type LinkProps } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-ink text-cream">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/70 to-ink" />
      <div className="relative container-luxe">
        <p className="eyebrow text-[color:var(--gold-soft)]">{eyebrow}</p>
        <h1 className="display mt-6 text-5xl md:text-7xl lg:text-8xl max-w-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-6 max-w-xl text-base md:text-lg text-cream/80 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-ink text-cream">
      <div className="container-luxe py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
        <div>
          <p className="eyebrow text-[color:var(--gold-soft)]">Begin</p>
          <h2 className="display mt-4 text-4xl md:text-6xl">
            Shape your next <em className="italic text-[color:var(--gold-soft)]">room</em>.
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 md:justify-end">
          <PrimaryLink to="/contact">Book a consultation</PrimaryLink>
          <GhostLink to="/gallery">See the work</GhostLink>
        </div>
      </div>
    </section>
  );
}

export function PrimaryLink({ children, to }: { children: React.ReactNode; to: LinkProps["to"] }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 bg-[color:var(--gold)] px-8 py-4 text-[0.72rem] uppercase tracking-[0.32em] text-cream transition-colors hover:bg-cream hover:text-ink"
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export function GhostLink({ children, to }: { children: React.ReactNode; to: LinkProps["to"] }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 border border-cream/40 px-8 py-4 text-[0.72rem] uppercase tracking-[0.32em] text-cream transition-colors hover:border-cream"
    >
      {children}
    </Link>
  );
}
