import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Volume2 size={16} color="#D4A853" />
        <span className="footer-logo-text">
          AURA<span className="footer-logo-highlight">studio</span>
        </span>
      </div>

      <p className="footer-text">Testo del footer</p>
    </footer>
  );
}
