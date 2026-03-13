"use client";

import { ChatProvider } from "@/context/ChatContext";
import { useChatContext } from "@/context/ChatContext";
import ChatPanel from "./ChatPanel";

function ChatBubble() {
  const { state, dispatch } = useChatContext();

  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE_OPEN" })}
      className="fixed bottom-4 right-4 sm:right-6 w-14 h-14 rounded-full bg-oculo-blue text-white shadow-bubble hover:scale-105 active:scale-95 transition-transform z-50 flex items-center justify-center"
      aria-label={state.isOpen ? "Close chat" : "Open chat"}
    >
      {state.isOpen ? (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      )}
    </button>
  );
}

export default function ChatWidget() {
  return (
    <ChatProvider>
      <ChatBubble />
      <ChatPanel />
    </ChatProvider>
  );
}
