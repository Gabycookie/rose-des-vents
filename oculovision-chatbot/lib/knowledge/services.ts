export interface Service {
  id: string;
  category: "vision-correction" | "refractive-surgery" | "dry-eye" | "pathology";
  name: { fr: string; en: string };
  description: { fr: string; en: string };
  url: string;
}

export const services: Service[] = [
  // Vision Correction
  {
    id: "trifocal-lenses",
    category: "vision-correction",
    name: { fr: "Lentilles trifocales", en: "Trifocal Lenses" },
    description: {
      fr: "Les lentilles trifocales offrent une vision nette de loin, intermédiaire et de près, réduisant la dépendance aux lunettes.",
      en: "Trifocal lenses provide clear vision at distance, intermediate, and near ranges, reducing dependence on glasses.",
    },
    url: "https://www.oculovision.ca/lentilles-trifocales/",
  },
  {
    id: "edof-lenses",
    category: "vision-correction",
    name: { fr: "Lentilles EDOF", en: "EDOF Lenses" },
    description: {
      fr: "Les lentilles EDOF (profondeur de champ étendue) offrent une plage de vision continue de loin à intermédiaire avec moins d'effets visuels indésirables.",
      en: "EDOF (Extended Depth of Focus) lenses provide a continuous range of vision from distance to intermediate with fewer visual side effects.",
    },
    url: "https://www.oculovision.ca/lentilles-edof/",
  },
  {
    id: "light-adjustable-lenses",
    category: "vision-correction",
    name: {
      fr: "Lentilles ajustables à la lumière",
      en: "Light-Adjustable Lenses",
    },
    description: {
      fr: "Technologie innovante permettant d'ajuster la puissance de la lentille après l'implantation à l'aide de lumière UV. Dr. Grégoire a été le premier au Québec à les implanter en 2023.",
      en: "Innovative technology allowing lens power adjustment after implantation using UV light. Dr. Grégoire was the first in Quebec to implant them in 2023.",
    },
    url: "https://www.oculovision.ca/lentilles-ajustable-a-la-lumiere/",
  },
  {
    id: "clear-lens-surgery",
    category: "vision-correction",
    name: {
      fr: "Chirurgie réfractive du cristallin clair",
      en: "Clear Lens Refractive Surgery",
    },
    description: {
      fr: "Remplacement du cristallin naturel par une lentille intraoculaire pour corriger la vision, idéal pour les patients non éligibles au LASIK.",
      en: "Replacement of the natural lens with an intraocular lens to correct vision, ideal for patients not eligible for LASIK.",
    },
    url: "https://www.oculovision.ca/chirurgie-refractive-du-cristallin-clair/",
  },
  {
    id: "icl-evo-staar",
    category: "vision-correction",
    name: { fr: "Lentilles ICL EVO STAAR", en: "ICL EVO STAAR Lenses" },
    description: {
      fr: "Lentilles implantables qui se placent entre l'iris et le cristallin pour corriger la myopie, l'hypermétropie et l'astigmatisme sans modifier la cornée.",
      en: "Implantable lenses placed between the iris and natural lens to correct myopia, hyperopia, and astigmatism without altering the cornea.",
    },
    url: "https://www.oculovision.ca/lentilles-icl-evo-staar/",
  },

  // Refractive Surgery
  {
    id: "lasik",
    category: "refractive-surgery",
    name: { fr: "Laser LASIK", en: "LASIK Laser" },
    description: {
      fr: "Le LASIK utilise un laser excimer pour remodeler la cornée et corriger la myopie, l'hypermétropie et l'astigmatisme. Récupération rapide en 24 heures.",
      en: "LASIK uses an excimer laser to reshape the cornea and correct myopia, hyperopia, and astigmatism. Quick 24-hour recovery.",
    },
    url: "https://www.oculovision.ca/le-laser-lasik/",
  },
  {
    id: "intralase",
    category: "refractive-surgery",
    name: { fr: "Laser Intralase", en: "Intralase Laser" },
    description: {
      fr: "Technologie laser femtoseconde utilisée pour créer le volet cornéen lors du LASIK, offrant une précision accrue et un confort optimal.",
      en: "Femtosecond laser technology used to create the corneal flap during LASIK, offering increased precision and optimal comfort.",
    },
    url: "https://www.oculovision.ca/le-laser-intralase/",
  },
  {
    id: "femtosecond",
    category: "refractive-surgery",
    name: {
      fr: "Chirurgie au laser femtoseconde",
      en: "Femtosecond Laser Surgery",
    },
    description: {
      fr: "Chirurgie sans lame utilisant un laser femtoseconde de dernière génération pour une précision exceptionnelle.",
      en: "Bladeless surgery using state-of-the-art femtosecond laser for exceptional precision.",
    },
    url: "https://www.oculovision.ca/chirurgie-au-femtoseconde-sans-lame/",
  },
  {
    id: "wavelight",
    category: "refractive-surgery",
    name: {
      fr: "Laser réfractif Wave Light EX500",
      en: "Wave Light EX500 Refractive Laser",
    },
    description: {
      fr: "Laser excimer de pointe offrant des traitements rapides et personnalisés pour la correction de la vue.",
      en: "State-of-the-art excimer laser offering fast and customized treatments for vision correction.",
    },
    url: "https://www.oculovision.ca/chirurgie-au-laser-refractif-wave-light-ex500/",
  },
  {
    id: "cataract-surgery",
    category: "refractive-surgery",
    name: {
      fr: "Chirurgie réfractive de la cataracte",
      en: "Refractive Cataract Surgery",
    },
    description: {
      fr: "Chirurgie de la cataracte avec implantation de lentilles premium pour une vision optimale sans lunettes.",
      en: "Cataract surgery with premium lens implantation for optimal glasses-free vision.",
    },
    url: "https://www.oculovision.ca/chirurgie-refractive-de-la-cataracte/",
  },

  // Dry Eye
  {
    id: "lipiflow",
    category: "dry-eye",
    name: { fr: "Traitement LipiFlow", en: "LipiFlow Treatment" },
    description: {
      fr: "Traitement thermique qui débouche les glandes de Meibomius pour restaurer la couche lipidique du film lacrymal.",
      en: "Thermal treatment that unblocks Meibomian glands to restore the lipid layer of the tear film.",
    },
    url: "https://www.oculovision.ca/traitement-lipiflow/",
  },
  {
    id: "blephex",
    category: "dry-eye",
    name: { fr: "Traitement BlephEx", en: "BlephEx Treatment" },
    description: {
      fr: "Nettoyage mécanique précis des paupières pour éliminer les bactéries et le biofilm responsables de la blépharite.",
      en: "Precise mechanical eyelid cleaning to remove bacteria and biofilm responsible for blepharitis.",
    },
    url: "https://www.oculovision.ca/traitement-blephex/",
  },
  {
    id: "ilux",
    category: "dry-eye",
    name: { fr: "Traitement iLux", en: "iLux Treatment" },
    description: {
      fr: "Système portable de lumière et de chaleur pour traiter la dysfonction des glandes de Meibomius de manière ciblée.",
      en: "Portable light and heat system for targeted treatment of Meibomian gland dysfunction.",
    },
    url: "https://www.oculovision.ca/traitement-ilux/",
  },
  {
    id: "ipl",
    category: "dry-eye",
    name: { fr: "Traitement IPL", en: "IPL Treatment" },
    description: {
      fr: "Lumière pulsée intense pour réduire l'inflammation et améliorer la fonction des glandes lacrymales.",
      en: "Intense pulsed light to reduce inflammation and improve tear gland function.",
    },
    url: "https://www.oculovision.ca/traitement-ipl/",
  },
];

export const pathologies = [
  {
    id: "myopia",
    name: { fr: "Myopie", en: "Myopia (Nearsightedness)" },
    description: {
      fr: "Difficulté à voir de loin. Corrigeable par LASIK, ICL ou lentilles.",
      en: "Difficulty seeing far away. Correctable with LASIK, ICL, or lenses.",
    },
  },
  {
    id: "hyperopia",
    name: { fr: "Hypermétropie", en: "Hyperopia (Farsightedness)" },
    description: {
      fr: "Difficulté à voir de près. Corrigeable par chirurgie réfractive.",
      en: "Difficulty seeing up close. Correctable with refractive surgery.",
    },
  },
  {
    id: "astigmatism",
    name: { fr: "Astigmatisme", en: "Astigmatism" },
    description: {
      fr: "Vision floue causée par une cornée irrégulière. Corrigeable par LASIK ou lentilles toriques.",
      en: "Blurry vision caused by an irregular cornea. Correctable with LASIK or toric lenses.",
    },
  },
  {
    id: "presbyopia",
    name: { fr: "Presbytie", en: "Presbyopia" },
    description: {
      fr: "Perte progressive de la vision de près liée à l'âge. Solutions: lentilles trifocales, EDOF, ou chirurgie au cristallin clair.",
      en: "Age-related progressive loss of near vision. Solutions: trifocal lenses, EDOF, or clear lens surgery.",
    },
  },
  {
    id: "amd",
    name: {
      fr: "DMLA (Dégénérescence maculaire)",
      en: "AMD (Age-related Macular Degeneration)",
    },
    description: {
      fr: "Maladie de la rétine affectant la vision centrale. Diagnostic et suivi spécialisé disponible.",
      en: "Retinal disease affecting central vision. Specialized diagnosis and follow-up available.",
    },
  },
  {
    id: "diabetic-retinopathy",
    name: {
      fr: "Rétinopathie diabétique",
      en: "Diabetic Retinopathy",
    },
    description: {
      fr: "Complication oculaire du diabète affectant les vaisseaux sanguins de la rétine.",
      en: "Eye complication of diabetes affecting the blood vessels of the retina.",
    },
  },
  {
    id: "retinal-detachment",
    name: { fr: "Décollement de la rétine", en: "Retinal Detachment" },
    description: {
      fr: "Urgence médicale nécessitant une intervention rapide. Symptômes: éclairs, voile, corps flottants soudains.",
      en: "Medical emergency requiring prompt intervention. Symptoms: flashes, veil, sudden floaters.",
    },
  },
  {
    id: "floaters",
    name: { fr: "Corps flottants", en: "Floaters" },
    description: {
      fr: "Points ou filaments dans le champ visuel causés par le décollement du vitré. Généralement bénins mais à surveiller.",
      en: "Spots or strands in the visual field caused by vitreous detachment. Generally benign but should be monitored.",
    },
  },
  {
    id: "epiretinal-membrane",
    name: { fr: "Membrane épirétinienne", en: "Epiretinal Membrane" },
    description: {
      fr: "Fine membrane se formant sur la rétine pouvant causer une distorsion visuelle.",
      en: "Thin membrane forming on the retina that can cause visual distortion.",
    },
  },
  {
    id: "macular-hole",
    name: { fr: "Trou maculaire", en: "Macular Hole" },
    description: {
      fr: "Ouverture dans la macula causant une perte de vision centrale. Traitement chirurgical possible.",
      en: "Opening in the macula causing central vision loss. Surgical treatment available.",
    },
  },
];
