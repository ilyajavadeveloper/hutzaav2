import "./HeroSection.css"

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-title">HUTZAAV — Ателье с душой</h1>
          <p className="hero-text">
            Более 20 лет опыта, индивидуальный подход, высокое качество пошива и любовь к деталям.
          </p>
          <p className="hero-text">
            Галина Хвостенко создаёт уникальные вещи, которые подчеркивают индивидуальность и стиль.
          </p>
          <button className="hero-button">Записаться</button>
        </div>

        <div className="hero-right">
          <img
            src="/clothing11.jpg"
            alt="Ателье Hutzahav"
            className="hero-image-large"
          />
        </div>
      </div>
    </section>
  )
}
