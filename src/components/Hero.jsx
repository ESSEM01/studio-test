import { useState } from "react";
import { Play, Pause, ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import WaveformBar from "./WaveformBar";

export default function Hero() {
  const [playing, setPlaying] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px clamp(24px, 5vw, 80px) 80px",
        overflow: "hidden",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          animation: "pulse-glow 4s ease infinite",
        }}
      />

      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />

      <Reveal>
        <p
          style={{
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#D4A853",
            marginBottom: 32,
          }}
        >
          Professional Recording Studio
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(42px, 8vw, 96px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#F5F0E8",
            marginBottom: 28,
            maxWidth: 900,
          }}
        >
          Dove il suono
          <br />
          diventa{" "}
          <span
            style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #D4A853 0%, #F5E6B8 50%, #D4A853 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            arte
          </span>
        </h1>
      </Reveal>

      <Reveal delay={0.3}>
        <p
          style={{
            fontSize: "clamp(15px, 1.8vw, 18px)",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.45)",
            maxWidth: 560,
            marginBottom: 48,
          }}
        >
          Beatmaking, recording, mixing e mastering.
          <br />
          Il tuo progetto merita un suono professionale.
        </p>
      </Reveal>

      <Reveal delay={0.45}>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={() => scrollTo("contact")}
            style={{
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "16px 40px",
              background: "linear-gradient(135deg, #D4A853 0%, #B8922E 100%)",
              color: "#0A0A0A",
              border: "none",
              borderRadius: 2,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 8px 32px rgba(212,168,83,0.25)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            Prenota una sessione
          </button>

          <button
            onClick={() => scrollTo("portfolio")}
            style={{
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "16px 40px",
              background: "transparent",
              color: "#D4A853",
              border: "1px solid rgba(212,168,83,0.3)",
              borderRadius: 2,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.borderColor = "rgba(212,168,83,0.7)")}
            onMouseLeave={(e) => (e.target.style.borderColor = "rgba(212,168,83,0.3)")}
          >
            Ascolta i lavori
          </button>
        </div>
      </Reveal>

      {/* Waveform player */}
      <Reveal delay={0.6}>
        <div
          onClick={() => setPlaying(!playing)}
          style={{
            marginTop: 64,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "1px solid rgba(212,168,83,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {playing ? (
              <Pause size={14} color="#D4A853" />
            ) : (
              <Play size={14} color="#D4A853" style={{ marginLeft: 2 }} />
            )}
          </div>
          <WaveformBar playing={playing} />
        </div>
      </Reveal>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0.4,
          animation: "bounce 2s ease infinite",
        }}
      >
        <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
