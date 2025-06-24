import "./HeroSection.css";

const sliderImages = [
  "/atelier1.jpg",
  "/atelier2.jpg",
  "/atelier3.jpg",
  "/atelier4.jpg",
];

export default function HeroSection() {
  const images = [...sliderImages, ...sliderImages, ...sliderImages];

  return (
    <section className="hero" id="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">HUTZAAV — Ателье Галины Хвостенко</h1>
        <p className="hero-text">
          Более 20 лет опыта, тонкий вкус и ручная работа на каждом этапе. Уникальные изделия, в которых сочетаются качество, комфорт и индивидуальность.
        </p>
        <p className="hero-subtext">
          Одежда, в которой вы чувствуете себя собой.
        </p>
        <button className="hero-button">Записаться</button>
      </div>

      <div className="hero-slider">
        <div className="slider-track">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`atelier-${index}`}
              className="slider-img"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
