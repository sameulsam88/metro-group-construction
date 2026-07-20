import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EMAIL, PHONE, PHONE_TEL } from "@/components/site-header";
import heroBathroom from "@/assets/hero-bathroom.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hicham Kush Metro Tile & Stone" },
      {
        name: "description",
        content: "Request a consultation. Serving New Jersey and the NY metro. Call 551 206 7097.",
      },
      { property: "og:title", content: "Contact — Hicham Kush Metro Tile & Stone" },
      {
        property: "og:description",
        content: "Unhurried consultations for luxury tile and stone projects in NJ.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader transparentOnTop={false} />

      {/* Hero + form combined */}
      <section className="relative pt-32 md:pt-48 pb-24 bg-ink text-cream overflow-hidden">
        <img
          src={heroBathroom}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/80 to-ink" />

        <div className="relative container-luxe grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6">
            <p className="eyebrow text-[color:var(--gold-soft)]">Begin</p>
            <h1 className="display mt-6 text-5xl md:text-7xl">
              Let's shape your <em className="italic text-[color:var(--gold-soft)]">next room</em>.
            </h1>
            <p className="mt-8 max-w-lg text-cream/80 leading-relaxed">
              Consultations are personal and unhurried. Share your project below or reach us
              directly — we respond within two business days.
            </p>

            <div className="mt-12 space-y-8">
              <ContactRow
                icon={<Phone className="h-5 w-5" />}
                label="Telephone"
                value={PHONE}
                href={`tel:${PHONE_TEL}`}
              />
              <ContactRow
                icon={<Mail className="h-5 w-5" />}
                label="Correspondence"
                value={EMAIL}
                href={`mailto:${EMAIL}`}
              />
              <ContactRow
                icon={<MapPin className="h-5 w-5" />}
                label="Studio"
                value="New Jersey · By appointment"
              />
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="bg-cream text-ink p-8 md:p-10">
              {sent ? (
                <div className="py-16 text-center">
                  <p className="eyebrow text-[color:var(--gold)]">Thank you</p>
                  <p className="display mt-4 text-3xl">Your note is on its way.</p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    We'll respond within two business days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-6"
                >
                  <p className="eyebrow">Request a consultation</p>
                  <Field label="Name" name="name" />
                  <Field label="Email" name="email" type="email" />
                  <Field label="Phone" name="phone" type="tel" />
                  <Field label="Project location" name="location" placeholder="City, NJ" />
                  <div>
                    <label className="text-[0.68rem] uppercase tracking-[0.28em] text-ink/60">
                      Tell us about your project
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 focus:border-[color:var(--gold)] focus:outline-none resize-none text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-3 bg-ink px-8 py-4 text-[0.72rem] uppercase tracking-[0.32em] text-cream hover:bg-[color:var(--gold)] transition-colors"
                  >
                    Send inquiry
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[0.68rem] uppercase tracking-[0.28em] text-ink/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 focus:border-[color:var(--gold)] focus:outline-none text-sm"
      />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="text-[color:var(--gold-soft)] shrink-0 mt-1">{icon}</span>
      <div>
        <p className="eyebrow text-[color:var(--gold-soft)]">{label}</p>
        <p className="display mt-2 text-2xl md:text-3xl">{value}</p>
      </div>
    </>
  );
  return href ? (
    <a
      href={href}
      className="flex items-start gap-5 border-t border-cream/20 pt-8 hover:text-[color:var(--gold-soft)] transition-colors"
    >
      {inner}
    </a>
  ) : (
    <div className="flex items-start gap-5 border-t border-cream/20 pt-8">{inner}</div>
  );
}
