import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import ProductGrid from "@/components/products/ProductGrid";
import CollectionHeader from "@/components/collections/CollectionHeader";
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
        <CollectionHeader collection={collection} />
        <ProductGrid products={products} />
      </Container>
    </div>
  );
}
