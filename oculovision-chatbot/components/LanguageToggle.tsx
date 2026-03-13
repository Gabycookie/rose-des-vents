"use client";

import { Language } from "@/lib/types";

interface Props {
  language: Language;
  onChange: (lang: Language) => void;
}

export default function LanguageToggle({ language, onChange }: Props) {
  return (
    <div className="flex items-center bg-gray-100 rounded-full p-0.5 text-xs font-medium">
      <button
        onClick={() => onChange("fr")}
        className={`px-2.5 py-1 rounded-full transition-all ${
          language === "fr"
            ? "bg-oculo-blue text-white shadow-sm"
            : "text-oculo-text-light hover:text-oculo-text"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => onChange("en")}
        className={`px-2.5 py-1 rounded-full transition-all ${
          language === "en"
            ? "bg-oculo-blue text-white shadow-sm"
            : "text-oculo-text-light hover:text-oculo-text"
        }`}
      >
        EN
      </button>
    </div>
  );
}
