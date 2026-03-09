import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { CONTACT_INFO, FORM_FIELDS } from "../data/content";

function FormInput({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label
        style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "rgba(245,240,232,0.4)",
          marginBottom: 8,
          display: "block",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "14px 16px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 2,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 15,
          color: "#F5F0E8",
          outline: "none",
          transition: "border-color 0.3s ease",
          boxSizing: "border-box",
        }}
        onFocus={(e) => (e.target.style.borderColor = "rgba(212,168,83,0.4)")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.06)")}
      />
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "120px clamp(24px, 5vw, 80px) 80px", position: "relative" }}
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

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: 80,
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
              Contattaci
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
              Iniziamo a creare
              <br />
              <span style={{ fontStyle: "italic", color: "#D4A853" }}>qualcosa di unico</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.45)",
                marginBottom: 48,
              }}
            >
              Raccontaci del tuo progetto. Ti risponderemo entro 24 ore per fissare la tua prima
              sessione.
            </p>
          </Reveal>

          {CONTACT_INFO.map((item, i) => (
            <Reveal key={i} delay={0.3 + i * 0.08}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <item.icon size={18} color="#D4A853" />
                <span style={{ fontSize: 15, color: "rgba(245,240,232,0.6)" }}>{item.text}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Right: form */}
        <Reveal delay={0.2}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {FORM_FIELDS.map((field, i) => (
              <FormInput key={i} {...field} />
            ))}

            <div>
              <label
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(245,240,232,0.4)",
                  marginBottom: 8,
                  display: "block",
                }}
              >
                Messaggio
              </label>
              <textarea
                rows={4}
                placeholder="Raccontaci del tuo progetto..."
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 2,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  color: "#F5F0E8",
                  outline: "none",
                  resize: "vertical",
                  transition: "border-color 0.3s ease",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(212,168,83,0.4)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.06)")}
              />
            </div>

            <button
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
                display: "flex",
                alignItems: "center",
                gap: 10,
                justifyContent: "center",
                transition: "all 0.3s ease",
                marginTop: 8,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(212,168,83,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Invia messaggio
              <ArrowRight size={16} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
