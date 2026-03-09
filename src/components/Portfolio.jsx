import { useState } from "react";
import { Play } from "lucide-react";
import Reveal from "./Reveal";
import { PORTFOLIO_ITEMS } from "../data/content";

function PortfolioItem({ title, artist, category, image, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal delay={index * 0.1}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          aspectRatio: "1/1",
          borderRadius: 2,
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: image,
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1)",
          }}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: hovered
              ? "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 100%)"
              : "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.6) 100%)",
            transition: "background 0.5s ease",
          }}
        />

        {/* Category badge */}
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "rgba(212,168,83,0.15)",
            border: "1px solid rgba(212,168,83,0.3)",
            padding: "4px 12px",
            borderRadius: 1,
            fontSize: 11,
            fontWeight: 500,
            color: "#D4A853",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {category}
        </div>

        {/* Info */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: 24,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            opacity: hovered ? 1 : 0.8,
            transition: "all 0.4s ease",
          }}
        >
          <p style={{ fontSize: 12, color: "#D4A853", marginBottom: 4, letterSpacing: "0.05em" }}>
            {artist}
          </p>
          <h4
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 20,
              fontWeight: 600,
              color: "#F5F0E8",
              margin: 0,
            }}
          >
            {title}
          </h4>
        </div>

        {/* Play button on hover */}
        {hovered && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "rgba(212,168,83,0.2)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(212,168,83,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Play size={20} fill="#D4A853" color="#D4A853" />
          </div>
        )}
      </div>
    </Reveal>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ padding: "120px clamp(24px, 5vw, 80px)", position: "relative" }}>
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
            Portfolio
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
              marginBottom: 64,
              lineHeight: 1.15,
            }}
          >
            Lavori <span style={{ fontStyle: "italic", color: "#D4A853" }}>recenti</span>
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {PORTFOLIO_ITEMS.map((item, i) => (
            <PortfolioItem key={i} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
