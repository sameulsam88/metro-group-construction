import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CtaBand, PageHero } from "@/components/page-hero";
import craftsman from "@/assets/craftsman.jpg";
import textureMarble from "@/assets/texture-marble.jpg";
import galleryFoyer from "@/assets/gallery-foyer.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dan Kush Metro Tile & Stone" },
      {
        name: "description",
        content:
          "The story, philosophy, and craftsmen behind Dan Kush Metro Tile & Stone in New Jersey.",
      },
      { property: "og:title", content: "About — Dan Kush Metro Tile & Stone" },
      {
        property: "og:description",
        content: "Old-World stone technique for modern American homes.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    n: "I",
    title: "Material first",
    body: "The stone leads the design. Pattern, cut, and layout follow the vein.",
  },
  {
    n: "II",
    title: "Patience",
    body: "We work at the pace precision demands. Never rushed, never approximate.",
  },
  {
    n: "III",
    title: "Discretion",
    body: "Quiet installs, clean sites, and complete confidentiality on private commissions.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparentOnTop={false} />

      <PageHero
        eyebrow="The Studio"
        title={
          <>
            A quiet studio for{" "}
            <em className="italic text-[color:var(--gold-soft)]">extraordinary stone</em>.
          </>
        }
        subtitle="Founded in New Jersey, Dan Kush Metro Tile & Stone brings decades of Old-World stone technique to residential and boutique commercial projects across the tri-state area."
        image={craftsman}
      />

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="container-luxe grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow">Our Founder</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">Dan Kush</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Dan began cutting stone as an apprentice, learning that the difference between good
              work and enduring work is measured in fractions of a millimeter. After two decades
              practicing his craft across residences, restaurants, and private galleries, he founded
              Metro Tile &amp; Stone to bring that discipline to New Jersey.
            </p>
            <p>
              Today the studio partners with a small circle of architects, interior designers, and
              homeowners who share one belief: material integrity is the beginning of beautiful
              design.
            </p>
            <p>
              Every project is led personally, from the first slab selection at the yard to the
              final polish on the last grout line.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 md:py-32 bg-ink text-cream overflow-hidden">
        <img
          src={textureMarble}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-[0.06]"
        />
        <div className="relative container-luxe">
          <p className="eyebrow text-[color:var(--gold-soft)]">Principles</p>
          <h2 className="display mt-4 text-4xl md:text-6xl max-w-3xl">
            Three commitments we{" "}
            <em className="italic text-[color:var(--gold-soft)]">will not compromise</em>.
          </h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10">
            {values.map((v) => (
              <div key={v.n} className="bg-ink p-8 md:p-10 min-h-[260px]">
                <div className="display text-5xl text-[color:var(--gold)]">{v.n}</div>
                <h3 className="display mt-8 text-2xl">{v.title}</h3>
                <p className="mt-4 text-sm text-cream/70 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio image */}
      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <img
            src={galleryFoyer}
            alt="Onyx foyer installation"
            loading="lazy"
            className="w-full h-[400px] md:h-[600px] object-cover"
          />
          <div className="mt-8 max-w-2xl">
            <p className="eyebrow">Recent Work</p>
            <p className="display mt-4 text-3xl md:text-4xl italic">
              "A residence in Alpine — hand-cut onyx foyer, book-matched from a single 3,000 lb
              slab."
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
      <SiteFooter />
    </div>
  );
}
