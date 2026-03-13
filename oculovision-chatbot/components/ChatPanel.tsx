"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@/hooks/useChat";
import { UI_STRINGS } from "@/lib/language";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import LanguageToggle from "./LanguageToggle";
import QuickActions from "./QuickActions";
import BookingCTA from "./BookingCTA";

interface Props {
  embedded?: boolean;
  onClose?: () => void;
}

export default function ChatPanel({ embedded = false, onClose }: Props) {
  const {
    messages,
    isOpen,
    isLoading,
    language,
    sendMessage,
    clearMessages,
    setLanguage,
    toggleOpen,
  } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showBooking, setShowBooking] = useState(false);

  const strings = UI_STRINGS[language];
  const visible = embedded || isOpen;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Show booking CTA after 3+ messages
  useEffect(() => {
    if (messages.length >= 4 && !showBooking) {
      setShowBooking(true);
    }
  }, [messages.length, showBooking]);

  if (!visible) return null;

  const handleClose = () => {
    if (onClose) onClose();
    else toggleOpen();
  };

  return (
    <div
      className={`${
        embedded
          ? "w-full h-full"
          : "fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[380px] h-[min(600px,calc(100vh-8rem))] z-50"
      } bg-white rounded-2xl shadow-chat flex flex-col overflow-hidden animate-slide-up`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-oculo-blue to-oculo-blue-dark px-4 py-3 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
            </svg>
          </div>
          <div>
            <h2 className="text-white text-sm font-semibold">OculoVision</h2>
            <p className="text-white/70 text-xs">{strings.poweredBy}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle language={language} onChange={setLanguage} />
          {messages.length > 0 && (
            <button
              onClick={clearMessages}
              className="text-white/70 hover:text-white text-xs px-2 py-1 rounded transition-colors"
              title={strings.newConversation}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          )}
          {!embedded && (
            <button
              onClick={handleClose}
              className="text-white/70 hover:text-white transition-colors"
              aria-label={strings.close}
            >
              <svg
                className="w-5 h-5"
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
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 chat-scrollbar">
        {messages.length === 0 && (
          <div className="text-center py-6 animate-fade-in">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-oculo-blue-light flex items-center justify-center">
              <svg
                className="w-8 h-8 text-oculo-blue"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </div>
            <h3 className="text-oculo-text font-semibold text-base mb-1">
              {strings.welcomeTitle}
            </h3>
            <p className="text-oculo-text-light text-sm mb-5 px-4">
              {strings.welcomeMessage}
            </p>
            <QuickActions language={language} onSelect={sendMessage} />
          </div>
        )}

        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {showBooking && messages.length > 0 && (
          <BookingCTA language={language} />
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatInput
        onSend={sendMessage}
        isLoading={isLoading}
        placeholder={strings.placeholder}
      />
    </div>
  );
}
