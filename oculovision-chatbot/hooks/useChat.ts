"use client";

import { useCallback } from "react";
import { useChatContext } from "@/context/ChatContext";
import { detectLanguage } from "@/lib/language";
import { generateId } from "@/lib/utils";

export function useChat() {
  const { state, dispatch } = useChatContext();

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || state.isLoading) return;

      // Auto-detect language on first user message
      if (state.messages.length === 0) {
        const detected = detectLanguage(content);
        dispatch({ type: "SET_LANGUAGE", payload: detected });
      }

      // Add user message
      const userMsg = {
        id: generateId(),
        role: "user" as const,
        content: content.trim(),
        timestamp: Date.now(),
      };
      dispatch({ type: "ADD_MESSAGE", payload: userMsg });
      dispatch({ type: "SET_LOADING", payload: true });

      // Add placeholder assistant message
      const assistantMsg = {
        id: generateId(),
        role: "assistant" as const,
        content: "",
        timestamp: Date.now(),
      };
      dispatch({ type: "ADD_MESSAGE", payload: assistantMsg });

      try {
        const allMessages = [...state.messages, userMsg].map((m) => ({
          id: m.id,
          role: m.role,
          content: m.content,
          timestamp: m.timestamp,
        }));

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: allMessages,
            language: state.language,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const reader = response.body!.getReader();
        const decoder = new TextDecoder();
        let accumulated = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6);
              if (data === "[DONE]") break;
              try {
                const parsed = JSON.parse(data);
                if (parsed.text) {
                  accumulated += parsed.text;
                  dispatch({
                    type: "UPDATE_LAST_ASSISTANT",
                    payload: accumulated,
                  });
                }
              } catch {
                // Skip malformed chunks
              }
            }
          }
        }
      } catch (error) {
        console.error("Chat error:", error);
        const errorMsg =
          state.language === "fr"
            ? "Désolé, une erreur est survenue. Veuillez appeler le 819-348-1586 pour assistance."
            : "Sorry, an error occurred. Please call 819-348-1586 for assistance.";
        dispatch({ type: "UPDATE_LAST_ASSISTANT", payload: errorMsg });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    },
    [state.messages, state.language, state.isLoading, dispatch]
  );

  const clearMessages = useCallback(() => {
    dispatch({ type: "CLEAR_MESSAGES" });
  }, [dispatch]);

  const setLanguage = useCallback(
    (lang: "fr" | "en") => {
      dispatch({ type: "SET_LANGUAGE", payload: lang });
    },
    [dispatch]
  );

  const toggleOpen = useCallback(() => {
    dispatch({ type: "TOGGLE_OPEN" });
  }, [dispatch]);

  return {
    messages: state.messages,
    isOpen: state.isOpen,
    isLoading: state.isLoading,
    language: state.language,
    sendMessage,
    clearMessages,
    setLanguage,
    toggleOpen,
  };
}
