import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import ProductDetail from "@/components/products/ProductDetail";
import RelatedProducts from "@/components/products/RelatedProducts";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { products, getProductBySlug } from "@/data/products";
import { getCollectionBySlug } from "@/data/collections";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — Rose des Vents`,
    description: product.description,
  };
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const collection = getCollectionBySlug(product.collection);

  const crumbs = [
    { labelFr: "Accueil", labelEn: "Home", href: "/" },
    ...(collection
      ? [{ labelFr: collection.name, labelEn: collection.name_en, href: `/collections/${collection.slug}` }]
      : []),
    { labelFr: product.name, labelEn: product.name_en },
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-20">
      <Container>
        <Breadcrumbs crumbs={crumbs} />
        <ProductDetail product={product} />
        <RelatedProducts product={product} />
      </Container>
    </div>
  );
}
