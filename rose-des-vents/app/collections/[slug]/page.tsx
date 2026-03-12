import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import ProductGrid from "@/components/products/ProductGrid";
import { collections, getCollectionBySlug } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const collection = getCollectionBySlug(params.slug);
  if (!collection) return {};
  return {
    title: `${collection.name} — Rose des Vents`,
    description: collection.description,
  };
}

export default function CollectionPage({
  params,
}: {
  params: { slug: string };
}) {
  const collection = getCollectionBySlug(params.slug);
  if (!collection) notFound();

  const products = getProductsByCollection(params.slug);

  return (
    <div className="pt-28 sm:pt-32 pb-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-bark mb-3">
            Collection
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl tracking-wide mb-4">
            {collection.name}
          </h1>
          <p className="text-sm text-charcoal/60 max-w-lg mx-auto leading-relaxed">
            {collection.description}
          </p>
        </div>

        {/* Products */}
        <ProductGrid products={products} />
      </Container>
    </div>
  );
}
