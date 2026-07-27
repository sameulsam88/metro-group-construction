import { Link } from "@tanstack/react-router";
import { EMAIL, PHONE, PHONE_TEL } from "./contact";

export function SiteFooter() {
  const logoSrc = `${import.meta.env.BASE_URL}logo1.png`;

  return (
    <footer className="bg-ink text-cream/70">
      <div className="container-luxe py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <img src={logoSrc} alt="Dan Kush Metro Tile & Stone logo" className="h-16 w-auto brightness-0 invert opacity-90" />
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
          <div className="flex items-center gap-6">
            <p>© {new Date().getFullYear()} Dan Kush Metro Tile &amp; Stone</p>
            <p>Creative Tile Ideas · New Jersey</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-[color:var(--gold-soft)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cream/80"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-[color:var(--gold-soft)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cream/80"
              >
                <path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[color:var(--gold-soft)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cream/80"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-14h4v2" />
                <rect x="2" y="9" width="4" height="11" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
