"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import MobileMenu from "./MobileMenu";
import CartDrawer from "./CartDrawer";

export default function Header() {
  const { totalItems, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-snow/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-charcoal"
              aria-label="Ouvrir le menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Desktop nav left */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/collections/tuques"
                className="text-xs uppercase tracking-[0.2em] text-charcoal hover:text-forest transition-colors"
              >
                Tuques
              </Link>
              <Link
                href="/collections/foulards"
                className="text-xs uppercase tracking-[0.2em] text-charcoal hover:text-forest transition-colors"
              >
                Foulards
              </Link>
              <Link
                href="/collections/ensembles"
                className="text-xs uppercase tracking-[0.2em] text-charcoal hover:text-forest transition-colors"
              >
                Ensembles
              </Link>
            </nav>

            {/* Logo */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <h1 className="font-serif text-xl sm:text-2xl tracking-[0.15em] text-charcoal">
                ROSE DES VENTS
              </h1>
            </Link>

            {/* Right actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={openCart}
                className="relative p-2 text-charcoal hover:text-forest transition-colors"
                aria-label="Panier"
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
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-forest text-cream text-[10px] rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
      <CartDrawer />
    </>
  );
}
