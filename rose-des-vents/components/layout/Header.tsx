"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Show, UserButton } from "@clerk/nextjs";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";
import MobileMenu from "./MobileMenu";
import CartDrawer from "./CartDrawer";
import SearchOverlay from "./SearchOverlay";

export default function Header() {
  const { totalItems, openCart } = useCart();
  const { count: wishlistCount } = useWishlist();
  const { lang, toggle } = useLang();
  const tr = t[lang];
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
                {tr.tuques}
              </Link>
              <Link
                href="/collections/foulards"
                className="text-xs uppercase tracking-[0.2em] text-charcoal hover:text-forest transition-colors"
              >
                {tr.scarves}
              </Link>
              <Link
                href="/collections/ensembles"
                className="text-xs uppercase tracking-[0.2em] text-charcoal hover:text-forest transition-colors"
              >
                {tr.sets}
              </Link>
            </nav>

            {/* Logo */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <h1 className="font-serif text-xl sm:text-2xl tracking-[0.15em] text-charcoal">
                ROSE DES VENTS
              </h1>
            </Link>

            {/* Right actions */}
            <div className="flex items-center gap-1 sm:gap-3">
              {/* Search — visible on all sizes */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-charcoal hover:text-forest transition-colors"
                aria-label={lang === "fr" ? "Rechercher" : "Search"}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Wishlist — hidden on mobile (in mobile menu) */}
              <Link
                href="/wishlist"
                className="relative p-2 text-charcoal hover:text-forest transition-colors hidden sm:flex"
                aria-label="Liste de souhaits"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-forest text-cream text-[10px] rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart — visible on all sizes */}
              <button
                onClick={openCart}
                className="relative p-2 text-charcoal hover:text-forest transition-colors"
                aria-label="Panier"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-forest text-cream text-[10px] rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Language toggle — hidden on mobile (in mobile menu) */}
              <button
                onClick={toggle}
                className="hidden sm:block text-xs uppercase tracking-[0.15em] text-charcoal/60 hover:text-forest transition-colors px-1"
              >
                {lang === "fr" ? "EN" : "FR"}
              </button>

              {/* User — hidden on mobile (in mobile menu) */}
              <Show when="signed-out">
                <Link
                  href="/sign-in"
                  className="hidden sm:flex p-2 text-charcoal hover:text-forest transition-colors"
                  aria-label="Se connecter"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </Link>
              </Show>
              <Show when="signed-in">
                <div className="hidden sm:block">
                  <UserButton />
                </div>
              </Show>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
      <CartDrawer />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
