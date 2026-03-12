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
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?w=800&h=1000&fit=crop",
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
      "https://images.unsplash.com/photo-1529391409740-59f2cea08bc6?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1517423738875-5ce310acd3da?w=800&h=1000&fit=crop",
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
      "https://images.unsplash.com/photo-1515243061678-14fc18b93935?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1457545195570-67f207084966?w=800&h=1000&fit=crop",
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
      "https://images.unsplash.com/photo-1541991542-4e2c2d68f3cc?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=1000&fit=crop",
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
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=800&h=1000&fit=crop",
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
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=800&h=1000&fit=crop",
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
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc64?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1543076659-9380cdf10613?w=800&h=1000&fit=crop",
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
      "https://images.unsplash.com/photo-1457545195570-67f207084966?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1515243061678-14fc18b93935?w=800&h=1000&fit=crop",
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
      "https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&h=1000&fit=crop",
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
      "https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&h=1000&fit=crop",
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
      "https://images.unsplash.com/photo-1543076659-9380cdf10613?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc64?w=800&h=1000&fit=crop",
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
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&h=1000&fit=crop",
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
