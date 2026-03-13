export type Language = "fr" | "en";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export interface ChatState {
  messages: ChatMessage[];
  isOpen: boolean;
  isLoading: boolean;
  language: Language;
}

export interface QuickAction {
  label: { fr: string; en: string };
  message: { fr: string; en: string };
  icon: string;
}
