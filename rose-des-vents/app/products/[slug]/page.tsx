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
  const ogImage = product.images[0].split("?")[0] + "?w=1200&h=630&fit=crop";
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [ogImage],
    },
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
