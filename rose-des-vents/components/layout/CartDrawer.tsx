"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { useCheckout } from "@/lib/useCheckout";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();
  const { startCheckout, isLoading, error } = useCheckout();
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
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-charcoal/40 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-snow z-50 transform transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-wool">
          <span className="font-serif text-lg tracking-[0.15em]">{tr.cartTitle}</span>
          <button onClick={closeCart} className="p-2 text-charcoal" aria-label="Fermer">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-charcoal/50">
              <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-sm">{tr.cartEmpty}</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.color}`} className="flex gap-4">
                  <div className="relative w-20 h-24 bg-wool flex-shrink-0">
                    <Image src={item.product.images[0]} alt={lang === "en" ? item.product.name_en : item.product.name} fill className="object-cover" sizes="80px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-sans truncate">{lang === "en" ? item.product.name_en : item.product.name}</h4>
                    <p className="text-xs text-charcoal/50 mt-0.5">
                      {lang === "en"
                        ? (item.product.colors.find((c) => c.name === item.color)?.name_en ?? item.color)
                        : item.color}
                    </p>
                    <p className="text-sm mt-1">{formatPrice(item.product.price)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => updateQuantity(item.product.id, item.color, item.quantity - 1)} className="w-7 h-7 border border-wool flex items-center justify-center text-xs hover:border-forest transition-colors">−</button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.color, item.quantity + 1)} className="w-7 h-7 border border-wool flex items-center justify-center text-xs hover:border-forest transition-colors">+</button>
                      <button onClick={() => removeItem(item.product.id, item.color)} className="ml-auto text-charcoal/40 hover:text-charcoal transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-wool">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm uppercase tracking-wide">{tr.subtotal}</span>
              <span className="text-sm font-serif">{formatPrice(totalPrice)}</span>
            </div>
            {error && <p className="text-xs text-red-600 mb-2 text-center">{error}</p>}
            <Button className="w-full" size="lg" onClick={() => startCheckout(items)} disabled={isLoading}>
              {isLoading ? tr.redirecting : tr.checkout}
            </Button>
            <p className="text-[10px] text-charcoal/40 text-center mt-3">{tr.taxNote}</p>
          </div>
        )}
      </div>
    </>
  );
}
