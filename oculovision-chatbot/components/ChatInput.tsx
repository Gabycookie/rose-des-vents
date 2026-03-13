"use client";

import { useState, useRef, KeyboardEvent } from "react";

interface Props {
  onSend: (message: string) => void;
  isLoading: boolean;
  placeholder: string;
}

export default function ChatInput({ onSend, isLoading, placeholder }: Props) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (!value.trim() || isLoading) return;
    onSend(value);
    setValue("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 96)}px`;
    }
  };

  return (
    <div className="flex items-end gap-2 p-3 border-t border-gray-100 bg-white">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleInput();
        }}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={isLoading}
        rows={1}
        className="flex-1 resize-none border border-gray-200 rounded-xl px-3 py-2 text-sm text-oculo-text placeholder-oculo-text-light focus:outline-none focus:border-oculo-blue focus:ring-1 focus:ring-oculo-blue/30 disabled:opacity-50 transition-colors"
        style={{ maxHeight: "96px" }}
      />
      <button
        onClick={handleSend}
        disabled={!value.trim() || isLoading}
        className="w-9 h-9 flex items-center justify-center rounded-xl bg-oculo-blue text-white disabled:opacity-40 hover:bg-oculo-blue-dark transition-colors flex-shrink-0"
        aria-label="Send"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </button>
    </div>
  );
}
