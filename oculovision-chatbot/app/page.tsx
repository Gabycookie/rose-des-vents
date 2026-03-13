import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-oculo-bg">
      {/* Demo header */}
      <header className="bg-gradient-to-r from-oculo-blue to-oculo-blue-dark text-white">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold">OculoVision</h1>
              <p className="text-white/70 text-sm">
                Assistant Virtuel IA / AI Virtual Assistant
              </p>
            </div>
          </div>
          <p className="text-white/80 max-w-xl text-sm leading-relaxed">
            Bienvenue sur la demo de l&apos;assistant virtuel OculoVision.
            Cliquez sur le bouton de chat en bas a droite pour commencer une
            conversation.
          </p>
        </div>
      </header>

      {/* Demo content mimicking a clinic website */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="w-10 h-10 rounded-lg bg-oculo-blue-light flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-oculo-blue"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </div>
            <h3 className="font-semibold text-oculo-text mb-2">
              Correction de la vue
            </h3>
            <p className="text-oculo-text-light text-sm">
              LASIK, lentilles trifocales, EDOF, ICL EVO STAAR et plus.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="w-10 h-10 rounded-lg bg-oculo-blue-light flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-oculo-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-oculo-text mb-2">
              Secheresse oculaire
            </h3>
            <p className="text-oculo-text-light text-sm">
              LipiFlow, BlephEx, iLux et IPL pour soulager vos yeux.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="w-10 h-10 rounded-lg bg-oculo-blue-light flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-oculo-blue"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-oculo-text mb-2">
              Technologies avancees
            </h3>
            <p className="text-oculo-text-light text-sm">
              Premier au Quebec pour les lentilles ajustables a la lumiere.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-oculo-blue-light rounded-xl p-6 border border-oculo-blue/10">
          <h3 className="font-semibold text-oculo-text mb-2">
            Comment integrer ce chatbot sur votre site
          </h3>
          <p className="text-oculo-text-light text-sm mb-3">
            Ajoutez simplement cette ligne a votre site web:
          </p>
          <pre className="bg-oculo-dark text-white text-xs rounded-lg p-4 overflow-x-auto">
            <code>
              {`<script src="https://chat.oculovision.ca/embed.js" defer></script>`}
            </code>
          </pre>
        </div>
      </div>

      {/* The chat widget */}
      <ChatWidget />
    </main>
  );
}
