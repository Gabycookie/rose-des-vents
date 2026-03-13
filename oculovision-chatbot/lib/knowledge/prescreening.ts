export interface PreScreeningQuestion {
  id: string;
  question: { fr: string; en: string };
  options: { label: { fr: string; en: string }; value: string }[];
}

export const lasikPreScreening: PreScreeningQuestion[] = [
  {
    id: "age",
    question: {
      fr: "Quel âge avez-vous?",
      en: "How old are you?",
    },
    options: [
      { label: { fr: "Moins de 18 ans", en: "Under 18" }, value: "under-18" },
      { label: { fr: "18-40 ans", en: "18-40" }, value: "18-40" },
      { label: { fr: "40-55 ans", en: "40-55" }, value: "40-55" },
      { label: { fr: "Plus de 55 ans", en: "Over 55" }, value: "over-55" },
    ],
  },
  {
    id: "prescription-stability",
    question: {
      fr: "Votre prescription est-elle stable depuis au moins un an?",
      en: "Has your prescription been stable for at least one year?",
    },
    options: [
      { label: { fr: "Oui", en: "Yes" }, value: "stable" },
      { label: { fr: "Non", en: "No" }, value: "unstable" },
      {
        label: { fr: "Je ne suis pas certain(e)", en: "I'm not sure" },
        value: "unsure",
      },
    ],
  },
  {
    id: "eye-conditions",
    question: {
      fr: "Avez-vous des conditions oculaires connues (kératocône, glaucome, etc.)?",
      en: "Do you have any known eye conditions (keratoconus, glaucoma, etc.)?",
    },
    options: [
      { label: { fr: "Non, aucune", en: "No, none" }, value: "none" },
      { label: { fr: "Oui", en: "Yes" }, value: "yes" },
      {
        label: { fr: "Je ne suis pas certain(e)", en: "I'm not sure" },
        value: "unsure",
      },
    ],
  },
  {
    id: "dry-eyes",
    question: {
      fr: "Souffrez-vous de sécheresse oculaire?",
      en: "Do you suffer from dry eyes?",
    },
    options: [
      { label: { fr: "Non", en: "No" }, value: "no" },
      { label: { fr: "Légèrement", en: "Mildly" }, value: "mild" },
      { label: { fr: "Sévèrement", en: "Severely" }, value: "severe" },
    ],
  },
];

export const cataractPreScreening: PreScreeningQuestion[] = [
  {
    id: "symptoms",
    question: {
      fr: "Quels symptômes ressentez-vous?",
      en: "What symptoms are you experiencing?",
    },
    options: [
      {
        label: { fr: "Vision floue progressive", en: "Progressive blurry vision" },
        value: "blurry",
      },
      {
        label: { fr: "Éblouissement la nuit", en: "Night glare" },
        value: "glare",
      },
      {
        label: { fr: "Couleurs ternes", en: "Faded colors" },
        value: "colors",
      },
      {
        label: { fr: "Plusieurs de ces symptômes", en: "Multiple symptoms" },
        value: "multiple",
      },
    ],
  },
  {
    id: "diagnosed",
    question: {
      fr: "Avez-vous déjà été diagnostiqué(e) avec des cataractes?",
      en: "Have you already been diagnosed with cataracts?",
    },
    options: [
      { label: { fr: "Oui", en: "Yes" }, value: "yes" },
      { label: { fr: "Non", en: "No" }, value: "no" },
      {
        label: { fr: "Je ne suis pas certain(e)", en: "I'm not sure" },
        value: "unsure",
      },
    ],
  },
  {
    id: "lens-preference",
    question: {
      fr: "Aimeriez-vous réduire votre dépendance aux lunettes après la chirurgie?",
      en: "Would you like to reduce your dependence on glasses after surgery?",
    },
    options: [
      {
        label: {
          fr: "Oui, vision sans lunettes",
          en: "Yes, glasses-free vision",
        },
        value: "glasses-free",
      },
      {
        label: {
          fr: "Je porterais des lunettes si nécessaire",
          en: "I'd wear glasses if needed",
        },
        value: "ok-with-glasses",
      },
    ],
  },
];
