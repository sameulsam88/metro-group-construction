import { Phone } from "lucide-react";
import { PHONE, PHONE_TEL, EMAIL } from "./contact";

export function Topbar() {
  return (
    <div className="hidden lg:flex lg:fixed lg:inset-x-0 lg:top-0 lg:z-60 lg:h-10 items-center justify-between bg-ink text-cream/80 text-[0.68rem] uppercase tracking-[0.28em] px-6">
      <div className="flex items-center gap-6">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex items-center gap-2 hover:text-[color:var(--gold-soft)] transition-colors"
        >
          <Phone className="h-3 w-3" />
          {PHONE}
        </a>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="hover:text-[color:var(--gold-soft)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-[color:var(--gold-soft)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[color:var(--gold-soft)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-14h4v2" />
              <rect x="2" y="9" width="4" height="11" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
      <span className="text-cream/50">Wayne, New Jersey</span>
    </div>
  );
}
