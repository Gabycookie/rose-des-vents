"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <section className="py-20 sm:py-28 bg-cream">
      <Container className="max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-bark mb-3">{tr.faqLabel}</p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-wide">{tr.faqTitle}</h2>
        </div>
        <div className="divide-y divide-bark/10">
          {tr.faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="text-sm sm:text-base pr-8">{faq.q}</span>
                <svg
                  className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-60 pb-5" : "max-h-0"}`}>
                <p className="text-sm text-charcoal/60 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
