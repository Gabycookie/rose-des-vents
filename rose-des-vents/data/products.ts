export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  details: {
    materials: string;
    care: string;
    sizing: string;
  };
  images: string[];
  colors: { name: string; hex: string }[];
  collection: string;
  featured: boolean;
}

export const products: Product[] = [
  // TUQUES
  {
    id: "t1",
    slug: "tuque-alpaga-classique",
    name: "Tuque Alpaga Classique",
    price: 45,
    description:
      "Notre tuque signature en alpaga mérinos, tricotée à la main avec un repli côtelé généreux. Douce, chaude et intemporelle.",
    details: {
      materials: "70% alpaga, 30% laine mérinos",
      care: "Lavage à la main à l'eau froide. Sécher à plat.",
      sizing: "Taille unique — s'adapte à la plupart des têtes adultes",
    },
    images: [
      "https://images.unsplash.com/photo-1674433859621-979ae6e39c1a?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1737043832522-c63d6aab767a?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Sapin", hex: "#2D4A3E" },
      { name: "Crème", hex: "#F5F0E8" },
      { name: "Terre", hex: "#6B4C3B" },
    ],
    collection: "tuques",
    featured: true,
  },
  {
    id: "t2",
    slug: "tuque-torsade-laine",
    name: "Tuque Torsade",
    price: 50,
    description:
      "Motif torsadé traditionnel tricoté à la main. Un classique revisité avec des fibres naturelles de qualité supérieure.",
    details: {
      materials: "100% laine mérinos",
      care: "Lavage à la main à l'eau froide. Sécher à plat.",
      sizing: "Taille unique",
    },
    images: [
      "https://images.unsplash.com/photo-1664289321749-07316ab5e374?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1772114675982-f1a85566598c?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Ivoire", hex: "#FFFFF0" },
      { name: "Gris chiné", hex: "#9E9E9E" },
    ],
    collection: "tuques",
    featured: true,
  },
  {
    id: "t3",
    slug: "tuque-pompon-mohair",
    name: "Tuque Pompon Mohair",
    price: 55,
    description:
      "Tuque surdimensionnée en mohair avec pompon amovible en fourrure recyclée. Le confort ultime pour les journées les plus froides.",
    details: {
      materials: "80% mohair, 20% soie",
      care: "Nettoyage à sec recommandé.",
      sizing: "Taille unique — coupe ample",
    },
    images: [
      "https://images.unsplash.com/photo-1763635838423-a77ae2dbeb48?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1737043814919-fa7249184768?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Rose poudré", hex: "#E8C4C4" },
      { name: "Charbon", hex: "#2C2C2C" },
    ],
    collection: "tuques",
    featured: false,
  },
  {
    id: "t4",
    slug: "tuque-cotelee-merinos",
    name: "Tuque Côtelée Mérinos",
    price: 40,
    description:
      "Silhouette ajustée en côtes serrées. Parfaite sous un capuchon ou portée seule pour un look minimaliste.",
    details: {
      materials: "100% laine mérinos extra-fine",
      care: "Lavage à la main à l'eau froide. Sécher à plat.",
      sizing: "Taille unique",
    },
    images: [
      "https://images.unsplash.com/photo-1633853706942-59f668add391?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1762542501396-1504f7370fb4?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Noir", hex: "#1A1A1A" },
      { name: "Sapin", hex: "#2D4A3E" },
      { name: "Bourgogne", hex: "#722F37" },
    ],
    collection: "tuques",
    featured: false,
  },
  {
    id: "t5",
    slug: "tuque-bebe-alpaga",
    name: "Tuque Bébé Alpaga",
    price: 35,
    description:
      "Version miniature de notre tuque classique pour les tout-petits. Douceur incomparable pour les peaux sensibles.",
    details: {
      materials: "100% baby alpaga",
      care: "Lavage à la main à l'eau froide. Sécher à plat.",
      sizing: "0-12 mois / 1-3 ans",
    },
    images: [
      "https://images.unsplash.com/photo-1699347611474-5be693bee31e?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1737053589279-9fb61d8781c3?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Crème", hex: "#F5F0E8" },
      { name: "Rose poudré", hex: "#E8C4C4" },
    ],
    collection: "tuques",
    featured: true,
  },
  // SCARVES
  {
    id: "s1",
    slug: "foulard-infinity-alpaga",
    name: "Foulard Infinity Alpaga",
    price: 65,
    description:
      "Foulard circulaire en alpaga tricoté à la main. Se porte en double tour pour une chaleur maximale.",
    details: {
      materials: "70% alpaga, 30% laine mérinos",
      care: "Lavage à la main à l'eau froide. Sécher à plat.",
      sizing: "Circonférence: 140 cm — Largeur: 30 cm",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1760118488677-0edd1f262a67?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1737043814915-2e23c00ba7cf?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Avoine", hex: "#D4C5A9" },
      { name: "Sapin", hex: "#2D4A3E" },
    ],
    collection: "foulards",
    featured: true,
  },
  {
    id: "s2",
    slug: "echarpe-surdimensionnee-mohair",
    name: "Écharpe Surdimensionnée Mohair",
    price: 75,
    description:
      "Grande écharpe vaporeuse en mohair. Légère comme un nuage mais incroyablement chaude. Se drape comme une couverture.",
    details: {
      materials: "75% mohair, 25% soie",
      care: "Nettoyage à sec recommandé.",
      sizing: "200 cm × 60 cm",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1695844419491-78388dc54543?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1770589145942-fd96a5eda7e3?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Brume", hex: "#C4B5A0" },
      { name: "Charbon", hex: "#2C2C2C" },
    ],
    collection: "foulards",
    featured: true,
  },
  {
    id: "s3",
    slug: "foulard-cotes-merinos",
    name: "Foulard Côtes Mérinos",
    price: 55,
    description:
      "Foulard en côtes anglaises, épais et structuré. Un essentiel de la garde-robe hivernale.",
    details: {
      materials: "100% laine mérinos",
      care: "Lavage à la main à l'eau froide. Sécher à plat.",
      sizing: "180 cm × 25 cm",
    },
    images: [
      "https://images.unsplash.com/photo-1601987775552-435bbcbfb465?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1737044970521-f68c94422ce2?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Terre", hex: "#6B4C3B" },
      { name: "Crème", hex: "#F5F0E8" },
      { name: "Gris chiné", hex: "#9E9E9E" },
    ],
    collection: "foulards",
    featured: false,
  },
  {
    id: "s4",
    slug: "foulard-jacquard-nordique",
    name: "Foulard Jacquard Nordique",
    price: 70,
    description:
      "Motif jacquard inspiré des traditions nordiques. Chaque pièce est unique grâce aux variations naturelles du tricot main.",
    details: {
      materials: "60% alpaga, 40% laine mérinos",
      care: "Lavage à la main à l'eau froide. Sécher à plat.",
      sizing: "190 cm × 35 cm",
    },
    images: [
      "https://images.unsplash.com/photo-1698856287429-d43461bbe2db?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1634901849515-40ba019f9387?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Ivoire & Sapin", hex: "#2D4A3E" },
      { name: "Crème & Terre", hex: "#6B4C3B" },
    ],
    collection: "foulards",
    featured: false,
  },
  {
    id: "s5",
    slug: "foulard-bebe-douceur",
    name: "Foulard Bébé Douceur",
    price: 45,
    description:
      "Petit foulard ultra-doux pour les tout-petits. Fibres hypoallergéniques et teintures naturelles.",
    details: {
      materials: "100% baby alpaga",
      care: "Lavage à la main à l'eau froide. Sécher à plat.",
      sizing: "100 cm × 20 cm",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1760480244772-9859ff454ba0?w=800&h=1000&fit=crop",
      "https://plus.unsplash.com/premium_photo-1765040757859-78305061a0dc?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Crème", hex: "#F5F0E8" },
      { name: "Rose poudré", hex: "#E8C4C4" },
    ],
    collection: "foulards",
    featured: false,
  },
  // GIFT SETS
  {
    id: "g1",
    slug: "ensemble-classique-alpaga",
    name: "Ensemble Classique Alpaga",
    price: 95,
    description:
      "Notre tuque et foulard classiques en alpaga réunis dans un coffret cadeau en lin. Le cadeau parfait pour les amoureux de l'hiver.",
    details: {
      materials: "70% alpaga, 30% laine mérinos",
      care: "Lavage à la main à l'eau froide. Sécher à plat.",
      sizing: "Tuque taille unique + Foulard 180 cm × 25 cm",
    },
    images: [
      "https://images.unsplash.com/photo-1731399738276-5d147430232b?w=800&h=1000&fit=crop",
      "https://plus.unsplash.com/premium_photo-1760140029259-cb447904e2f5?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Sapin", hex: "#2D4A3E" },
      { name: "Crème", hex: "#F5F0E8" },
    ],
    collection: "ensembles",
    featured: true,
  },
  {
    id: "g2",
    slug: "ensemble-luxe-mohair",
    name: "Ensemble Luxe Mohair",
    price: 110,
    description:
      "L'ensemble ultime: tuque pompon et écharpe surdimensionnée en mohair-soie. Présenté dans notre boîte cadeau signature.",
    details: {
      materials: "75% mohair, 25% soie",
      care: "Nettoyage à sec recommandé.",
      sizing: "Tuque taille unique + Écharpe 200 cm × 60 cm",
    },
    images: [
      "https://plus.unsplash.com/premium_photo-1695844419280-99a6bc6c2c06?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1768149712752-bf2aa65439e8?w=800&h=1000&fit=crop",
    ],
    colors: [
      { name: "Brume", hex: "#C4B5A0" },
      { name: "Charbon", hex: "#2C2C2C" },
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
