import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import ProductDetail from "@/components/products/ProductDetail";
import { products, getProductBySlug } from "@/data/products";

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

  return (
    <div className="pt-28 sm:pt-32 pb-20">
      <Container>
        <ProductDetail product={product} />
      </Container>
    </div>
  );
}
