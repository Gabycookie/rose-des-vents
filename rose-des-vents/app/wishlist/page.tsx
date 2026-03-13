"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ProductGrid from "@/components/products/ProductGrid";
import { useWishlist } from "@/context/WishlistContext";
import { products } from "@/data/products";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function WishlistPage() {
  const { wishlistIds } = useWishlist();
  const { lang } = useLang();
  const tr = t[lang];
  const wishlisted = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="pt-28 sm:pt-32 pb-20">
      <Container>
        <h1 className="font-serif text-3xl sm:text-4xl tracking-wide text-center mb-12">
          {tr.myWishlist}
        </h1>

        {wishlisted.length === 0 ? (
          <div className="text-center py-16">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-charcoal/20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <p className="text-charcoal/50 mb-6">{tr.wishlistEmpty}</p>
            <Link href="/collections/tuques">
              <Button variant="outline">{tr.discoverProducts}</Button>
            </Link>
          </div>
        ) : (
          <ProductGrid products={wishlisted} />
        )}
      </Container>
    </div>
  );
}
