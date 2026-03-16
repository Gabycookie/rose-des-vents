"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const tr = t[lang];
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  return (
    <footer className="bg-forest text-cream">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-xl tracking-[0.15em] mb-4">ROSE DES VENTS</h3>
            <p className="text-sm text-cream/70 leading-relaxed">{tr.footerTagline}</p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-4">{tr.footerCollections}</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/collections/tuques" className="text-sm text-cream/70 hover:text-cream transition-colors">{tr.tuques}</Link>
              <Link href="/collections/foulards" className="text-sm text-cream/70 hover:text-cream transition-colors">{tr.scarves}</Link>
              <Link href="/collections/ensembles" className="text-sm text-cream/70 hover:text-cream transition-colors">{tr.giftSets}</Link>
            </nav>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-4">{tr.footerInfo}</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-cream/70 hover:text-cream transition-colors">{tr.footerOurStory}</Link>
              <Link href="/" className="text-sm text-cream/70 hover:text-cream transition-colors">{tr.footerSizeGuide}</Link>
              <Link href="/" className="text-sm text-cream/70 hover:text-cream transition-colors">{tr.footerCare}</Link>
              <Link href="/" className="text-sm text-cream/70 hover:text-cream transition-colors">{tr.footerContact}</Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-4">{tr.footerNewsletter}</h4>
            <p className="text-sm text-cream/70 mb-4">{tr.footerNewsletterSub}</p>
            {status === "ok" ? (
              <p className="text-sm text-cream/80">{lang === "fr" ? "Merci ! Vous êtes inscrit·e." : "Thanks! You're subscribed."}</p>
            ) : (
              <form
                className="flex"
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!email) return;
                  setStatus("loading");
                  try {
                    const res = await fetch("/api/newsletter", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email }),
                    });
                    setStatus(res.ok ? "ok" : "error");
                  } catch {
                    setStatus("error");
                  }
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={tr.footerEmailPlaceholder}
                  className="flex-1 bg-transparent border border-cream/30 px-3 py-2 text-sm placeholder:text-cream/40 focus:outline-none focus:border-cream/60 rounded-l-md"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-cream text-forest px-4 py-2 text-xs uppercase tracking-wider hover:bg-wool transition-colors rounded-r-md disabled:opacity-50"
                >
                  {status === "loading" ? "…" : "OK"}
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="text-xs text-red-300 mt-1">{lang === "fr" ? "Erreur, réessayez." : "Error, please try again."}</p>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-cream/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/50">© 2026 Rose des Vents. {tr.footerRights}</p>
          <div className="flex items-center gap-4 text-xs text-cream/50">
            <Link href="/" className="hover:text-cream transition-colors">{tr.footerPrivacy}</Link>
            <Link href="/" className="hover:text-cream transition-colors">{tr.footerTerms}</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
