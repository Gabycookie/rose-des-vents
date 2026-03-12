export interface Collection {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export const collections: Collection[] = [
  {
    slug: "tuques",
    name: "Tuques",
    description:
      "Tuques tricotées à la main en fibres naturelles. Chaque pièce est unique, conçue pour garder la tête au chaud avec style.",
    image:
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&h=1000&fit=crop",
  },
  {
    slug: "foulards",
    name: "Foulards",
    description:
      "Foulards et écharpes artisanaux en alpaga, mérinos et mohair. Des pièces qui transforment n'importe quelle tenue.",
    image:
      "https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?w=800&h=1000&fit=crop",
  },
  {
    slug: "ensembles",
    name: "Ensembles Cadeaux",
    description:
      "Nos plus belles pièces réunies en coffrets cadeaux. Le cadeau parfait pour les amoureux de l'hiver.",
    image:
      "https://images.unsplash.com/photo-1768149712752-bf2aa65439e8?w=800&h=1000&fit=crop",
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
