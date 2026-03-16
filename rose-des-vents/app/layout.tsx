import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { ClerkWrapper } from "@/components/ClerkWrapper";
import { LanguageProvider } from "@/context/LanguageContext";

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

const OG_IMAGE =
  "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=1200&h=630&fit=crop";

export const metadata: Metadata = {
  title: {
    default: "Rose des Vents — Tuques & Foulards Artisanaux",
    template: "%s — Rose des Vents",
  },
  description:
    "Tuques et foulards tricotés à la main en fibres naturelles. Fait avec amour au Québec.",
  openGraph: {
    type: "website",
    locale: "fr_CA",
    siteName: "Rose des Vents",
    title: "Rose des Vents — Tuques & Foulards Artisanaux",
    description:
      "Tuques et foulards tricotés à la main en fibres naturelles. Fait avec amour au Québec.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Rose des Vents" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rose des Vents — Tuques & Foulards Artisanaux",
    description:
      "Tuques et foulards tricotés à la main en fibres naturelles. Fait avec amour au Québec.",
    images: [OG_IMAGE],
  },
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
          <LanguageProvider>
            <WishlistProvider>
              <CartProvider>
                <Header />
                <main>{children}</main>
                <Footer />
                <Analytics />
              </CartProvider>
            </WishlistProvider>
          </LanguageProvider>
        </body>
      </html>
    </ClerkWrapper>
  );
}
