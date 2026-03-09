import { useMemo } from "react";
import Reveal from "./Reveal";
import { EQUIPMENT } from "../data/content";

function ConsoleIllustration() {
  const faders = useMemo(
    () => Array.from({ length: 48 }, () => ({ h: 20 + Math.random() * 20, o: 0.1 + Math.random() * 0.2 })),
    []
  );

  return (
    <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: 2, overflow: "hidden" }}>
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #1a1510 0%, #2a1f15 30%, #1a1510 60%, #0f0c08 100%)",
        }}
      />

      {/* Console faders */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "10%",
          right: "10%",
          height: "35%",
          background: "linear-gradient(180deg, rgba(212,168,83,0.08) 0%, rgba(212,168,83,0.02) 100%)",
          borderRadius: "4px 4px 0 0",
          border: "1px solid rgba(212,168,83,0.1)",
          borderBottom: "none",
          display: "flex",
          flexWrap: "wrap",
          padding: 12,
          gap: 4,
          alignContent: "start",
        }}
      >
        {faders.map((f, i) => (
          <div
            key={i}
            style={{
              width: 6,
              height: f.h,
              borderRadius: 1,
              background: `rgba(212,168,83,${f.o})`,
            }}
          />
        ))}
      </div>

      {/* VU meters */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 24,
        }}
      >
        {[0.7, 0.85].map((fill, i) => (
          <div
            key={i}
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              border: "1px solid rgba(212,168,83,0.2)",
              background: "rgba(0,0,0,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 2,
                height: 30,
                background: "#D4A853",
                transformOrigin: "bottom",
                transform: `rotate(${-45 + fill * 90}deg)`,
                borderRadius: 1,
              }}
            />
          </div>
        ))}
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, transparent 60%, rgba(10,10,10,0.5) 100%)",
        }}
      />
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

        {/* Right: illustration */}
        <Reveal delay={0.2}>
          <ConsoleIllustration />
        </Reveal>
      </div>
    </section>
  );
}
