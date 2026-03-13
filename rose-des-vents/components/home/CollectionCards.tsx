"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { collections } from "@/data/collections";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function CollectionCards() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <section className="py-20 sm:py-28 bg-cream">
      <Container>
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-bark mb-3">{tr.collectionsLabel}</p>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-wide">{tr.collectionsTitle}</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection, i) => (
            <FadeIn key={collection.slug} delay={i * 150}>
              <Link href={`/collections/${collection.slug}`} className="group relative aspect-[4/5] overflow-hidden block">
                <Image src={collection.image} alt={collection.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <h3 className="font-serif text-2xl text-cream tracking-wide">{lang === "en" ? collection.name_en : collection.name}</h3>
                    <span className="inline-block mt-2 text-xs uppercase tracking-[0.2em] text-cream/80 border-b border-cream/40 pb-0.5 group-hover:border-cream transition-colors">
                      {tr.discover}
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
