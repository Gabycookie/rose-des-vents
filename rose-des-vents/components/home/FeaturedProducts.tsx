import Container from "@/components/ui/Container";
import ProductCard from "@/components/products/ProductCard";
import FadeIn from "@/components/ui/FadeIn";
import { getFeaturedProducts } from "@/data/products";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-bark mb-3">
              Sélection
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-wide">
              Nos Favoris
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((product, i) => (
            <FadeIn key={product.id} delay={i * 100}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
