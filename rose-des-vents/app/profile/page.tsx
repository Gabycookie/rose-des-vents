"use client";

import { useEffect, useState } from "react";
import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useWishlist } from "@/context/WishlistContext";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

interface Order {
  ref: string;
  date: string;
}

export default function ProfilePage() {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  const { count: wishlistCount } = useWishlist();
  const { lang } = useLang();
  const tr = t[lang];
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (isLoaded && !user) {
      router.push("/sign-in");
    }
  }, [isLoaded, user, router]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("rdv_orders");
      if (stored) setOrders(JSON.parse(stored));
    } catch {}
  }, []);

  if (!isLoaded || !user) return null;

  return (
    <div className="pt-28 sm:pt-32 pb-20">
      <Container className="max-w-3xl">
        <h1 className="font-serif text-3xl sm:text-4xl tracking-wide text-center mb-12">
          {tr.myAccount}
        </h1>

        {/* User info */}
        <div className="bg-cream p-8 mb-8 flex items-center gap-6">
          {user.imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.imageUrl}
              alt={user.fullName ?? ""}
              className="w-16 h-16 rounded-full object-cover"
            />
          )}
          <div>
            <p className="font-serif text-xl">{user.fullName}</p>
            <p className="text-sm text-charcoal/60 mt-0.5">
              {user.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </div>

        {/* Wishlist */}
        <div className="border-b border-wool pb-8 mb-8">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-xl tracking-wide">{tr.myWishlist}</h2>
            <Link
              href="/wishlist"
              className="text-xs uppercase tracking-[0.15em] text-forest hover:text-pine transition-colors"
            >
              {tr.viewWishlist} ({wishlistCount})
            </Link>
          </div>
        </div>

        {/* Orders */}
        <div className="mb-10">
          <h2 className="font-serif text-xl tracking-wide mb-6">{tr.orderHistory}</h2>
          {orders.length === 0 ? (
            <p className="text-sm text-charcoal/50">{tr.noOrders}</p>
          ) : (
            <div className="divide-y divide-wool">
              {orders.map((order) => (
                <div key={order.ref} className="py-4 flex justify-between text-sm">
                  <span className="font-mono text-charcoal/70">{order.ref}</span>
                  <span className="text-charcoal/50">{order.date}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <Button
          variant="outline"
          onClick={() => signOut(() => router.push("/"))}
        >
          {tr.signOut}
        </Button>
      </Container>
    </div>
  );
}
