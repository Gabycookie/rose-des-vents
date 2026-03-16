"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useLang } from "@/context/LanguageContext";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { lang } = useLang();

  // Focus input and lock scroll when open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const results =
    query.trim().length > 1
      ? products
          .filter((p) => {
            const q = query.toLowerCase();
            return (
              p.name.toLowerCase().includes(q) ||
              p.name_en.toLowerCase().includes(q) ||
              p.description.toLowerCase().includes(q) ||
              p.description_en.toLowerCase().includes(q) ||
              p.collection.toLowerCase().includes(q)
            );
          })
          .slice(0, 7)
      : [];

  const collectionLabel: Record<string, { fr: string; en: string }> = {
    tuques: { fr: "Tuques", en: "Toques" },
    foulards: { fr: "Foulards", en: "Scarves" },
    ensembles: { fr: "Ensembles Cadeaux", en: "Gift Sets" },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[60] bg-snow/97 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <div className="max-w-2xl mx-auto px-4 pt-24 sm:pt-32">
            {/* Search input */}
            <div className="flex items-center border-b-2 border-forest pb-3 mb-8">
              <svg
                className="w-5 h-5 text-charcoal/40 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={
                  lang === "fr"
                    ? "Rechercher un produit..."
                    : "Search for a product..."
                }
                className="flex-1 bg-transparent text-lg text-charcoal placeholder:text-charcoal/30 focus:outline-none"
              />
              <button
                onClick={onClose}
                className="text-charcoal/40 hover:text-charcoal transition-colors ml-3"
                aria-label="Fermer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Results */}
            {results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="divide-y divide-wool"
              >
                {results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-4 py-3 hover:bg-cream/60 px-2 -mx-2 transition-colors group"
                  >
                    <div className="relative w-12 h-14 flex-shrink-0 bg-wool overflow-hidden">
                      <Image
                        src={product.images[0]}
                        alt={lang === "en" ? product.name_en : product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-charcoal group-hover:text-forest transition-colors truncate">
                        {lang === "en" ? product.name_en : product.name}
                      </p>
                      <p className="text-xs text-charcoal/40 mt-0.5">
                        {collectionLabel[product.collection]?.[lang] ??
                          product.collection}
                      </p>
                    </div>
                    <p className="text-sm text-charcoal/60 flex-shrink-0">
                      {formatPrice(product.price)}
                    </p>
                  </Link>
                ))}
              </motion.div>
            )}

            {/* No results */}
            {query.trim().length > 1 && results.length === 0 && (
              <p className="text-center text-charcoal/40 text-sm py-10">
                {lang === "fr"
                  ? `Aucun résultat pour « ${query} »`
                  : `No results for "${query}"`}
              </p>
            )}

            {/* Idle hint */}
            {query.trim().length <= 1 && (
              <p className="text-center text-charcoal/30 text-xs uppercase tracking-[0.25em] pt-6">
                {lang === "fr"
                  ? "Commencez à taper pour chercher"
                  : "Start typing to search"}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
