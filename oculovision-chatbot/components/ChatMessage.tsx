"use client";

import { ChatMessage as ChatMessageType } from "@/lib/types";
import { renderMarkdown } from "@/lib/utils";

interface Props {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === "user";

  if (!message.content && !isUser) {
    return (
      <div className="flex items-start gap-2 animate-fade-in">
        <div className="w-7 h-7 rounded-full bg-oculo-blue flex items-center justify-center flex-shrink-0">
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
          </svg>
        </div>
        <div className="bg-oculo-bg rounded-2xl rounded-tl-sm px-4 py-3">
          <div className="flex items-center gap-1">
            <div className="typing-dot w-2 h-2 rounded-full bg-oculo-gray" />
            <div className="typing-dot w-2 h-2 rounded-full bg-oculo-gray" />
            <div className="typing-dot w-2 h-2 rounded-full bg-oculo-gray" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex items-start gap-2 animate-fade-in ${
        isUser ? "flex-row-reverse" : ""
      }`}
    >
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-oculo-blue flex items-center justify-center flex-shrink-0">
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
          </svg>
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-oculo-blue text-white rounded-tr-sm"
            : "bg-oculo-bg text-oculo-text rounded-tl-sm"
        }`}
        dangerouslySetInnerHTML={{
          __html: renderMarkdown(message.content),
        }}
      />
    </div>
  );
}
