"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { lang } = useLang();
  const tr = t[lang];
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="group">
      <div className="relative">
      <Link
        href={`/products/${product.slug}`}
        className="block relative aspect-[3/4] overflow-hidden bg-wool mb-4 rounded-lg"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {product.images[1] && (
          <Image
            src={product.images[1]}
            alt={product.name}
            fill
            className="object-cover transition-all duration-700 opacity-0 group-hover:opacity-100"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
      </Link>
      <button
        onClick={() => toggleWishlist(product.id)}
        className="absolute top-2 right-2 p-1.5 bg-snow/80 backdrop-blur-sm rounded-full text-charcoal hover:text-forest transition-colors z-10"
        aria-label={wishlisted ? "Retirer des souhaits" : "Ajouter aux souhaits"}
      >
        <svg className="w-4 h-4" fill={wishlisted ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
      </div>

      <div className="flex items-start justify-between gap-2">
        <div>
          <Link href={`/products/${product.slug}`}>
            <h3 className="text-sm font-sans hover:text-forest transition-colors">
              {lang === "en" ? product.name_en : product.name}
            </h3>
          </Link>
          <p className="text-sm text-charcoal/60 mt-0.5">
            {formatPrice(product.price)}
          </p>
        </div>
        {product.inStock === false ? (
          <span className="flex-shrink-0 text-xs uppercase tracking-wider text-charcoal/40 border border-charcoal/20 px-3 py-1.5 rounded-md">
            {tr.outOfStock}
          </span>
        ) : (
          <button
            onClick={() => addItem(product, product.colors[0].name)}
            className="flex-shrink-0 text-xs uppercase tracking-wider text-forest border border-forest/30 px-3 py-1.5 hover:bg-forest hover:text-cream transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-md"
          >
            {tr.addToCart}
          </button>
        )}
      </div>

      {/* Color swatches */}
      <div className="flex gap-1.5 mt-2">
        {product.colors.map((color) => (
          <span
            key={color.name}
            title={lang === "en" ? color.name_en : color.name}
            className="w-3 h-3 rounded-full border border-charcoal/10"
            style={{ backgroundColor: color.hex }}
          />
        ))}
      </div>
    </div>
  );
}
