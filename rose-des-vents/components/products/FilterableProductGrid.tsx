"use client";

import { useState, useMemo } from "react";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";
import FadeIn from "@/components/ui/FadeIn";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

type SortKey = "default" | "price-asc" | "price-desc" | "name-az";

export default function FilterableProductGrid({
  products,
}: {
  products: Product[];
}) {
  const { lang } = useLang();
  const tr = t[lang];
  const [sort, setSort] = useState<SortKey>("default");
  const [activeColor, setActiveColor] = useState<string | null>(null);

  // Collect unique colors across all products in this collection
  const allColors = useMemo(() => {
    const seen = new Map<string, { name: string; name_en: string; hex: string }>();
    for (const p of products) {
      for (const c of p.colors) {
        if (!seen.has(c.hex)) seen.set(c.hex, c);
      }
    }
    return Array.from(seen.values());
  }, [products]);

  const filtered = useMemo(() => {
    let list = [...products];

    // Color filter
    if (activeColor) {
      list = list.filter((p) => p.colors.some((c) => c.hex === activeColor));
    }

    // Sort
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "name-az":
        list.sort((a, b) =>
          (lang === "en" ? a.name_en : a.name).localeCompare(
            lang === "en" ? b.name_en : b.name
          )
        );
        break;
    }

    return list;
  }, [products, sort, activeColor, lang]);

  return (
    <div>
      {/* Controls bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-wool">
        {/* Color filter */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs uppercase tracking-[0.15em] text-charcoal/40 mr-1">
            {tr.colorLabel}
          </span>
          <button
            onClick={() => setActiveColor(null)}
            className={`text-xs uppercase tracking-[0.1em] px-3 py-1 border rounded-md transition-colors ${
              activeColor === null
                ? "border-forest text-forest"
                : "border-wool text-charcoal/40 hover:border-charcoal/40"
            }`}
          >
            {tr.allColors}
          </button>
          {allColors.map((color) => (
            <button
              key={color.hex}
              onClick={() =>
                setActiveColor(activeColor === color.hex ? null : color.hex)
              }
              title={lang === "en" ? color.name_en : color.name}
              className={`w-6 h-6 rounded-full border-2 transition-all ${
                activeColor === color.hex
                  ? "border-forest scale-110"
                  : "border-transparent hover:border-charcoal/30"
              }`}
              style={{ backgroundColor: color.hex, outline: "1px solid #e8e4dc" }}
            />
          ))}
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-[0.15em] text-charcoal/40">
            {tr.sortBy}
          </span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="text-xs uppercase tracking-[0.1em] border border-wool rounded-md bg-transparent text-charcoal px-3 py-1.5 focus:border-forest focus:outline-none cursor-pointer"
          >
            <option value="default">—</option>
            <option value="price-asc">{tr.priceLowHigh}</option>
            <option value="price-desc">{tr.priceHighLow}</option>
            <option value="name-az">{tr.nameAZ}</option>
          </select>
        </div>
      </div>

      {/* Results count when filtered */}
      {activeColor && (
        <p className="text-xs text-charcoal/40 mb-6 uppercase tracking-[0.15em]">
          {filtered.length} {tr.filterResults}
        </p>
      )}

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((product, i) => (
            <FadeIn key={product.id} delay={i * 60}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      ) : (
        <p className="text-center text-charcoal/40 text-sm py-16 uppercase tracking-[0.2em]">
          {lang === "fr" ? "Aucun résultat" : "No results"}
        </p>
      )}
    </div>
  );
}
