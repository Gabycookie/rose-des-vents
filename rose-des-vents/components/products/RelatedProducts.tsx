"use client";

import { Product, products } from "@/data/products";
import ProductCard from "./ProductCard";
import FadeIn from "@/components/ui/FadeIn";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function RelatedProducts({ product }: { product: Product }) {
  const { lang } = useLang();
  const tr = t[lang];

  const related = products
    .filter((p) => p.collection === product.collection && p.id !== product.id)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-20 border-t border-wool pt-16">
      <FadeIn>
        <h2 className="font-serif text-2xl sm:text-3xl tracking-wide text-center mb-12">
          {tr.youMightAlsoLike}
        </h2>
      </FadeIn>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
        {related.map((p, i) => (
          <FadeIn key={p.id} delay={i * 120}>
            <ProductCard product={p} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
