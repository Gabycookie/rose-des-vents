export interface Product {
  id: string;
  slug: string;
  name: string;
  name_en: string;
  price: number;
  description: string;
  description_en: string;
  details: {
    materials: string;
    care: string;
    sizing: string;
  };
  details_en: {
    materials: string;
    care: string;
    sizing: string;
  };
  images: string[];
  colors: { name: string; name_en: string; hex: string }[];
  collection: string;
  featured: boolean;
  inStock?: boolean;
}

export const products: Product[] = [
  // TUQUES
  {
    id: "t1",
    slug: "tuque-alpaga-classique",
    name: "Tuque Alpaga Classique",
    name_en: "Classic Alpaca Toque",
    price: 45,
    description:
      "Notre tuque signature en alpaga mérinos, tricotée à la main avec un repli côtelé généreux. Douce, chaude et intemporelle.",
    description_en:
      "Our signature alpaca merino toque, hand-knitted with a generous ribbed cuff. Soft, warm and timeless.",
    details: {
      materials: "70% alpaga, 30% laine mérinos",
      care: "Lavage à la main à l'eau froide. Sécher à plat.",
      sizing: "Taille unique — s'adapte à la plupart des têtes adultes",
    },
    details_en: {
      materials: "70% alpaca, 30% merino wool",
      care: "Hand wash in cold water. Dry flat.",
      sizing: "One size — fits most adult heads",
    },
    images: [
      "https://images.unsplash.com/photo-1674433859621-979ae6e39c1a?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1737043832522-c63d6aab767a?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Sapin", name_en: "Fir", hex: "#2D4A3E" },
      { name: "Crème", name_en: "Cream", hex: "#F5F0E8" },
      { name: "Terre", name_en: "Earth", hex: "#6B4C3B" },
    ],
    collection: "tuques",
    featured: true,
  },
  {
    id: "t2",
    slug: "tuque-torsade-laine",
    name: "Tuque Torsade",
    name_en: "Cable Knit Toque",
    price: 50,
    description:
      "Motif torsadé traditionnel tricoté à la main. Un classique revisité avec des fibres naturelles de qualité supérieure.",
    description_en:
      "Traditional cable knit pattern, hand-knitted. A classic revisited with premium natural fibres.",
    details: {
      materials: "100% laine mérinos",
      care: "Lavage à la main à l'eau froide. Sécher à plat.",
      sizing: "Taille unique",
    },
    details_en: {
      materials: "100% merino wool",
      care: "Hand wash in cold water. Dry flat.",
      sizing: "One size",
    },
    images: [
      "https://images.unsplash.com/photo-1664289321749-07316ab5e374?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1772114675982-f1a85566598c?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Ivoire", name_en: "Ivory", hex: "#FFFFF0" },
      { name: "Gris chiné", name_en: "Heather Grey", hex: "#9E9E9E" },
    ],
    collection: "tuques",
    featured: true,
  },
  {
    id: "t3",
    slug: "tuque-pompon-mohair",
    name: "Tuque Pompon Mohair",
    name_en: "Mohair Pom-Pom Toque",
    price: 55,
    description:
      "Tuque surdimensionnée en mohair avec pompon amovible en fourrure recyclée. Le confort ultime pour les journées les plus froides.",
    description_en:
      "Oversized mohair toque with removable recycled fur pom-pom. Ultimate comfort for the coldest days.",
    details: {
      materials: "80% mohair, 20% soie",
      care: "Nettoyage à sec recommandé.",
      sizing: "Taille unique — coupe ample",
    },
    details_en: {
      materials: "80% mohair, 20% silk",
      care: "Dry cleaning recommended.",
      sizing: "One size — oversized fit",
    },
    images: [
      "https://images.unsplash.com/photo-1763635838423-a77ae2dbeb48?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1737043814919-fa7249184768?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Rose poudré", name_en: "Powder Pink", hex: "#E8C4C4" },
      { name: "Charbon", name_en: "Charcoal", hex: "#2C2C2C" },
    ],
    collection: "tuques",
    featured: false,
    inStock: false,
  },
  {
    id: "t4",
    slug: "tuque-cotelee-merinos",
    name: "Tuque Côtelée Mérinos",
    name_en: "Ribbed Merino Toque",
    price: 40,
    description:
      "Silhouette ajustée en côtes serrées. Parfaite sous un capuchon ou portée seule pour un look minimaliste.",
    description_en:
      "Fitted silhouette in tight ribs. Perfect under a hood or worn alone for a minimalist look.",
    details: {
      materials: "100% laine mérinos extra-fine",
      care: "Lavage à la main à l'eau froide. Sécher à plat.",
      sizing: "Taille unique",
    },
    details_en: {
      materials: "100% extra-fine merino wool",
      care: "Hand wash in cold water. Dry flat.",
      sizing: "One size",
    },
    images: [
      "https://images.unsplash.com/photo-1633853706942-59f668add391?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1762542501396-1504f7370fb4?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Noir", name_en: "Black", hex: "#1A1A1A" },
      { name: "Sapin", name_en: "Fir", hex: "#2D4A3E" },
      { name: "Bourgogne", name_en: "Burgundy", hex: "#722F37" },
    ],
    collection: "tuques",
    featured: false,
  },
  {
    id: "t5",
    slug: "tuque-bebe-alpaga",
    name: "Tuque Bébé Alpaga",
    name_en: "Baby Alpaca Toque",
    price: 35,
    description:
      "Version miniature de notre tuque classique pour les tout-petits. Douceur incomparable pour les peaux sensibles.",
    description_en:
      "Miniature version of our classic toque for little ones. Incomparable softness for sensitive skin.",
    details: {
      materials: "100% baby alpaga",
      care: "Lavage à la main à l'eau froide. Sécher à plat.",
      sizing: "0-12 mois / 1-3 ans",
    },
    details_en: {
      materials: "100% baby alpaca",
      care: "Hand wash in cold water. Dry flat.",
      sizing: "0–12 months / 1–3 years",
    },
    images: [
      "https://images.unsplash.com/photo-1699347611474-5be693bee31e?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1737053589279-9fb61d8781c3?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Crème", name_en: "Cream", hex: "#F5F0E8" },
      { name: "Rose poudré", name_en: "Powder Pink", hex: "#E8C4C4" },
    ],
    collection: "tuques",
    featured: true,
  },
  // SCARVES
  {
    id: "s1",
    slug: "foulard-infinity-alpaga",
    name: "Foulard Infinity Alpaga",
    name_en: "Alpaca Infinity Scarf",
    price: 65,
    description:
      "Foulard circulaire en alpaga tricoté à la main. Se porte en double tour pour une chaleur maximale.",
    description_en:
      "Circular hand-knitted alpaca scarf. Worn doubled for maximum warmth.",
    details: {
      materials: "70% alpaga, 30% laine mérinos",
      care: "Lavage à la main à l'eau froide. Sécher à plat.",
      sizing: "Circonférence: 140 cm — Largeur: 30 cm",
    },
    details_en: {
      materials: "70% alpaca, 30% merino wool",
      care: "Hand wash in cold water. Dry flat.",
      sizing: "Circumference: 140 cm — Width: 30 cm",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1760118488677-0edd1f262a67?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1737043814915-2e23c00ba7cf?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Avoine", name_en: "Oat", hex: "#D4C5A9" },
      { name: "Sapin", name_en: "Fir", hex: "#2D4A3E" },
    ],
    collection: "foulards",
    featured: true,
  },
  {
    id: "s2",
    slug: "echarpe-surdimensionnee-mohair",
    name: "Écharpe Surdimensionnée Mohair",
    name_en: "Oversized Mohair Wrap",
    price: 75,
    description:
      "Grande écharpe vaporeuse en mohair. Légère comme un nuage mais incroyablement chaude. Se drape comme une couverture.",
    description_en:
      "Large airy mohair scarf. Light as a cloud yet incredibly warm. Drapes like a blanket.",
    details: {
      materials: "75% mohair, 25% soie",
      care: "Nettoyage à sec recommandé.",
      sizing: "200 cm × 60 cm",
    },
    details_en: {
      materials: "75% mohair, 25% silk",
      care: "Dry cleaning recommended.",
      sizing: "200 cm × 60 cm",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1695844419491-78388dc54543?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1770589145942-fd96a5eda7e3?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Brume", name_en: "Mist", hex: "#C4B5A0" },
      { name: "Charbon", name_en: "Charcoal", hex: "#2C2C2C" },
    ],
    collection: "foulards",
    featured: true,
  },
  {
    id: "s3",
    slug: "foulard-cotes-merinos",
    name: "Foulard Côtes Mérinos",
    name_en: "Merino Ribbed Scarf",
    price: 55,
    description:
      "Foulard en côtes anglaises, épais et structuré. Un essentiel de la garde-robe hivernale.",
    description_en:
      "English rib scarf, thick and structured. A winter wardrobe essential.",
    details: {
      materials: "100% laine mérinos",
      care: "Lavage à la main à l'eau froide. Sécher à plat.",
      sizing: "180 cm × 25 cm",
    },
    details_en: {
      materials: "100% merino wool",
      care: "Hand wash in cold water. Dry flat.",
      sizing: "180 cm × 25 cm",
    },
    images: [
      "https://images.unsplash.com/photo-1601987775552-435bbcbfb465?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1737044970521-f68c94422ce2?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Terre", name_en: "Earth", hex: "#6B4C3B" },
      { name: "Crème", name_en: "Cream", hex: "#F5F0E8" },
      { name: "Gris chiné", name_en: "Heather Grey", hex: "#9E9E9E" },
    ],
    collection: "foulards",
    featured: false,
  },
  {
    id: "s4",
    slug: "foulard-jacquard-nordique",
    name: "Foulard Jacquard Nordique",
    name_en: "Nordic Jacquard Scarf",
    price: 70,
    description:
      "Motif jacquard inspiré des traditions nordiques. Chaque pièce est unique grâce aux variations naturelles du tricot main.",
    description_en:
      "Jacquard pattern inspired by Nordic traditions. Each piece is unique thanks to the natural variations of hand knitting.",
    details: {
      materials: "60% alpaga, 40% laine mérinos",
      care: "Lavage à la main à l'eau froide. Sécher à plat.",
      sizing: "190 cm × 35 cm",
    },
    details_en: {
      materials: "60% alpaca, 40% merino wool",
      care: "Hand wash in cold water. Dry flat.",
      sizing: "190 cm × 35 cm",
    },
    images: [
      "https://images.unsplash.com/photo-1698856287429-d43461bbe2db?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1634901849515-40ba019f9387?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Ivoire & Sapin", name_en: "Ivory & Fir", hex: "#2D4A3E" },
      { name: "Crème & Terre", name_en: "Cream & Earth", hex: "#6B4C3B" },
    ],
    collection: "foulards",
    featured: false,
    inStock: false,
  },
  {
    id: "s5",
    slug: "foulard-bebe-douceur",
    name: "Foulard Bébé Douceur",
    name_en: "Baby Softness Scarf",
    price: 45,
    description:
      "Petit foulard ultra-doux pour les tout-petits. Fibres hypoallergéniques et teintures naturelles.",
    description_en:
      "Ultra-soft little scarf for toddlers. Hypoallergenic fibres and natural dyes.",
    details: {
      materials: "100% baby alpaga",
      care: "Lavage à la main à l'eau froide. Sécher à plat.",
      sizing: "100 cm × 20 cm",
    },
    details_en: {
      materials: "100% baby alpaca",
      care: "Hand wash in cold water. Dry flat.",
      sizing: "100 cm × 20 cm",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1760480244772-9859ff454ba0?w=800&h=1000&fit=crop",
      "https://plus.unsplash.com/premium_photo-1765040757859-78305061a0dc?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Crème", name_en: "Cream", hex: "#F5F0E8" },
      { name: "Rose poudré", name_en: "Powder Pink", hex: "#E8C4C4" },
    ],
    collection: "foulards",
    featured: false,
  },
  // GIFT SETS
  {
    id: "g1",
    slug: "ensemble-classique-alpaga",
    name: "Ensemble Classique Alpaga",
    name_en: "Classic Alpaca Set",
    price: 95,
    description:
      "Notre tuque et foulard classiques en alpaga réunis dans un coffret cadeau en lin. Le cadeau parfait pour les amoureux de l'hiver.",
    description_en:
      "Our classic alpaca toque and scarf together in a linen gift box. The perfect gift for winter lovers.",
    details: {
      materials: "70% alpaga, 30% laine mérinos",
      care: "Lavage à la main à l'eau froide. Sécher à plat.",
      sizing: "Tuque taille unique + Foulard 180 cm × 25 cm",
    },
    details_en: {
      materials: "70% alpaca, 30% merino wool",
      care: "Hand wash in cold water. Dry flat.",
      sizing: "One size toque + Scarf 180 cm × 25 cm",
    },
    images: [
      "https://images.unsplash.com/photo-1731399738276-5d147430232b?w=800&h=1000&fit=crop",
      "https://plus.unsplash.com/premium_photo-1760140029259-cb447904e2f5?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Sapin", name_en: "Fir", hex: "#2D4A3E" },
      { name: "Crème", name_en: "Cream", hex: "#F5F0E8" },
    ],
    collection: "ensembles",
    featured: true,
  },
  {
    id: "g2",
    slug: "ensemble-luxe-mohair",
    name: "Ensemble Luxe Mohair",
    name_en: "Mohair Luxury Set",
    price: 110,
    description:
      "L'ensemble ultime: tuque pompon et écharpe surdimensionnée en mohair-soie. Présenté dans notre boîte cadeau signature.",
    description_en:
      "The ultimate set: pom-pom toque and oversized mohair-silk wrap. Presented in our signature gift box.",
    details: {
      materials: "75% mohair, 25% soie",
      care: "Nettoyage à sec recommandé.",
      sizing: "Tuque taille unique + Écharpe 200 cm × 60 cm",
    },
    details_en: {
      materials: "75% mohair, 25% silk",
      care: "Dry cleaning recommended.",
      sizing: "One size toque + Wrap 200 cm × 60 cm",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1695844419280-99a6bc6c2c06?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1768149712752-bf2aa65439e8?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Brume", name_en: "Mist", hex: "#C4B5A0" },
      { name: "Charbon", name_en: "Charcoal", hex: "#2C2C2C" },
    ],
    collection: "ensembles",
    featured: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(collection: string): Product[] {
  return products.filter((p) => p.collection === collection);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
