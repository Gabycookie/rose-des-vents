"use client";

import { Collection } from "@/data/collections";
import { useLang } from "@/context/LanguageContext";

export default function CollectionHeader({ collection }: { collection: Collection }) {
  const { lang } = useLang();
  const name = lang === "en" ? collection.name_en : collection.name;
  const description = lang === "en" ? collection.description_en : collection.description;

  return (
    <div className="text-center mb-14">
      <p className="text-xs uppercase tracking-[0.3em] text-bark mb-3">
        Collection
      </p>
      <h1 className="font-serif text-4xl sm:text-5xl tracking-wide mb-4">
        {name}
      </h1>
      <p className="text-sm text-charcoal/60 max-w-lg mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
