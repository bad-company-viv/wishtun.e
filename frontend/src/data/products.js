export const products = [
  {
    id: "sleep",
    categoryId: "sleep",
    title: "Sleep Mixtape",
    price: "₹2,499",
    priceValue: 2499,
    image: "/sleep-mixtape.png",
    description:
      "Deep delta waves designed to trigger rapid REM cycles and cellular regeneration.",
    features: [
      "Triggers rapid REM cycles",
      "Cellular restoration support",
      "Clinical-grade delta waves",
      "Lifetime access + Updates",
    ],
    tags: ["Clinical", "45 min"],
    reviews: 4.9,
    faqs: [
      {
        q: "How is this different from normal sleep music?",
        a: "This uses binaural beats specifically calibrated to entrain your brain into Delta state, rather than just relaxing you.",
      },
      {
        q: "Do I need headphones?",
        a: "Yes, for the binaural effect to work correctly, headphones are required.",
      },
    ],
  },
  {
    id: "party",
    categoryId: "party",
    title: "Party Mixtape",
    price: "₹1,999",
    priceValue: 1999,
    image: "/products/party.png",
    description:
      "High-vibe audio to shift your energy before a social event. Magnetic aura activation.",
    features: [
      "Social anxiety reduction",
      "Energy boost (Gamma waves)",
      "Charisma activation",
      "Pre-game ritual",
    ],
    tags: ["Social", "20 min"],
    reviews: 4.8,
    faqs: [
      {
        q: "When should I listen?",
        a: "20 minutes before you leave for an event or date.",
      },
    ],
  },
  {
    id: "shower",
    categoryId: "shower",
    title: "Shower Mixtape",
    price: "₹999",
    priceValue: 999,
    image: "/products/shower.png",
    description:
      "Turn your daily shower into a clarity tank. A focused alignment track to wash away mental static.",
    features: [
      "Alignment Reset Tone",
      "Water-tuned acoustics",
      "Short 15-min session",
      "Creative block breaker",
    ],
    tags: ["Alignment", "15 min"],
    reviews: 4.9,
    faqs: [
      {
        q: "Why the shower?",
        a: "Water creates a natural reset ritual, helping the audio feel more immersive and effective.",
      },
    ],
  },
  {
    id: "personalized",
    categoryId: "personalized",
    title: "Personalized Track",
    price: "₹9,999",
    priceValue: 9999,
    image: "/products/personalized.png",
    description:
      "A bespoke audio track engineered specifically for your unique energy signature, goals, and name.",
    features: [
      "1-on-1 Consultation with Ria",
      "Custom Intention Analysis",
      "Your Name Embedded Seamlessly",
      "Delivered within 7 days",
    ],
    tags: ["Exclusive", "Custom"],
    reviews: 5.0,
    faqs: [
      {
        q: "What makes this 'therapy'?",
        a: "It's tailored to your specific psychological triggers and goals, much like a therapy session but through sound.",
      },
    ],
  },
  {
    id: "journal",
    categoryId: "journal",
    title: "E-Journal",
    price: "₹1,999",
    priceValue: 1999,
    image: "/products/journal.png",
    description:
      "A digital integration companion. Stop bullet journaling and start manifestation tracking.",
    features: [
      "Daily Manifestation Check-ins",
      "Manifestation Prompts",
      "Audio Integration",
      "Progress Tracking",
    ],
    tags: ["Digital", "Daily"],
    reviews: 4.7,
    faqs: [
      {
        q: "Is this a physical book?",
        a: "No, it is a high-quality interactive PDF designed for tablets and phones.",
      },
    ],
  },
];

export const categories = {
  sleep: {
    id: "sleep",
    title: "Sleep Mixtape",
    subtitle: "Clinical-grade rest for recovery",
  },
  party: {
    id: "party",
    title: "Party Mixtape",
    subtitle: "High-vibe audio for social magnetism",
  },
  shower: {
    id: "shower",
    title: "Shower Rituals",
    subtitle: "Daily clarity sessions",
  },
  personalized: {
    id: "personalized",
    title: "Personalized Sound",
    subtitle: "Bespoke audio for your unique mind",
  },
  journal: {
    id: "journal",
    title: "Manifestation Journal",
    subtitle: "Track your mindset shifts",
  },
};
