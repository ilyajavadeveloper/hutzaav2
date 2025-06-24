import { useTranslation } from "react-i18next";
import "./HeroSection.css";

const sliderImages = [
  "/atelier1.jpg",
  "/atelier2.jpg",
  "/atelier3.jpg",
  "/atelier4.jpg",
];

export default function HeroSection() {
  const { t } = useTranslation();
  const images = [...sliderImages, ...sliderImages, ...sliderImages];

  return (
    <section className="hero" id="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">{t("hero_title")}</h1>
        <p className="hero-text">{t("hero_text")}</p>
        <p className="hero-subtext">{t("hero_subtext")}</p>
        <button className="hero-button">{t("hero_button")}</button>
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
