import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center">
      <Container className="max-w-lg text-center py-20">
        {/* Decorative number */}
        <p className="font-serif text-[10rem] leading-none text-wool select-none mb-2">
          404
        </p>

        <p className="text-xs uppercase tracking-[0.3em] text-bark mb-5">
          Page introuvable &nbsp;/&nbsp; Page not found
        </p>

        <p className="text-charcoal/50 text-sm mb-10 leading-relaxed">
          Cette page n&apos;existe pas ou a été déplacée.
          <br />
          This page doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block text-xs uppercase tracking-[0.2em] bg-forest text-snow px-8 py-3 hover:bg-pine transition-colors duration-300"
          >
            Accueil / Home
          </Link>
          <Link
            href="/collections/tuques"
            className="inline-block text-xs uppercase tracking-[0.2em] border border-charcoal text-charcoal px-8 py-3 hover:bg-charcoal hover:text-snow transition-colors duration-300"
          >
            Collections
          </Link>
        </div>
      </Container>
    </div>
  );
}
