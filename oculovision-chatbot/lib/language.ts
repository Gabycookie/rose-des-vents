import { Language } from "./types";

const FRENCH_PATTERNS = [
  /\b(je|tu|il|elle|nous|vous|ils|elles|est|sont|avoir|être|les|des|une|pour|dans|avec|sur|pas|que|qui|mon|ton|son|cette|ces|mais|aussi|très|bien|merci|bonjour|salut|oui|comment|quel|quelle|quoi)\b/i,
  /[àâäéèêëïîôùûüÿç]/,
];

export function detectLanguage(text: string): Language {
  let score = 0;
  for (const pattern of FRENCH_PATTERNS) {
    if (pattern.test(text)) score++;
  }
  return score >= 1 ? "fr" : "en";
}

export const UI_STRINGS = {
  fr: {
    welcomeTitle: "Bienvenue chez OculoVision",
    welcomeMessage:
      "Bonjour! Je suis l'assistant virtuel d'OculoVision. Comment puis-je vous aider aujourd'hui?",
    placeholder: "Tapez votre message...",
    send: "Envoyer",
    callUs: "Appelez-nous",
    bookConsultation: "Prendre rendez-vous",
    poweredBy: "Propulsé par IA",
    typing: "En train d'écrire...",
    newConversation: "Nouvelle conversation",
    close: "Fermer",
    quickActions: {
      lasik: "Info LASIK",
      dryEye: "Sécheresse oculaire",
      promotions: "Promotions",
      booking: "Prendre rendez-vous",
      insurance: "Assurance & couverture",
    },
  },
  en: {
    welcomeTitle: "Welcome to OculoVision",
    welcomeMessage:
      "Hello! I'm OculoVision's virtual assistant. How can I help you today?",
    placeholder: "Type your message...",
    send: "Send",
    callUs: "Call us",
    bookConsultation: "Book a consultation",
    poweredBy: "AI powered",
    typing: "Typing...",
    newConversation: "New conversation",
    close: "Close",
    quickActions: {
      lasik: "LASIK Info",
      dryEye: "Dry Eye",
      promotions: "Promotions",
      booking: "Book Appointment",
      insurance: "Insurance & Coverage",
    },
  },
} as const;
