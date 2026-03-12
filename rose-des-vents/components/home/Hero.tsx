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
            "url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920&h=1080&fit=crop')",
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
          Fait main,
          <br />
          porté avec amour
        </h2>
        <p className="text-sm sm:text-base opacity-80 mb-10 max-w-md mx-auto leading-relaxed">
          Des tuques et foulards tricotés à la main en fibres naturelles,
          pensés pour réchauffer vos hivers avec douceur et élégance.
        </p>
        <Link href="/collections/tuques">
          <Button
            variant="outline"
            size="lg"
            className="border-cream text-cream hover:bg-cream hover:text-forest"
          >
            Découvrir la collection
          </Button>
        </Link>
      </div>
    </section>
  );
}
