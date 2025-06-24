import { useState } from "react";
import PaintingModal from "./PaintingModal";
import "./PaintingSection.css";

const paintings = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Картина №${i + 1}`,
  price: 700 + i * 30,
  image: `/paint${i + 1}.jpg`,
}));

export default function PaintingSection() {
  const [selectedPainting, setSelectedPainting] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const visiblePaintings = expanded ? paintings : paintings.slice(0, 4);

  return (
    <section className="painting" id="painting">
      <h2 className="painting-title">Арт-коллекция HUTZAAV</h2>
      <p className="painting-subtext">
        Картины ручной работы — отражение характера и настроения. Мы создаём уникальные работы, чтобы они говорили за вас.
      </p>

      <div className="painting-grid">
        {visiblePaintings.map((painting) => (
          <div className="painting-card" key={painting.id}>
            <div className="painting-image-wrapper">
              <img
                src={painting.image}
                alt={painting.title}
                className="painting-image"
              />
            </div>
            <div className="painting-info">
              <h3 className="painting-name">{painting.title}</h3>
              <p className="painting-price">₪{painting.price}</p>
              <button
                className="painting-button"
                onClick={() => setSelectedPainting(painting)}
              >
                Купить
              </button>
            </div>
          </div>
        ))}
      </div>

      {paintings.length > 4 && (
        <button
          className="painting-toggle"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Скрыть" : "Показать все"}
        </button>
      )}

      {selectedPainting && (
        <PaintingModal
          painting={selectedPainting}
          onClose={() => setSelectedPainting(null)}
        />
      )}
    </section>
  );
}
