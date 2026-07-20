import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

export const PHONE = "551 206 7097";
export const PHONE_TEL = "5512067097";
export const EMAIL = "info@hichamkushtile.com";

const nav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader({ transparentOnTop: _ = true }: { transparentOnTop?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 bg-cream text-ink ${
          scrolled
            ? "shadow-[0_1px_0_0_rgba(0,0,0,0.06)] border-b border-ink/10"
            : "border-b border-transparent"
        }`}
      >
        <div className="container-luxe flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={"/logo1.png"} className="h-13 w-auto md:h-18" />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {nav.map((n) => {
              const active = path === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className="relative text-[0.72rem] uppercase tracking-[0.28em] text-ink/80 transition-colors hover:text-[color:var(--gold)]"
                >
                  {n.label}
                  {active && (
                    <span className="absolute -bottom-2 left-1/2 h-px w-6 -translate-x-1/2 bg-[color:var(--gold)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden lg:inline-flex items-center gap-2 border border-ink/70 px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.28em] text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            <Phone className="h-3.5 w-3.5" /> {PHONE}
          </a>

          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="lg:hidden relative z-[60] h-10 w-10 grid place-items-center text-ink"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-px w-6 bg-current transition-transform duration-500 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-px w-6 -translate-y-1/2 bg-current transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-px w-6 bg-current transition-transform duration-500 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile drawer — inverse (ink on cream header → cream on ink drawer) */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          aria-label="Close menu backdrop"
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-black/50"
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm bg-ink text-cream shadow-2xl transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-30 pb-10 px-8">
            <p className="eyebrow text-[color:var(--gold-soft)]">Menu</p>
            <nav className="mt-8 flex flex-col">
              {nav.map((n, i) => {
                const active = path === n.to;
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setMenuOpen(false)}
                    style={{ transitionDelay: menuOpen ? `${120 + i * 70}ms` : "0ms" }}
                    className={`group border-b border-cream/10 py-5 flex items-baseline justify-between transition-all duration-700 ${
                      menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                    }`}
                  >
                    <span
                      className={`display text-3xl ${
                        active ? "italic text-[color:var(--gold-soft)]" : "text-cream"
                      } transition-colors group-hover:text-[color:var(--gold-soft)]`}
                    >
                      {n.label}
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-[0.32em] text-cream/40">
                      0{nav.indexOf(n) + 1}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div
              className={`mt-auto pt-10 transition-all duration-700 ${
                menuOpen ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-3 bg-cream text-ink px-6 py-4 text-[0.7rem] uppercase tracking-[0.32em] w-full justify-center"
              >
                <Phone className="h-3.5 w-3.5" /> {PHONE}
              </a>
              <p className="mt-6 text-xs text-cream/60 leading-relaxed">
                Hicham Kush Metro Tile &amp; Stone — New Jersey. Museum-grade tile &amp; natural
                stone, designed, fabricated and installed.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
