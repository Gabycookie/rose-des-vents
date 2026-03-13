import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { ClerkWrapper } from "@/components/ClerkWrapper";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rose des Vents — Tuques & Foulards Artisanaux",
  description:
    "Tuques et foulards tricotés à la main en fibres naturelles. Fait avec amour au Québec.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clerkEnabled = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkWrapper enabled={clerkEnabled}>
      <html lang="fr">
        <body
          className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-snow text-charcoal`}
        >
          <WishlistProvider>
            <CartProvider>
              <Header />
              <main>{children}</main>
              <Footer />
              <Analytics />
            </CartProvider>
          </WishlistProvider>
        </body>
      </html>
    </ClerkWrapper>
  );
}
