(function () {
  var CHAT_URL =
    (document.currentScript && document.currentScript.getAttribute("data-url")) ||
    "https://chat.oculovision.ca/embed";
  var bubble, iframe, container, isOpen = false;

  function createStyles() {
    var style = document.createElement("style");
    style.textContent =
      "#oculovision-chat-bubble{position:fixed;bottom:24px;right:24px;width:60px;height:60px;border-radius:50%;background:#0075C9;color:white;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 16px rgba(0,117,201,0.3);z-index:99998;border:none;transition:transform 0.2s;font-size:0;}" +
      "#oculovision-chat-bubble:hover{transform:scale(1.05);}" +
      "#oculovision-chat-bubble svg{width:28px;height:28px;}" +
      "#oculovision-chat-container{position:fixed;bottom:96px;right:24px;width:380px;height:600px;z-index:99999;display:none;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(0,117,201,0.15);}" +
      "@media(max-width:640px){#oculovision-chat-container{top:0;left:0;right:0;bottom:0;width:100%;height:100%;border-radius:0;}}";
    document.head.appendChild(style);
  }

  function createBubble() {
    bubble = document.createElement("button");
    bubble.id = "oculovision-chat-bubble";
    bubble.setAttribute("aria-label", "Open chat");
    bubble.innerHTML =
      '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>';
    bubble.addEventListener("click", toggleChat);
    document.body.appendChild(bubble);
  }

  function createIframe() {
    container = document.createElement("div");
    container.id = "oculovision-chat-container";
    iframe = document.createElement("iframe");
    iframe.src = CHAT_URL;
    iframe.style.cssText = "width:100%;height:100%;border:none;";
    iframe.title = "OculoVision Chat";
    iframe.setAttribute("loading", "lazy");
    container.appendChild(iframe);
    document.body.appendChild(container);
  }

  function toggleChat() {
    isOpen = !isOpen;
    container.style.display = isOpen ? "block" : "none";
    bubble.innerHTML = isOpen
      ? '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>'
      : '<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>';
    bubble.setAttribute("aria-label", isOpen ? "Close chat" : "Open chat");
  }

  function init() {
    createStyles();
    createBubble();
    createIframe();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
