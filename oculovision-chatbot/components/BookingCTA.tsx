"use client";

import { Language } from "@/lib/types";
import { locations } from "@/lib/knowledge/locations";

interface Props {
  language: Language;
}

export default function BookingCTA({ language }: Props) {
  const isFr = language === "fr";

  return (
    <div className="bg-gradient-to-r from-oculo-blue to-oculo-blue-dark rounded-xl p-4 text-white mx-1 animate-fade-in">
      <p className="font-semibold text-sm mb-2">
        {isFr ? "Prendre rendez-vous" : "Book an Appointment"}
      </p>
      <div className="space-y-2">
        <a
          href={`tel:${locations.sherbrooke.phone}`}
          className="flex items-center gap-2 text-sm hover:underline"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          {locations.sherbrooke.phone}
        </a>
        <a
          href={`tel:${locations.sherbrooke.tollFree}`}
          className="flex items-center gap-2 text-sm hover:underline"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          {isFr ? "Sans frais: " : "Toll-free: "}
          {locations.sherbrooke.tollFree}
        </a>
      </div>
      <p className="text-xs mt-3 opacity-80">
        {isFr
          ? "Consultation initiale gratuite (conditions s'appliquent)"
          : "Free initial consultation (conditions apply)"}
      </p>
    </div>
  );
}
