"use client";

import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";
import { ChatMessage, ChatState, Language } from "@/lib/types";

type ChatAction =
  | { type: "TOGGLE_OPEN" }
  | { type: "SET_OPEN"; payload: boolean }
  | { type: "ADD_MESSAGE"; payload: ChatMessage }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_LANGUAGE"; payload: Language }
  | { type: "UPDATE_LAST_ASSISTANT"; payload: string }
  | { type: "CLEAR_MESSAGES" };

function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case "TOGGLE_OPEN":
      return { ...state, isOpen: !state.isOpen };
    case "SET_OPEN":
      return { ...state, isOpen: action.payload };
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    case "UPDATE_LAST_ASSISTANT": {
      const msgs = [...state.messages];
      for (let i = msgs.length - 1; i >= 0; i--) {
        if (msgs[i].role === "assistant") {
          msgs[i] = { ...msgs[i], content: action.payload };
          break;
        }
      }
      return { ...state, messages: msgs };
    }
    case "CLEAR_MESSAGES":
      return { ...state, messages: [] };
    default:
      return state;
  }
}

interface ChatContextType {
  state: ChatState;
  dispatch: Dispatch<ChatAction>;
}

const ChatContext = createContext<ChatContextType | null>(null);

export function ChatProvider({
  children,
  initialOpen = false,
}: {
  children: ReactNode;
  initialOpen?: boolean;
}) {
  const [state, dispatch] = useReducer(chatReducer, {
    messages: [],
    isOpen: initialOpen,
    isLoading: false,
    language: "fr",
  });

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
}
