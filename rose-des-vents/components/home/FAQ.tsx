"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

const faqs = [
  {
    question: "Quels matériaux utilisez-vous?",
    answer:
      "Nous utilisons principalement de l'alpaga, de la laine mérinos et du mohair provenant de fournisseurs éthiques. Toutes nos fibres sont naturelles, hypoallergéniques et sélectionnées pour leur douceur exceptionnelle.",
  },
  {
    question: "Comment entretenir mes pièces tricotées?",
    answer:
      "La plupart de nos pièces se lavent à la main à l'eau froide avec un savon doux. Essorez délicatement sans tordre et séchez à plat. Pour les articles en mohair, nous recommandons le nettoyage à sec.",
  },
  {
    question: "Quels sont les délais de livraison?",
    answer:
      "Comme chaque pièce est faite à la main, prévoyez 5 à 10 jours ouvrables pour la confection, plus 3 à 5 jours pour la livraison au Canada. La livraison est gratuite pour les commandes de plus de 100 $.",
  },
  {
    question: "Acceptez-vous les retours et échanges?",
    answer:
      "Oui! Vous avez 30 jours après réception pour retourner ou échanger un article non porté dans son emballage d'origine. Les frais de retour sont à la charge du client.",
  },
  {
    question: "Vos produits sont-ils vraiment faits à la main?",
    answer:
      "Absolument. Chaque tuque et foulard est tricoté à la main par nos artisanes au Québec. C'est pourquoi de légères variations peuvent exister d'une pièce à l'autre — c'est ce qui rend chaque article unique.",
  },
  {
    question: "Offrez-vous des cartes cadeaux?",
    answer:
      "Oui, nous offrons des cartes cadeaux numériques en différentes valeurs. C'est le cadeau parfait pour quelqu'un de spécial qui appréciera la chaleur d'une pièce artisanale.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-cream">
      <Container className="max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-bark mb-3">
            FAQ
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-wide">
            Questions fréquentes
          </h2>
        </div>
        <div className="divide-y divide-bark/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="text-sm sm:text-base pr-8">{faq.question}</span>
                <svg
                  className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-60 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
