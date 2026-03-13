"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

const icons = [
  <svg key="hand" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>,
  <svg key="star" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>,
  <svg key="gift" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
  </svg>,
];

export default function BrandStory() {
  const { lang } = useLang();
  const tr = t[lang];

  const features = [
    { title: tr.handmade, description: tr.handmadeSub },
    { title: tr.natural, description: tr.naturalSub },
    { title: tr.shipping, description: tr.shippingSub },
  ];

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 150}>
              <div className="flex flex-col items-center">
                <div className="text-forest mb-5">{icons[i]}</div>
                <h3 className="font-serif text-xl tracking-wide mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-charcoal/60 leading-relaxed max-w-xs">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
