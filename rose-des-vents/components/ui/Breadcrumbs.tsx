"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

interface Crumb {
  labelFr: string;
  labelEn: string;
  href?: string;
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const { lang } = useLang();

  return (
    <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-charcoal/40 mb-10">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-charcoal/20">›</span>}
          {crumb.href ? (
            <Link
              href={crumb.href}
              className="hover:text-charcoal transition-colors"
            >
              {lang === "en" ? crumb.labelEn : crumb.labelFr}
            </Link>
          ) : (
            <span className="text-charcoal/60">
              {lang === "en" ? crumb.labelEn : crumb.labelFr}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
