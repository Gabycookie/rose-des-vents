import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CollectionCards from "@/components/home/CollectionCards";
import BrandStory from "@/components/home/BrandStory";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <CollectionCards />
      <BrandStory />
      <FAQ />
    </>
  );
}
