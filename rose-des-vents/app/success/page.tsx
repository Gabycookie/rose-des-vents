import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface SuccessPageProps {
  searchParams: { session_id?: string };
}

export const metadata = {
  title: "Commande confirmée — Rose des Vents",
};

export default function SuccessPage({ searchParams }: SuccessPageProps) {
  const sessionId = searchParams.session_id;

  return (
    <div className="pt-28 sm:pt-32 pb-20">
      <Container className="max-w-2xl text-center">
        <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-forest"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl tracking-wide mb-4">
          Merci pour votre commande&nbsp;!
        </h1>
        <p className="text-charcoal/60 mb-2 text-sm">
          Vous recevrez un courriel de confirmation sous peu.
        </p>
        {sessionId && (
          <p className="text-charcoal/40 text-xs mb-8 font-mono">
            Référence&nbsp;: {sessionId.slice(-12).toUpperCase()}
          </p>
        )}

        <Link href="/">
          <Button variant="outline">Retour à la boutique</Button>
        </Link>
      </Container>
    </div>
  );
}
