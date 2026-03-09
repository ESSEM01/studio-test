import { useState } from "react";
import Reveal from "./Reveal";
import { SERVICES } from "../data/content";

function ServiceCard({ icon: Icon, title, description, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={index * 0.12}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          padding: "40px 32px",
          borderRadius: 2,
          border: `1px solid ${hovered ? "rgba(212,168,83,0.5)" : "rgba(255,255,255,0.06)"}`,
          background: hovered
            ? "linear-gradient(135deg, rgba(212,168,83,0.08) 0%, rgba(15,15,15,0.95) 100%)"
            : "rgba(255,255,255,0.02)",
          transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
          cursor: "default",
          overflow: "hidden",
        }}
      >
        {/* Top line animation */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: hovered ? "100%" : "0%",
            height: 1,
            background: "linear-gradient(90deg, transparent, #D4A853, transparent)",
            transition: "width 0.6s ease",
          }}
        />

        <Icon
          size={28}
          style={{
            color: "#D4A853",
            marginBottom: 20,
            transform: hovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />

        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 22,
            fontWeight: 600,
            color: "#F5F0E8",
            marginBottom: 12,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: 14,
            lineHeight: 1.7,
            color: "rgba(245,240,232,0.5)",
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ padding: "120px clamp(24px, 5vw, 80px)", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
            I Nostri Servizi
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#F5F0E8",
              marginBottom: 12,
              lineHeight: 1.15,
            }}
          >
            Tutto ciò di cui hai bisogno,
            <br />
            <span style={{ color: "rgba(245,240,232,0.35)" }}>sotto un unico tetto.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.4)",
              maxWidth: 520,
              marginBottom: 64,
            }}
          >
            Dal primo beat all'ultimo master, ti accompagniamo in ogni fase del processo creativo.
          </p>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 20,
          }}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
