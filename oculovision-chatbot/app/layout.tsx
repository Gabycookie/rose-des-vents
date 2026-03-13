import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OculoVision - Assistant Virtuel",
  description:
    "Assistant virtuel OculoVision - Votre clinique d'ophtalmologie au Quebec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
