"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/translations";

const STORAGE_KEY = "rdv_cookie_consent";

export default function CookieBanner() {
  const { lang } = useLang();
  const tr = t[lang];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-charcoal text-snow"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] mb-1 text-snow/70">
                {tr.cookieTitle}
              </p>
              <p className="text-xs text-snow/60 leading-relaxed">
                {tr.cookieText}
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={handleDecline}
                className="text-xs uppercase tracking-[0.15em] text-snow/50 hover:text-snow transition-colors px-4 py-2 border border-snow/20 hover:border-snow/50"
              >
                {tr.cookieDecline}
              </button>
              <button
                onClick={handleAccept}
                className="text-xs uppercase tracking-[0.15em] bg-forest hover:bg-pine text-snow px-5 py-2 transition-colors"
              >
                {tr.cookieAccept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
