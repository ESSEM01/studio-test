import { Star } from "lucide-react";
import Reveal from "./Reveal";
import { TESTIMONIALS } from "../data/content";

function TestimonialCard({ quote, name, role, index }) {
  return (
    <Reveal delay={index * 0.15}>
      <div
        style={{
          padding: "40px 36px",
          borderLeft: "2px solid rgba(212,168,83,0.3)",
          background: "rgba(255,255,255,0.015)",
        }}
      >
        <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="#D4A853" color="#D4A853" />
          ))}
        </div>

        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 18,
            fontStyle: "italic",
            lineHeight: 1.8,
            color: "rgba(245,240,232,0.7)",
            marginBottom: 24,
          }}
        >
          &ldquo;{quote}&rdquo;
        </p>

        <div>
          <p style={{ fontSize: 14, fontWeight: 600, color: "#D4A853", marginBottom: 2 }}>
            {name}
          </p>
          <p style={{ fontSize: 12, color: "rgba(245,240,232,0.4)", margin: 0 }}>{role}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{ padding: "120px clamp(24px, 5vw, 80px)", position: "relative" }}
    >
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
            Testimonials
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
            Chi ha lavorato con noi{" "}
            <span style={{ fontStyle: "italic", color: "rgba(245,240,232,0.35)" }}>dice</span>
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 24,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
