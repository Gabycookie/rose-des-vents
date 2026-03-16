"use client";

import { useEffect, useState } from "react";
import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useWishlist } from "@/context/WishlistContext";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

interface Order {
  ref: string;
  date: string;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const, delay },
});

export default function ProfilePage() {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  const { count: wishlistCount } = useWishlist();
  const { lang } = useLang();
  const tr = t[lang];
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (isLoaded && !user) router.push("/sign-in");
  }, [isLoaded, user, router]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("rdv_orders");
      if (stored) setOrders(JSON.parse(stored));
    } catch {}
  }, []);

  if (!isLoaded || !user) return null;

  const initials = user.fullName
    ? user.fullName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : user.primaryEmailAddress?.emailAddress?.[0]?.toUpperCase() ?? "?";

  return (
    <div className="min-h-screen bg-snow pt-20">
      {/* Hero banner */}
      <div className="bg-forest">
        <Container className="max-w-3xl">
          <div className="py-10 flex items-center gap-6">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              {user.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={user.imageUrl}
                  alt={user.fullName ?? ""}
                  className="w-20 h-20 rounded-full object-cover ring-4 ring-snow/20"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-pine ring-4 ring-snow/20 flex items-center justify-center">
                  <span className="font-serif text-2xl text-snow">{initials}</span>
                </div>
              )}
              <span className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-green-400 rounded-full ring-2 ring-forest" />
            </div>

            {/* Name + email */}
            <div>
              <motion.p
                {...fadeUp(0.05)}
                className="font-serif text-2xl text-snow leading-tight"
              >
                {user.fullName ?? lang === "fr" ? "Mon compte" : "My account"}
              </motion.p>
              <motion.p {...fadeUp(0.1)} className="text-snow/60 text-sm mt-1">
                {user.primaryEmailAddress?.emailAddress}
              </motion.p>
            </div>
          </div>
        </Container>
      </div>

      {/* Stats strip */}
      <div className="bg-cream border-b border-wool">
        <Container className="max-w-3xl">
          <div className="grid grid-cols-2 divide-x divide-wool">
            <Link
              href="/wishlist"
              className="py-5 text-center group hover:bg-wool/40 transition-colors"
            >
              <p className="font-serif text-3xl text-forest group-hover:scale-105 transition-transform inline-block">
                {wishlistCount}
              </p>
              <p className="text-xs uppercase tracking-[0.15em] text-charcoal/50 mt-1">
                {lang === "fr" ? "Favoris" : "Saved items"}
              </p>
            </Link>
            <div className="py-5 text-center">
              <p className="font-serif text-3xl text-forest">{orders.length}</p>
              <p className="text-xs uppercase tracking-[0.15em] text-charcoal/50 mt-1">
                {lang === "fr" ? "Commandes" : "Orders"}
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Main content */}
      <Container className="max-w-3xl py-10 space-y-8">
        {/* Wishlist card */}
        <motion.div {...fadeUp(0.1)} className="bg-white rounded-xl border border-wool overflow-hidden">
          <div className="px-6 py-4 border-b border-wool flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h2 className="font-serif text-lg text-charcoal">{tr.myWishlist}</h2>
            </div>
            <Link
              href="/wishlist"
              className="text-xs uppercase tracking-[0.14em] text-forest hover:text-pine transition-colors"
            >
              {tr.viewWishlist} →
            </Link>
          </div>
          <div className="px-6 py-4">
            {wishlistCount === 0 ? (
              <p className="text-sm text-charcoal/40 py-2">
                {lang === "fr" ? "Aucun favori pour l'instant." : "No saved items yet."}
              </p>
            ) : (
              <p className="text-sm text-charcoal/70">
                {wishlistCount} {tr.wishlistItems}
              </p>
            )}
          </div>
        </motion.div>

        {/* Orders card */}
        <motion.div {...fadeUp(0.15)} className="bg-white rounded-xl border border-wool overflow-hidden">
          <div className="px-6 py-4 border-b border-wool flex items-center gap-2.5">
            <svg className="w-4 h-4 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h2 className="font-serif text-lg text-charcoal">{tr.orderHistory}</h2>
          </div>

          {orders.length === 0 ? (
            <div className="px-6 py-8 text-center">
              <p className="text-sm text-charcoal/40">{tr.noOrders}</p>
              <Link
                href="/collections/tuques"
                className="mt-4 inline-block text-xs uppercase tracking-[0.15em] text-forest hover:text-pine transition-colors"
              >
                {lang === "fr" ? "Commencer à magasiner →" : "Start shopping →"}
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-wool">
              {orders.map((order, i) => (
                <div key={order.ref} className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-cream flex items-center justify-center text-xs text-charcoal/50">
                      {i + 1}
                    </span>
                    <span className="font-mono text-sm text-charcoal/70">{order.ref}</span>
                  </div>
                  <span className="text-xs text-charcoal/40">{order.date}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Account actions */}
        <motion.div {...fadeUp(0.2)} className="bg-white rounded-xl border border-wool overflow-hidden">
          <div className="px-6 py-4 border-b border-wool flex items-center gap-2.5">
            <svg className="w-4 h-4 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <h2 className="font-serif text-lg text-charcoal">
              {lang === "fr" ? "Mon compte" : "Account"}
            </h2>
          </div>
          <div className="divide-y divide-wool">
            <button
              onClick={() => signOut(() => router.push("/"))}
              className="w-full px-6 py-4 text-left text-sm text-red-500 hover:bg-red-50 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              {tr.signOut}
            </button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
