"use client";

import { useEffect, useState } from "react";
import { Product, products as allProducts } from "@/data/products";
import ProductCard from "./ProductCard";
import FadeIn from "@/components/ui/FadeIn";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

const STORAGE_KEY = "rdv_recently_viewed";
const MAX_STORED = 8;

export default function RecentlyViewed({ currentId }: { currentId: string }) {
  const { lang } = useLang();
  const tr = t[lang];
  const [viewed, setViewed] = useState<Product[]>([]);

  useEffect(() => {
    // 1. Read existing list
    let ids: string[] = [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) ids = JSON.parse(raw);
    } catch {}

    // 2. Add current product to front, deduplicate, limit
    ids = [currentId, ...ids.filter((id) => id !== currentId)].slice(
      0,
      MAX_STORED
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));

    // 3. Build display list (exclude current, max 4)
    const displayIds = ids.filter((id) => id !== currentId).slice(0, 4);
    const displayProducts = displayIds
      .map((id) => allProducts.find((p) => p.id === id))
      .filter(Boolean) as Product[];

    setViewed(displayProducts);
  }, [currentId]);

  if (viewed.length === 0) return null;

  return (
    <section className="mt-20 border-t border-wool pt-16">
      <FadeIn>
        <h2 className="font-serif text-2xl sm:text-3xl tracking-wide text-center mb-12">
          {tr.recentlyViewed}
        </h2>
      </FadeIn>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {viewed.map((product, i) => (
          <FadeIn key={product.id} delay={i * 80}>
            <ProductCard product={product} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
