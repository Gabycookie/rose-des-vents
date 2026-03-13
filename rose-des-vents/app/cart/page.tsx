"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { useCheckout } from "@/lib/useCheckout";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const { startCheckout, isLoading, error } = useCheckout();

  return (
    <div className="pt-28 sm:pt-32 pb-20">
      <Container className="max-w-4xl">
        <h1 className="font-serif text-3xl sm:text-4xl tracking-wide text-center mb-12">
          Panier
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-charcoal/20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <p className="text-charcoal/50 mb-6">Votre panier est vide</p>
            <Link href="/collections/tuques">
              <Button variant="outline">Continuer vos achats</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Items */}
            <div className="lg:col-span-2">
              <div className="border-b border-wool pb-2 mb-6 hidden sm:grid grid-cols-[1fr_100px_100px_40px] gap-4 text-xs uppercase tracking-[0.2em] text-charcoal/40">
                <span>Produit</span>
                <span className="text-center">Quantité</span>
                <span className="text-right">Total</span>
                <span />
              </div>

              <div className="divide-y divide-wool">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.color}`}
                    className="py-6 sm:grid sm:grid-cols-[1fr_100px_100px_40px] sm:gap-4 sm:items-center"
                  >
                    <div className="flex gap-4">
                      <div className="relative w-20 h-24 bg-wool flex-shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div>
                        <Link
                          href={`/products/${item.product.slug}`}
                          className="text-sm hover:text-forest transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-xs text-charcoal/50 mt-0.5">
                          {item.color}
                        </p>
                        <p className="text-sm mt-1">
                          {formatPrice(item.product.price)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-3 mt-4 sm:mt-0">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.color,
                            item.quantity - 1
                          )
                        }
                        className="w-8 h-8 border border-wool flex items-center justify-center text-sm hover:border-forest transition-colors"
                      >
                        −
                      </button>
                      <span className="text-sm w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.color,
                            item.quantity + 1
                          )
                        }
                        className="w-8 h-8 border border-wool flex items-center justify-center text-sm hover:border-forest transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-sm text-right hidden sm:block">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>

                    <button
                      onClick={() =>
                        removeItem(item.product.id, item.color)
                      }
                      className="hidden sm:flex items-center justify-center text-charcoal/30 hover:text-charcoal transition-colors"
                      aria-label="Retirer"
                    >
                      <svg
                        className="w-4 h-4"
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
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="bg-cream p-8">
              <h2 className="font-serif text-xl tracking-wide mb-6">
                Résumé
              </h2>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-charcoal/60">Sous-total</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/60">Livraison</span>
                  <span className="text-charcoal/60">
                    {totalPrice >= 100 ? "Gratuite" : "Calculée à la caisse"}
                  </span>
                </div>
              </div>
              <div className="border-t border-bark/10 pt-4 mb-6">
                <div className="flex justify-between text-base">
                  <span className="font-serif">Total</span>
                  <span className="font-serif">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
              </div>
              {error && (
                <p className="text-xs text-red-600 mb-2 text-center">{error}</p>
              )}
              <Button
                className="w-full"
                size="lg"
                onClick={() => startCheckout(items)}
                disabled={isLoading}
              >
                {isLoading ? "Redirection…" : "Passer à la caisse"}
              </Button>
              <p className="text-[10px] text-charcoal/40 text-center mt-3">
                Taxes calculées à la caisse
              </p>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
