import { NextResponse } from "next/server";
import Stripe from "stripe";
import { CartItem } from "@/context/CartContext";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-02-24.acacia",
});

export async function POST(req: Request) {
  try {
    const { items }: { items: CartItem[] } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "Le panier est vide." },
        { status: 400 }
      );
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      currency: "cad",
      line_items: items.map((item) => ({
        quantity: item.quantity,
        price_data: {
          currency: "cad",
          unit_amount: Math.round(item.product.price * 100),
          product_data: {
            name: `${item.product.name} — ${item.color}`,
            description: item.product.description.slice(0, 500),
            images: [item.product.images[0]],
          },
        },
      })),
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Erreur inattendue";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
