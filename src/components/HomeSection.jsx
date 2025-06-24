import { useState } from "react";
import { useTranslation } from "react-i18next";
import PaintingModal from "./PaintingModal";
import "./HomeSection.css";

const items = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Предмет №${i + 1}`,
  price: 300 + i * 40,
  image: `/home${i + 1}.jpg`,
}));

export default function HomeSection() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();

  const visibleItems = showAll ? items : items.slice(0, 4);

  return (
    <section className="home" id="home">
      <h2 className="home-title">{t("home_title")}</h2>
      <p className="home-subtext">{t("home_subtext")}</p>

      <div className="home-grid">
        {visibleItems.map((item) => (
          <div className="home-card" key={item.id}>
            <div className="home-image-wrapper">
              <img src={item.image} alt={item.title} className="home-image" />
            </div>
            <div className="home-info">
              <h3 className="home-name">{item.title}</h3>
              <p className="home-price">₪{item.price}</p>
              <button
                className="home-button"
                onClick={() => setSelectedItem(item)}
              >
                {t("home_button")}
              </button>
            </div>
          </div>
        ))}
      </div>

      {items.length > 4 && (
        <button className="home-toggle" onClick={() => setShowAll(!showAll)}>
          {showAll ? t("home_toggle_hide") : t("home_toggle_show")}
        </button>
      )}

      {selectedItem && (
        <PaintingModal
          painting={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
}
