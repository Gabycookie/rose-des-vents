"use client";

import { Language } from "@/lib/types";
import { UI_STRINGS } from "@/lib/language";

interface Props {
  language: Language;
  onSelect: (message: string) => void;
}

const quickActions = [
  {
    icon: "👁",
    key: "lasik" as const,
    message: {
      fr: "Je voudrais en savoir plus sur la chirurgie LASIK.",
      en: "I'd like to learn more about LASIK surgery.",
    },
  },
  {
    icon: "💧",
    key: "dryEye" as const,
    message: {
      fr: "Quels traitements offrez-vous pour la sécheresse oculaire?",
      en: "What treatments do you offer for dry eyes?",
    },
  },
  {
    icon: "🏷",
    key: "promotions" as const,
    message: {
      fr: "Quelles sont vos promotions actuelles?",
      en: "What are your current promotions?",
    },
  },
  {
    icon: "📅",
    key: "booking" as const,
    message: {
      fr: "Comment puis-je prendre rendez-vous?",
      en: "How can I book an appointment?",
    },
  },
  {
    icon: "🛡",
    key: "insurance" as const,
    message: {
      fr: "Est-ce que la RAMQ ou mon assurance couvre la chirurgie?",
      en: "Does RAMQ or my insurance cover the surgery?",
    },
  },
];

export default function QuickActions({ language, onSelect }: Props) {
  const strings = UI_STRINGS[language].quickActions;

  return (
    <div className="flex flex-wrap gap-2 px-1">
      {quickActions.map((action) => (
        <button
          key={action.key}
          onClick={() => onSelect(action.message[language])}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-oculo-blue-light text-oculo-blue hover:bg-oculo-blue hover:text-white transition-colors border border-oculo-blue/20 hover:border-transparent"
        >
          <span>{action.icon}</span>
          <span>{strings[action.key]}</span>
        </button>
      ))}
    </div>
  );
}
