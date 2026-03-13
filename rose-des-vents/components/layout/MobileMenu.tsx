"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { lang } = useLang();
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
        </nav>
      </div>
    </>
  );
}
