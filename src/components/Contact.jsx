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
    </section>
  );
}
