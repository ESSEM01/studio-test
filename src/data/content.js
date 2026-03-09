import {
  Mic,
  Music,
  Sliders,
  Disc3,
  AudioWaveform,
  Headphones,
  Mail,
  Phone,
  MapPin,
  Instagram,
} from "lucide-react";

// ─── Navigation ──────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "services", label: "Servizi" },
  { id: "portfolio", label: "Portfolio" },
  { id: "studio", label: "Lo Studio" },
  { id: "testimonials", label: "Recensioni" },
  { id: "contact", label: "Contatti" },
];

// ─── Services ────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    icon: Mic,
    title: "Recording Session",
    description:
      "Sessioni di registrazione professionali in ambienti trattati acusticamente. Vocali, strumenti acustici ed elettrici, ensemble.",
  },
  {
    icon: Music,
    title: "Beatmaking",
    description:
      "Produzione musicale originale su misura. Trap, hip-hop, R&B, pop, elettronica e qualsiasi genere tu abbia in mente.",
  },
  {
    icon: Sliders,
    title: "Mixing",
    description:
      "Mixaggio professionale multi-traccia. Bilanciamento, EQ, compressione, effetti e automazioni per un suono coeso e potente.",
  },
  {
    icon: Disc3,
    title: "Mastering",
    description:
      "Mastering stereo e stem. Loudness competitivo, coerenza timbrica e preparazione per tutte le piattaforme di distribuzione.",
  },
  {
    icon: AudioWaveform,
    title: "Sound Design",
    description:
      "Creazione di suoni unici, sintesi, foley e post-produzione audio per video, podcast, film e contenuti multimediali.",
  },
  {
    icon: Headphones,
    title: "Podcast & Voice Over",
    description:
      "Registrazione, editing e post-produzione per podcast, audiolibri, doppiaggi e voice-over professionali.",
  },
];

// ─── Portfolio ───────────────────────────────────────────────────────────
export const PORTFOLIO_ITEMS = [
  {
    title: "Eclisse Notturna",
    artist: "Marco Veil",
    category: "Mix & Master",
    image: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  },
  {
    title: "Cenere",
    artist: "Luna Rossa",
    category: "Produzione",
    image: "linear-gradient(135deg, #2d1b2e 0%, #4a1942 50%, #1a1a2e 100%)",
  },
  {
    title: "Frequenze",
    artist: "DJ Kosmo",
    category: "Mastering",
    image: "linear-gradient(135deg, #0a3d2e 0%, #1a5c3a 50%, #0d2818 100%)",
  },
  {
    title: "Senza Filtro",
    artist: "Ade & Simo",
    category: "Recording",
    image: "linear-gradient(135deg, #3d2b1f 0%, #5c3a1a 50%, #2d1b0f 100%)",
  },
  {
    title: "Parallelo",
    artist: "NKT",
    category: "Beat + Mix",
    image: "linear-gradient(135deg, #1a1a3e 0%, #2a1a4e 50%, #0f0f2e 100%)",
  },
  {
    title: "Onde Corte",
    artist: "Sara K.",
    category: "Podcast",
    image: "linear-gradient(135deg, #2e2e1a 0%, #4e4a1a 50%, #1e1e0a 100%)",
  },
];

// ─── Studio Equipment ────────────────────────────────────────────────────
export const EQUIPMENT = [
  { label: "Console & DAW", value: "Pro Tools HDX · SSL AWS 948" },
  { label: "Microfoni", value: "Neumann U87 · SM7B · AKG C414" },
  { label: "Monitor", value: "Genelec 8351B · Yamaha NS-10" },
  { label: "Outboard", value: "LA-2A · 1176 · Neve 1073" },
];

// ─── Testimonials ────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote:
      "Il suono che hanno tirato fuori dal mio progetto ha superato ogni aspettativa. Professionalità e attenzione maniacale al dettaglio.",
    name: "Marco Veil",
    role: "Artista / Cantautore",
  },
  {
    quote:
      "Studio incredibile, attrezzatura top e soprattutto un team che capisce la tua visione artistica. Ci torno sicuro.",
    name: "Luna Rossa",
    role: "Cantante R&B",
  },
  {
    quote:
      "I beat che mi hanno prodotto sono esattamente quello che cercavo. Creativi, originali e con un sound internazionale.",
    name: "NKT",
    role: "Rapper",
  },
];

// ─── Contact Info ────────────────────────────────────────────────────────
export const CONTACT_INFO = [
  { icon: Mail, text: "info@aurastudio.it" },
  { icon: Phone, text: "+39 06 1234 5678" },
  { icon: MapPin, text: "Via della Musica 42, Roma" },
  { icon: Instagram, text: "@aura.studio" },
];

// ─── Contact Form Fields ─────────────────────────────────────────────────
export const FORM_FIELDS = [
  { label: "Nome", placeholder: "Il tuo nome", type: "text" },
  { label: "Email", placeholder: "La tua email", type: "email" },
  { label: "Servizio", placeholder: "Recording, Mix, Master, Beat...", type: "text" },
];
