import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import FilterableProductGrid from "@/components/products/FilterableProductGrid";
import CollectionHeader from "@/components/collections/CollectionHeader";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { collections, getCollectionBySlug } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const collection = getCollectionBySlug(params.slug);
  if (!collection) return {};
  const ogImage = collection.image.split("?")[0] + "?w=1200&h=630&fit=crop";
  return {
    title: collection.name,
    description: collection.description,
    openGraph: {
      title: collection.name,
      description: collection.description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: collection.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: collection.name,
      description: collection.description,
      images: [ogImage],
    },
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

  const crumbs = [
    { labelFr: "Accueil", labelEn: "Home", href: "/" },
    { labelFr: collection.name, labelEn: collection.name_en },
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-20">
      <Container>
        <Breadcrumbs crumbs={crumbs} />
        <CollectionHeader collection={collection} />
        <FilterableProductGrid products={products} />
      </Container>
    </div>
  );
}
