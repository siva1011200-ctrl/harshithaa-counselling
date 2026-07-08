import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        <p className="contact-tag">Contact</p>

        <h2 className="contact-title">
          Let's Begin, Whenever You're Ready
        </h2>

        <div className="contact-grid">

          {/* LEFT CARD */}
          <div className="contact-card">

            <a
              href="mailto:harshithaajanu@gmail.com"
              className="contact-item"
            >
              📧 Email: harshithaajanu@gmail.com
            </a>

            <a
              href="tel:9361319855"
              className="contact-item"
            >
              📞 Phone: 93613 19855
            </a>

            <p className="contact-item">
              📍 Sessions: Online worldwide
            </p>

            <a
              href="https://forms.gle/9qJjTz4r3dAWKn6F9"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Book Appointment
            </a>

          </div>

          {/* RIGHT CARD */}
          <div className="contact-map">
            <p>Map / Location Placeholder</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;