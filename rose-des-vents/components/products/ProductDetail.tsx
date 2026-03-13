"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { formatPrice, cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [openDetail, setOpenDetail] = useState<string | null>(null);
  const { addItem } = useCart();
  const { lang } = useLang();
  const tr = t[lang];

  const name = lang === "en" ? product.name_en : product.name;
  const description = lang === "en" ? product.description_en : product.description;
  const details = lang === "en"
    ? [
        { key: "materials", label: tr.detailMaterials, content: product.details_en.materials },
        { key: "care", label: tr.detailCare, content: product.details_en.care },
        { key: "sizing", label: tr.detailSizing, content: product.details_en.sizing },
      ]
    : [
        { key: "materials", label: tr.detailMaterials, content: product.details.materials },
        { key: "care", label: tr.detailCare, content: product.details.care },
        { key: "sizing", label: tr.detailSizing, content: product.details.sizing },
      ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
      {/* Images */}
      <div>
        <div className="relative aspect-[3/4] bg-wool overflow-hidden mb-3">
          <Image
            src={product.images[selectedImage]}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex gap-3">
          {product.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(i)}
              className={cn(
                "relative w-20 h-24 bg-wool overflow-hidden",
                selectedImage === i && "ring-1 ring-forest"
              )}
            >
              <Image
                src={img}
                alt={`${name} ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="lg:py-8">
        <p className="text-xs uppercase tracking-[0.3em] text-bark mb-2">
          Rose des Vents
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl tracking-wide mb-3">
          {name}
        </h1>
        <p className="text-lg mb-6">{formatPrice(product.price)}</p>

        <p className="text-sm text-charcoal/70 leading-relaxed mb-8">
          {description}
        </p>

        {/* Color picker */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] mb-3">
            {tr.colorLabel} —{" "}
            {lang === "en"
              ? (product.colors.find((c) => c.name === selectedColor)?.name_en ?? selectedColor)
              : selectedColor}
          </p>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={cn(
                  "w-8 h-8 rounded-full border-2 transition-all",
                  selectedColor === color.name
                    ? "border-forest scale-110"
                    : "border-transparent hover:border-charcoal/20"
                )}
                title={lang === "en" ? color.name_en : color.name}
              >
                <span
                  className="block w-full h-full rounded-full border border-charcoal/10"
                  style={{ backgroundColor: color.hex }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Add to cart */}
        <Button
          onClick={() => product.inStock !== false && addItem(product, selectedColor)}
          size="lg"
          className="w-full mb-4"
          disabled={product.inStock === false}
        >
          {product.inStock === false ? tr.outOfStock : `${tr.addToCart} — ${formatPrice(product.price)}`}
        </Button>

        <p className="text-[10px] text-charcoal/40 text-center mb-10">
          {tr.freeShippingNote}
        </p>

        {/* Details accordion */}
        <div className="border-t border-wool">
          {details.map((detail) => (
            <div key={detail.key} className="border-b border-wool">
              <button
                onClick={() =>
                  setOpenDetail(openDetail === detail.key ? null : detail.key)
                }
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="text-xs uppercase tracking-[0.2em]">
                  {detail.label}
                </span>
                <svg
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    openDetail === detail.key && "rotate-45"
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openDetail === detail.key ? "max-h-40 pb-4" : "max-h-0"
                )}
              >
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  {detail.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
