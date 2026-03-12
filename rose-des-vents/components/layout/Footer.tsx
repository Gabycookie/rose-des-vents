"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-xl tracking-[0.15em] mb-4">
              ROSE DES VENTS
            </h3>
            <p className="text-sm text-cream/70 leading-relaxed">
              Tuques et foulards tricotés à la main avec amour, en fibres
              naturelles soigneusement sélectionnées.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-4">
              Collections
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/collections/tuques"
                className="text-sm text-cream/70 hover:text-cream transition-colors"
              >
                Tuques
              </Link>
              <Link
                href="/collections/foulards"
                className="text-sm text-cream/70 hover:text-cream transition-colors"
              >
                Foulards
              </Link>
              <Link
                href="/collections/ensembles"
                className="text-sm text-cream/70 hover:text-cream transition-colors"
              >
                Ensembles Cadeaux
              </Link>
            </nav>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-4">
              Informations
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-cream/70 hover:text-cream transition-colors"
              >
                Notre histoire
              </Link>
              <Link
                href="/"
                className="text-sm text-cream/70 hover:text-cream transition-colors"
              >
                Guide des tailles
              </Link>
              <Link
                href="/"
                className="text-sm text-cream/70 hover:text-cream transition-colors"
              >
                Entretien
              </Link>
              <Link
                href="/"
                className="text-sm text-cream/70 hover:text-cream transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-4">
              Infolettre
            </h4>
            <p className="text-sm text-cream/70 mb-4">
              Recevez nos nouveautés et offres exclusives.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="votre@courriel.com"
                className="flex-1 bg-transparent border border-cream/30 px-3 py-2 text-sm placeholder:text-cream/40 focus:outline-none focus:border-cream/60"
              />
              <button
                type="submit"
                className="bg-cream text-forest px-4 py-2 text-xs uppercase tracking-wider hover:bg-wool transition-colors"
              >
                OK
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-cream/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/50">
            © 2026 Rose des Vents. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-xs text-cream/50">
            <Link href="/" className="hover:text-cream transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/" className="hover:text-cream transition-colors">
              Conditions de vente
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
