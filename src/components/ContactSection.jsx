import "./ContactSection.css"

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Связаться с нами</h2>
      <div className="contact-info">

        <a
          href="tel:+972528491688"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          📞 +972 52-849-1688
        </a>

        <a
          href="https://wa.me/972528491688"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 WhatsApp
        </a>

        <a
          href="mailto:Hutzahav@gmail.com"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          ✉️ Hutzahav@gmail.com
        </a>

        <a
          href="https://www.facebook.com/hutzahav"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔵 Facebook
        </a>

        <a
          href="https://www.google.com/maps?q=Shavei+Zion+2,+Ashdod"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          📍 Shavei Zion 2, Ashdod
        </a>
      </div>
    </section>
  )
}
