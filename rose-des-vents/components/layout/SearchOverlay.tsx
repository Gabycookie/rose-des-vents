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

const collectionLabel: Record<string, { fr: string; en: string }> = {
  tuques: { fr: "Tuques", en: "Toques" },
  foulards: { fr: "Foulards", en: "Scarves" },
  ensembles: { fr: "Ensembles Cadeaux", en: "Gift Sets" },
};

const quickLinks = [
  { href: "/collections/tuques", fr: "Tuques", en: "Toques" },
  { href: "/collections/foulards", fr: "Foulards", en: "Scarves" },
  { href: "/collections/ensembles", fr: "Ensembles Cadeaux", en: "Gift Sets" },
];

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { lang } = useLang();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
  }, [isOpen]);

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
          .slice(0, 6)
      : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[59] bg-charcoal/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel — slides down from top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-0 left-0 right-0 z-[60] bg-snow shadow-2xl"
          >
            <div className="max-w-2xl mx-auto px-5 py-6">
              {/* Input row */}
              <div className="flex items-center gap-3 bg-cream rounded-xl px-4 py-3">
                <svg
                  className="w-5 h-5 text-forest flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
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
                  className="flex-1 bg-transparent text-base text-charcoal placeholder:text-charcoal/40 focus:outline-none"
                />
                {query.length > 0 && (
                  <button
                    onClick={() => setQuery("")}
                    className="text-charcoal/40 hover:text-charcoal transition-colors"
                    aria-label="Clear"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="ml-1 text-xs uppercase tracking-[0.12em] text-charcoal/50 hover:text-charcoal transition-colors border-l border-wool pl-3"
                >
                  {lang === "fr" ? "Fermer" : "Close"}
                </button>
              </div>

              {/* Results */}
              <AnimatePresence mode="wait">
                {results.length > 0 && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="mt-4 space-y-1"
                  >
                    {results.map((product, i) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <Link
                          href={`/products/${product.slug}`}
                          onClick={onClose}
                          className="flex items-center gap-4 px-3 py-2.5 rounded-lg hover:bg-cream transition-colors group"
                        >
                          <div className="relative w-11 h-13 flex-shrink-0 rounded-md overflow-hidden bg-wool">
                            <Image
                              src={product.images[0]}
                              alt={lang === "en" ? product.name_en : product.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="44px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-charcoal group-hover:text-forest transition-colors truncate">
                              {lang === "en" ? product.name_en : product.name}
                            </p>
                            <p className="text-xs text-charcoal/40 mt-0.5">
                              {collectionLabel[product.collection]?.[lang] ?? product.collection}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="text-sm text-charcoal/70">{formatPrice(product.price)}</span>
                            <span className="text-forest opacity-0 group-hover:opacity-100 transition-opacity">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {query.trim().length > 1 && results.length === 0 && (
                  <motion.p
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-charcoal/40 text-sm py-8"
                  >
                    {lang === "fr"
                      ? `Aucun résultat pour « ${query} »`
                      : `No results for "${query}"`}
                  </motion.p>
                )}

                {query.trim().length <= 1 && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="pt-5 pb-2"
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-charcoal/35 mb-3 px-1">
                      {lang === "fr" ? "Collections" : "Browse collections"}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {quickLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={onClose}
                          className="px-4 py-2 rounded-full bg-cream text-sm text-charcoal hover:bg-forest hover:text-snow transition-colors"
                        >
                          {lang === "fr" ? link.fr : link.en}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
