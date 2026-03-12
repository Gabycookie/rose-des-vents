"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group">
      <Link
        href={`/products/${product.slug}`}
        className="block relative aspect-[3/4] overflow-hidden bg-wool mb-4"
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

      <div className="flex items-start justify-between gap-2">
        <div>
          <Link href={`/products/${product.slug}`}>
            <h3 className="text-sm font-sans hover:text-forest transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-charcoal/60 mt-0.5">
            {formatPrice(product.price)}
          </p>
        </div>
        <button
          onClick={() => addItem(product, product.colors[0].name)}
          className="flex-shrink-0 text-xs uppercase tracking-wider text-forest border border-forest/30 px-3 py-1.5 hover:bg-forest hover:text-cream transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          Ajouter
        </button>
      </div>

      {/* Color swatches */}
      <div className="flex gap-1.5 mt-2">
        {product.colors.map((color) => (
          <span
            key={color.name}
            title={color.name}
            className="w-3 h-3 rounded-full border border-charcoal/10"
            style={{ backgroundColor: color.hex }}
          />
        ))}
      </div>
    </div>
  );
}
