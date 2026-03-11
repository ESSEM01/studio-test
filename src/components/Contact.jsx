import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { CONTACT_INFO, FORM_FIELDS } from "../data/content";
import "./Contact.css";

function FormInput({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="form-input"
      />
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      {/* Section divider */}
      <div className="contact-divider" />

      <div className="contact-grid">
        {/* Left: info */}
        <div>
          <Reveal>
            <p className="contact-tag">Contattaci</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="contact-title">
              Iniziamo a creare
              <br />
              <span className="contact-title-italic">qualcosa di unico</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="contact-description">
              Raccontaci del tuo progetto. Ti risponderemo entro 24 ore per fissare la tua prima
              sessione.
            </p>
          </Reveal>

          {CONTACT_INFO.map((item, i) => (
            <Reveal key={i} delay={0.3 + i * 0.08}>
              <div className="contact-info-item">
                <item.icon size={18} color="#D4A853" />
                <span className="contact-info-text">{item.text}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Right: form */}
        <Reveal delay={0.2}>
          <div className="contact-form">
            {FORM_FIELDS.map((field, i) => (
              <FormInput key={i} {...field} />
            ))}

            <div>
              <label className="form-label">Messaggio</label>
              <textarea
                rows={4}
                placeholder="Raccontaci del tuo progetto..."
                className="form-textarea"
              />
            </div>

            <button className="contact-btn">
              Invia messaggio
              <ArrowRight size={16} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
