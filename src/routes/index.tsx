import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CtaBand, PrimaryLink, GhostLink } from "@/components/page-hero";

import heroTiles from "@/assets/hero-tiles.jpg";
import galleryKitchen from "@/assets/images/img16.jpeg";
import galleryFoyer from "@/assets/images/img17.jpeg";
import galleryHerringbone from "@/assets/images/img15.jpeg";
import galleryShower from "@/assets/images/img18.jpeg";
import galleryPatio from "@/assets/images/img19.jpeg";
import heroBathroom from "@/assets/images/img20.jpeg";
import textureMarble from "@/assets/images/img25.jpeg";
import showroom from "@/assets/images/img11.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    n: "01",
    title: "Natural Stone",
    body: "Calacatta, Carrara, travertine, onyx, and quartzite — book-matched on site.",
  },
  {
    n: "02",
    title: "Porcelain & Ceramic",
    body: "Large-format slabs, subway, hex, and artisan patterns installed with precision.",
  },
  {
    n: "03",
    title: "Custom Mosaics",
    body: "Hand-cut medallions, waterjet inlays, and bespoke feature walls.",
  },
  {
    n: "04",
    title: "Fabrication & Install",
    body: "In-house fabrication, sealing, and full-service installation.",
  },
];

const gallery = [
  { src: heroBathroom, title: "Calacatta Gold Suite", tag: "Master Bath" },
  { src: galleryFoyer, title: "Onyx Vein Foyer", tag: "Entry" },
  { src: galleryKitchen, title: "Ivory Subway Kitchen", tag: "Kitchen" },
  { src: galleryShower, title: "Silver Marble Shower", tag: "Wet Room" },
  { src: galleryHerringbone, title: "Travertine Herringbone", tag: "Flooring" },
  { src: galleryPatio, title: "Bluestone Terrace", tag: "Exterior" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO — tile & stone showcase */}
      <section className="relative min-h-[100svh] overflow-hidden bg-ink">
        <img
          src={heroTiles}
          alt="Curated wall of luxury tile and natural stone — Calacatta, onyx, travertine, herringbone"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Minimal overlay — dark only at the very bottom for text legibility */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />

        <div className="relative z-10 container-luxe flex min-h-[100svh] flex-col justify-end pb-14 md:pb-20 text-cream">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-cream/85 mb-6">
              <span className="gold-rule" />
              <span className="text-[0.7rem] uppercase tracking-[0.32em]">
                New Jersey · Tile &amp; Stone Atelier
              </span>
            </div>
            <h1 className="display text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              Stone that <em className="italic text-[color:var(--gold-soft)] font-light">speaks</em>
              .
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-cream/85 leading-relaxed">
              Museum-grade tile &amp; natural stone — designed, fabricated and installed across New
              Jersey.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryLink to="/gallery">View the gallery</PrimaryLink>
              <GhostLink to="/contact">Request consultation</GhostLink>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-40">
        <div className="container-luxe grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 relative">
            <img
              src={showroom}
              alt="Dan Kush showroom — curated inventory of marble, travertine, onyx, and porcelain tile"
              loading="lazy"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-background border border-[color:var(--gold)] px-8 py-6 max-w-[240px]">
              <p className="display text-2xl text-foreground italic">"Every seam a signature."</p>
              <p className="mt-3 text-[0.65rem] uppercase tracking-[0.32em] text-[color:var(--gold)]">
                — Dan Kush
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow">About the House</p>
            <h2 className="display mt-4 text-4xl md:text-6xl">
              A studio built on stone,
              <br /> patience, and precision.
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                From our New Jersey workshop, we craft interiors where every vein, every grout line,
                and every reveal is considered.
              </p>
              <p>
                Our clients are architects, designers, and homeowners who understand that great
                stone is not decoration — it is architecture.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.32em] text-foreground border-b border-[color:var(--gold)] pb-1 hover:text-[color:var(--gold)]"
            >
              Read our story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24 md:py-40 bg-ink text-cream overflow-hidden">
        <img
          src={textureMarble}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-[0.06]"
        />
        <div className="relative container-luxe">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="eyebrow text-[color:var(--gold-soft)]">Disciplines</p>
              <h2 className="display mt-4 text-4xl md:text-6xl">
                Four hands.{" "}
                <em className="italic text-[color:var(--gold-soft)]">One vocabulary.</em>
              </h2>
            </div>
            <p className="max-w-md text-cream/70 leading-relaxed">
              From single-slab statement walls to full-home installations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10">
            {services.map((s) => (
              <div
                key={s.n}
                className="bg-ink p-8 md:p-10 min-h-[300px] flex flex-col justify-between"
              >
                <div>
                  <div className="display text-5xl text-[color:var(--gold)]">{s.n}</div>
                  <h3 className="display mt-8 text-2xl md:text-3xl">{s.title}</h3>
                </div>
                <p className="mt-6 text-sm text-cream/70 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--gold-soft)] border-b border-[color:var(--gold)] pb-1"
            >
              Explore all services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 md:py-40">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2 className="display mt-4 text-4xl md:text-6xl">
                Selected <em className="italic text-[color:var(--gold)]">works</em>.
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.32em] border-b border-[color:var(--gold)] pb-1"
            >
              See full gallery <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <GalleryTile
              item={gallery[0]}
              className="col-span-12 md:col-span-8"
              h="h-[420px] md:h-[620px]"
            />
            <GalleryTile
              item={gallery[1]}
              className="col-span-12 md:col-span-4"
              h="h-[420px] md:h-[620px]"
            />
            <GalleryTile
              item={gallery[2]}
              className="col-span-12 md:col-span-4"
              h="h-[360px] md:h-[520px]"
            />
            <GalleryTile
              item={gallery[3]}
              className="col-span-12 md:col-span-4"
              h="h-[360px] md:h-[520px]"
            />
            <GalleryTile
              item={gallery[4]}
              className="col-span-12 md:col-span-4"
              h="h-[360px] md:h-[520px]"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-40 bg-secondary">
        <div className="container-luxe">
          <div className="max-w-2xl">
            <p className="eyebrow">Voices</p>
            <h2 className="display mt-4 text-4xl md:text-6xl">
              What our <em className="italic text-[color:var(--gold)]">clients</em> say.
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote:
                  "Dan treated our foyer like a piece of sculpture. The book-matched onyx is the first thing every guest notices.",
                name: "Elena R.",
                role: "Homeowner · Alpine, NJ",
              },
              {
                quote:
                  "Precision I have not seen in twenty years of specifying stone. Grout lines you could measure with a caliper.",
                name: "Marcus D.",
                role: "Interior Architect",
              },
              {
                quote:
                  "From slab selection to the final polish, the studio was calm, discreet, and exact. Worth every hour.",
                name: "Priya S.",
                role: "Homeowner · Short Hills",
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="relative bg-background p-8 md:p-10 border border-ink/10 flex flex-col justify-between min-h-[320px]"
              >
                <span className="display absolute top-4 right-6 text-6xl text-[color:var(--gold)]/40 leading-none">
                  &ldquo;
                </span>
                <blockquote className="display text-xl md:text-2xl text-ink leading-snug italic">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8">
                  <div className="gold-rule" />
                  <p className="mt-4 text-sm font-medium text-ink">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mt-1">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNAL / BLOG */}
      <section className="py-24 md:py-40">
        <div className="container-luxe">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <p className="eyebrow">Journal</p>
              <h2 className="display mt-4 text-4xl md:text-6xl">
                Notes from the <em className="italic text-[color:var(--gold)]">studio</em>.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground leading-relaxed">
              Field notes on material, technique, and the quiet decisions behind every install.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                img: galleryFoyer,
                tag: "Material",
                date: "March 2026",
                title: "Reading a slab: the case for book-matched onyx.",
                excerpt:
                  "Why we spend hours at the yard before a single cut, and what a vein tells us about the room it will live in.",
              },
              {
                img: galleryHerringbone,
                tag: "Technique",
                date: "February 2026",
                title: "The forgotten geometry of herringbone.",
                excerpt:
                  "A short history of a pattern that has quietly outlasted every design trend of the last four centuries.",
              },
              {
                img: galleryShower,
                tag: "Craft",
                date: "January 2026",
                title: "Wet rooms, dry logic: sealing marble that lasts.",
                excerpt:
                  "The step-by-step sealing regimen we use to keep pale marble showers pristine for decades, not seasons.",
              },
            ].map((post) => (
              <article key={post.title} className="group flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-[280px] md:h-[340px] object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.32em] text-[color:var(--gold)]">
                  <span>{post.tag}</span>
                  <span className="h-px w-6 bg-[color:var(--gold)]/50" />
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="display mt-4 text-2xl md:text-3xl text-ink leading-tight group-hover:text-[color:var(--gold)] transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.32em] text-ink border-b border-[color:var(--gold)] pb-1 self-start">
                  Read the note <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />

      <SiteFooter />
    </div>
  );
}

export function GalleryTile({
  item,
  className,
  h,
}: {
  item: { src: string; title: string; tag: string };
  className?: string;
  h: string;
}) {
  return (
    <figure className={`group relative overflow-hidden ${className ?? ""}`}>
      <img
        src={item.src}
        alt={item.title}
        loading="lazy"
        className={`w-full ${h} object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
      <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between text-cream">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.32em] text-[color:var(--gold-soft)]">
            {item.tag}
          </p>
          <p className="display mt-2 text-2xl md:text-3xl">{item.title}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
      </figcaption>
    </figure>
  );
}
