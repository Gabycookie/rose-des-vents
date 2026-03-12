import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1706027302476-8b0c23299693?w=1920&h=1080&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative text-center text-cream px-4 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.4em] mb-6 opacity-90">
          Fait main au Québec
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-wide mb-6">
          Tricoté avec amour,
          <br />
          porté avec fierté
        </h2>
        <p className="text-sm sm:text-base opacity-80 mb-10 max-w-md mx-auto leading-relaxed">
          Des tuques et foulards tricotés à la main en fibres naturelles,
          pensés pour réchauffer vos hivers avec douceur et élégance.
        </p>
        <Link href="/collections/tuques">
          <Button
            variant="outline"
            size="lg"
            className="!bg-cream !text-forest !border-cream hover:!bg-white"
          >
            Découvrir la collection
          </Button>
        </Link>
      </div>
    </section>
  );
}
