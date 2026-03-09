import { Volume2 } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px clamp(24px, 5vw, 80px)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Volume2 size={16} color="#D4A853" />
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 16,
            fontWeight: 600,
            color: "#F5F0E8",
          }}
        >
          AURA<span style={{ color: "#D4A853" }}>studio</span>
        </span>
      </div>

      <p style={{ fontSize: 13, color: "rgba(245,240,232,0.3)", margin: 0 }}>
        &copy; {new Date().getFullYear()} AuraStudio. Tutti i diritti riservati.
      </p>
    </footer>
  );
}
