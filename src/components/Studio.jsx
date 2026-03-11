import Reveal from "./Reveal";
import { EQUIPMENT } from "../data/content";
import STATS from "../data/stats.json";

const WAVE_BARS = Array.from({ length: 56 }, (_, i) =>
  8 + Math.abs(Math.sin(i * 0.38)) * 36 + Math.abs(Math.sin(i * 0.75 + 1)) * 18
);

function StudioPanel() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1a1510 0%, #211a0f 100%)",
        borderRadius: 4,
        border: "1px solid rgba(212,168,83,0.12)",
        padding: "44px 40px",
        display: "flex",
        flexDirection: "column",
        gap: 40,
      }}
    >
      {/* Stats grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          overflow: "hidden",
          borderRadius: 2,
          border: "1px solid rgba(212,168,83,0.1)",
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            style={{
              background: "#0f0c08",
              padding: "28px 24px",
              borderRight: i % 2 === 0 ? "1px solid rgba(212,168,83,0.1)" : "none",
              borderBottom: i < 2 ? "1px solid rgba(212,168,83,0.1)" : "none",
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 38,
                fontWeight: 700,
                color: "#D4A853",
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(245,240,232,0.35)",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Waveform decoration */}
      <div style={{ display: "flex", alignItems: "center", gap: 2, height: 64 }}>
        {WAVE_BARS.map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: h,
              borderRadius: 1,
              background: `linear-gradient(180deg, rgba(212,168,83,${0.5 + Math.abs(Math.sin(i * 0.38)) * 0.4}) 0%, rgba(212,168,83,0.08) 100%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Studio() {
  return (
    <section id="studio" style={{ padding: "120px clamp(24px, 5vw, 80px)", position: "relative" }}>
      {/* Section divider */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(212,168,83,0.15), transparent)",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: 64,
          alignItems: "center",
        }}
      >
        {/* Left: info */}
        <div>
          <Reveal>
            <p
              style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#D4A853",
                marginBottom: 16,
              }}
            >
              Lo Studio
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#F5F0E8",
                marginBottom: 28,
                lineHeight: 1.15,
              }}
            >
              Equipaggiamento
              <br />
              <span style={{ fontStyle: "italic", color: "rgba(245,240,232,0.35)" }}>
                di livello superiore
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.45)",
                marginBottom: 40,
              }}
            >
              Il nostro studio è progettato per ispirare la creatività. Trattamento acustico
              professionale, monitoraggio di riferimento e una catena di segnale che valorizza ogni
              sfumatura del tuo sound.
            </p>
          </Reveal>

          {EQUIPMENT.map((item, i) => (
            <Reveal key={i} delay={0.3 + i * 0.08}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 600, color: "#D4A853" }}>
                  {item.label}
                </span>
                <span style={{ fontSize: 14, color: "rgba(245,240,232,0.5)" }}>{item.value}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Right: studio panel */}
        <Reveal delay={0.2}>
          <StudioPanel />
        </Reveal>
      </div>
    </section>
  );
}
