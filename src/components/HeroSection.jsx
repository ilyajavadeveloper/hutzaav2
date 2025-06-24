import "./HeroSection.css"

export default function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">HUTZAAV — Ателье с душой</h1>
        <p className="hero-text">
          Более 20 лет создаём одежду, в которую влюбляешься. Индивидуальный пошив, премиум-материалы и стиль в каждой строчке.
        </p>
        <p className="hero-subtext">
          Автор — Галина Хвостенко. Одежда, которая говорит за вас.
        </p>
        <button className="hero-button">Записаться</button>
      </div>
    </section>
  )
}
