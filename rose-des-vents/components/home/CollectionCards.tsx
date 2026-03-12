import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { collections } from "@/data/collections";

export default function CollectionCards() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <Container>
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-bark mb-3">
            Nos collections
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-wide">
            Explorer par catégorie
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <h3 className="font-serif text-2xl text-cream tracking-wide">
                    {collection.name}
                  </h3>
                  <span className="inline-block mt-2 text-xs uppercase tracking-[0.2em] text-cream/80 border-b border-cream/40 pb-0.5 group-hover:border-cream transition-colors">
                    Découvrir
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
