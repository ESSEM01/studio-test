# AuraStudio — Portfolio Studio di Registrazione

Portfolio single-page per studio di registrazione professionale. Dark theme con accenti gold, animazioni scroll-reveal, design responsive.

## Stack

- **React 18** — UI components
- **Vite 6** — Build tool & dev server
- **Lucide React** — Icone
- **Google Fonts** — Playfair Display + DM Sans

## Quick Start

```bash
# Installa le dipendenze
npm install

# Avvia il dev server (http://localhost:3000)
npm run dev

# Build per produzione
npm run build

# Preview della build
npm run preview
```

## Struttura

```
aura-studio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Contact.jsx        # Form contatto + info
│   │   ├── Footer.jsx         # Footer
│   │   ├── Hero.jsx           # Hero con waveform animata
│   │   ├── Navbar.jsx         # Nav fixed + mobile menu
│   │   ├── NoiseOverlay.jsx   # Texture rumore
│   │   ├── Portfolio.jsx      # Griglia lavori
│   │   ├── Reveal.jsx         # Wrapper animazione scroll
│   │   ├── Services.jsx       # Card servizi
│   │   ├── Studio.jsx         # Equipment + illustrazione
│   │   ├── Testimonials.jsx   # Recensioni clienti
│   │   └── WaveformBar.jsx    # Waveform animata
│   ├── data/
│   │   └── content.js         # ← MODIFICA QUI tutti i contenuti
│   ├── hooks/
│   │   └── useInView.js       # IntersectionObserver hook
│   ├── App.jsx                # Composizione sezioni
│   ├── index.css              # Stili globali
│   └── main.jsx               # Entry point React
├── index.html
├── package.json
└── vite.config.js
```

## Personalizzazione

Tutti i contenuti (servizi, portfolio, equipment, testimonials, contatti) sono centralizzati in `src/data/content.js`. Modifica quel file per aggiornare il sito.

Per i colori del tema, cerca `#D4A853` (gold) e `#0A0A0A` (sfondo) nei componenti.
