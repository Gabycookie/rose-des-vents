"use client";

import { useState, useCallback } from "react";
import { CartItem } from "@/context/CartContext";

export function useCheckout() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startCheckout = useCallback(async (items: CartItem[]) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error ?? "Impossible de démarrer le paiement.");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inattendue");
      setIsLoading(false);
    }
  }, []);

  return { startCheckout, isLoading, error };
}
