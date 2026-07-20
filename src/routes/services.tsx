import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CtaBand, PageHero } from "@/components/page-hero";
import heroBathroom from "@/assets/hero-bathroom.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryShower from "@/assets/gallery-shower.jpg";
import galleryPatio from "@/assets/gallery-patio.jpg";
import galleryHerringbone from "@/assets/gallery-herringbone.jpg";
import galleryFoyer from "@/assets/gallery-foyer.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Dan Kush Metro Tile & Stone" },
      {
        name: "description",
        content:
          "Natural stone, porcelain, custom mosaics, fabrication, and full-service installation across New Jersey.",
      },
      { property: "og:title", content: "Services — Tile & Stone Craftsmanship" },
      {
        property: "og:description",
        content: "From single-slab feature walls to full-home installations.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Natural Stone",
    image: heroBathroom,
    body: "Calacatta, Carrara, statuario, travertine, onyx, quartzite, and soapstone. Sourced directly from Italian, Turkish, and domestic quarries, hand-selected slab by slab, and book-matched on site.",
    bullets: [
      "Slab selection & sourcing",
      "Book-matched installations",
      "Feature walls & fireplaces",
      "Countertops & vanities",
    ],
  },
  {
    n: "02",
    title: "Porcelain & Ceramic Tile",
    image: galleryKitchen,
    body: "Large-format porcelain, subway, hexagon, and artisan-glazed ceramic. Perfect grout lines, laser-leveled surfaces, and specifications trusted by leading NJ designers.",
    bullets: [
      "Large-format slabs up to 10 ft",
      "Kitchen backsplashes",
      "Bathroom walls & floors",
      "Commercial-grade installation",
    ],
  },
  {
    n: "03",
    title: "Custom Mosaic & Inlay",
    image: galleryFoyer,
    body: "Hand-cut medallions, waterjet stone inlays, and bespoke feature panels. Every mosaic is drawn to scale, dry-laid in studio, then transferred on site.",
    bullets: [
      "Marble & glass mosaics",
      "Waterjet stone inlays",
      "Custom medallions",
      "Restoration & historical match",
    ],
  },
  {
    n: "04",
    title: "Showers & Wet Rooms",
    image: galleryShower,
    body: "Fully waterproofed wet rooms, curbless showers, steam enclosures, and spa-grade installations. Every membrane and slope is measured and warrantied.",
    bullets: [
      "Curbless & barrier-free",
      "Steam room build-outs",
      "Linear drains",
      "Full waterproofing systems",
    ],
  },
  {
    n: "05",
    title: "Fabrication",
    image: galleryHerringbone,
    body: "In-house fabrication for edges, cutouts, mitres, and waterfall panels. Our workshop lets us control tolerances that field-cut installations cannot match.",
    bullets: [
      "Custom edge profiles",
      "Waterfall countertops",
      "Mitred slab returns",
      "Sealing & finishing",
    ],
  },
  {
    n: "06",
    title: "Outdoor Stone",
    image: galleryPatio,
    body: "Bluestone, limestone, and porcelain pavers for patios, pool surrounds, walkways, and outdoor kitchens. Freeze-thaw rated, engineered to last decades.",
    bullets: [
      "Patios & terraces",
      "Pool coping & surrounds",
      "Outdoor fireplaces",
      "Cladding & retaining walls",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparentOnTop={false} />

      <PageHero
        eyebrow="Disciplines"
        title={
          <>
            Six services. <em className="italic text-[color:var(--gold-soft)]">One standard.</em>
          </>
        }
        subtitle="Every project is scoped, drawn, and installed by our own team. We do not sub-contract craft."
        image={heroBathroom}
      />

      <section className="py-16 md:py-24">
        <div className="container-luxe space-y-24 md:space-y-32">
          {services.map((s, i) => (
            <article
              key={s.n}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-6 relative">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-[380px] md:h-[520px] object-cover"
                />
              </div>
              <div className="lg:col-span-6">
                <div className="display text-6xl text-[color:var(--gold)]">{s.n}</div>
                <h2 className="display mt-6 text-3xl md:text-5xl">{s.title}</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">{s.body}</p>
                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 border-t border-border pt-3">
                      <span className="text-[color:var(--gold)] mt-0.5">◆</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </div>
  );
}
