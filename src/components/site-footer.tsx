import { Link } from "@tanstack/react-router";
import { EMAIL, PHONE, PHONE_TEL } from "./site-header";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="container-luxe py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <img src={"/logo1.png"} alt="" className="h-16 w-auto brightness-0 invert opacity-90" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">
            Master tile and natural stone craftsmanship, designed and installed for the finest homes
            across New Jersey.
          </p>
        </div>
        <div>
          <p className="eyebrow text-[color:var(--gold-soft)]">Navigate</p>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["Gallery", "/gallery"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <Link to={h} className="hover:text-[color:var(--gold-soft)] transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-[color:var(--gold-soft)]">Contact</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={`tel:${PHONE_TEL}`} className="hover:text-[color:var(--gold-soft)]">
                {PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-[color:var(--gold-soft)] break-all">
                {EMAIL}
              </a>
            </li>
            <li className="text-cream/60">New Jersey · By appointment</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-luxe py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[0.68rem] uppercase tracking-[0.28em] text-cream/50">
          <p>© {new Date().getFullYear()} Hicham Kush Metro Tile &amp; Stone</p>
          <p>Creative Tile Ideas · New Jersey</p>
        </div>
      </div>
    </footer>
  );
}
