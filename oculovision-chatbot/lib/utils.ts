export function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

/** Lightweight markdown-to-HTML for chat messages */
export function renderMarkdown(text: string): string {
  return (
    text
      // Bold
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      // Phone numbers as clickable links
      .replace(
        /(\d{3}[-.]?\d{3}[-.]?\d{4})/g,
        '<a href="tel:$1" class="text-oculo-blue underline">$1</a>'
      )
      // Toll-free numbers
      .replace(
        /(1[-.]?\d{3}[-.]?\d{3}[-.]?\d{4})/g,
        '<a href="tel:$1" class="text-oculo-blue underline">$1</a>'
      )
      // URLs
      .replace(
        /\[(.*?)\]\((https?:\/\/.*?)\)/g,
        '<a href="$2" target="_blank" rel="noopener" class="text-oculo-blue underline">$1</a>'
      )
      // Line breaks
      .replace(/\n/g, "<br/>")
  );
}
