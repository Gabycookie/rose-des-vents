"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1706027302476-8b0c23299693?w=1920&h=1080&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative text-center text-cream px-4 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.4em] mb-6 opacity-90">
          {lang === "fr" ? "Fait main au Québec" : "Handmade in Quebec"}
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-wide mb-6">
          {lang === "fr" ? (
            <>Tricoté avec amour,<br />porté avec fierté</>
          ) : (
            <>Knitted with love,<br />worn with pride</>
          )}
        </h2>
        <p className="text-sm sm:text-base opacity-80 mb-10 max-w-md mx-auto leading-relaxed">
          {tr.heroSub}
        </p>
        <Link href="/collections/tuques">
          <Button
            variant="outline"
            size="lg"
            className="!bg-cream !text-forest !border-cream hover:!bg-white"
          >
            {tr.heroBtn}
          </Button>
        </Link>
      </div>
    </section>
  );
}
