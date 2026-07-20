import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CtaBand, PageHero } from "@/components/page-hero";
import { GalleryTile } from "@/routes/index";

import heroBathroom from "@/assets/hero-bathroom.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryFoyer from "@/assets/gallery-foyer.jpg";
import galleryShower from "@/assets/gallery-shower.jpg";
import galleryHerringbone from "@/assets/gallery-herringbone.jpg";
import galleryPatio from "@/assets/gallery-patio.jpg";
import heroTiles from "@/assets/hero-tiles.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Hicham Kush Metro Tile & Stone" },
      {
        name: "description",
        content:
          "A curated portfolio of tile and natural stone installations across New Jersey — kitchens, baths, entries, and exteriors.",
      },
      { property: "og:title", content: "Gallery — Selected Works" },
      {
        property: "og:description",
        content: "Kitchens, baths, entries, and exteriors in marble, porcelain, and natural stone.",
      },
    ],
  }),
  component: GalleryPage,
});

type Item = { src: string; title: string; tag: string; category: string };

const items: Item[] = [
  { src: heroBathroom, title: "Calacatta Gold Suite", tag: "Master Bath", category: "Bath" },
  { src: galleryFoyer, title: "Onyx Vein Foyer", tag: "Entry", category: "Interior" },
  { src: galleryKitchen, title: "Ivory Subway Kitchen", tag: "Kitchen", category: "Kitchen" },
  { src: galleryShower, title: "Silver Marble Shower", tag: "Wet Room", category: "Bath" },
  {
    src: galleryHerringbone,
    title: "Travertine Herringbone",
    tag: "Flooring",
    category: "Interior",
  },
  { src: galleryPatio, title: "Bluestone Terrace", tag: "Exterior", category: "Exterior" },
];

const categories = ["All", "Kitchen", "Bath", "Interior", "Exterior"] as const;

function GalleryPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparentOnTop={false} />

      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            A quiet edit of <em className="italic text-[color:var(--gold-soft)]">recent works</em>.
          </>
        }
        subtitle="Residential projects across Bergen, Essex, Morris, and the Jersey Shore."
        image={heroTiles}
      />

      <section className="py-16 md:py-24">
        <div className="container-luxe">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 md:gap-6 pb-10 border-b border-border">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`text-[0.72rem] uppercase tracking-[0.28em] pb-2 border-b transition-colors ${
                  active === c
                    ? "border-[color:var(--gold)] text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-12 gap-4 md:gap-6">
            {filtered.map((it, i) => {
              const layout =
                i % 5 === 0
                  ? "col-span-12 md:col-span-8"
                  : i % 5 === 1
                    ? "col-span-12 md:col-span-4"
                    : "col-span-12 md:col-span-4";
              return (
                <GalleryTile
                  key={it.title + i}
                  item={it}
                  className={layout}
                  h={i % 5 === 0 ? "h-[420px] md:h-[620px]" : "h-[360px] md:h-[520px]"}
                />
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </div>
  );
}
