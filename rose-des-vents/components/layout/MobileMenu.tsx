"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Show, UserButton } from "@clerk/nextjs";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";
import { useWishlist } from "@/context/WishlistContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { lang, toggle } = useLang();
  const { count: wishlistCount } = useWishlist();
  const tr = t[lang];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-charcoal/40 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-snow z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-wool">
          <span className="font-serif text-lg tracking-[0.15em]">MENU</span>
          <button onClick={onClose} className="p-2 text-charcoal" aria-label="Fermer le menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-6 flex flex-col gap-6">
          <Link href="/collections/tuques" onClick={onClose} className="text-sm uppercase tracking-[0.2em] text-charcoal hover:text-forest transition-colors">
            {tr.tuques}
          </Link>
          <Link href="/collections/foulards" onClick={onClose} className="text-sm uppercase tracking-[0.2em] text-charcoal hover:text-forest transition-colors">
            {tr.scarves}
          </Link>
          <Link href="/collections/ensembles" onClick={onClose} className="text-sm uppercase tracking-[0.2em] text-charcoal hover:text-forest transition-colors">
            {tr.giftSets}
          </Link>
          <hr className="border-wool" />
          <Link href="/" onClick={onClose} className="text-sm uppercase tracking-[0.2em] text-charcoal/60 hover:text-forest transition-colors">
            {tr.home}
          </Link>
          <Link href="/wishlist" onClick={onClose} className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-charcoal/60 hover:text-forest transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {tr.wishlist ?? "Wishlist"}
            {wishlistCount > 0 && (
              <span className="ml-1 w-5 h-5 bg-forest text-cream text-[10px] rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
          <hr className="border-wool" />
          {/* Language + Account */}
          <button
            onClick={() => { toggle(); onClose(); }}
            className="text-left text-sm uppercase tracking-[0.2em] text-charcoal/60 hover:text-forest transition-colors"
          >
            {lang === "fr" ? "English" : "Français"}
          </button>
          <Show when="signed-out">
            <Link href="/sign-in" onClick={onClose} className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-charcoal/60 hover:text-forest transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {tr.signIn ?? "Sign in"}
            </Link>
          </Show>
          <Show when="signed-in">
            <div className="flex items-center gap-3">
              <UserButton />
              <Link href="/profile" onClick={onClose} className="text-sm uppercase tracking-[0.2em] text-charcoal/60 hover:text-forest transition-colors">
                {tr.myAccount ?? "My Account"}
              </Link>
            </div>
          </Show>
        </nav>
      </div>
    </>
  );
}
