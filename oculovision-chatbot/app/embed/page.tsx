"use client";

import { ChatProvider } from "@/context/ChatContext";
import ChatPanel from "@/components/ChatPanel";

export default function EmbedPage() {
  return (
    <ChatProvider initialOpen={true}>
      <div className="h-screen w-screen bg-transparent">
        <ChatPanel embedded />
      </div>
    </ChatProvider>
  );
}
