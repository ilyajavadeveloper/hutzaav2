import { useTranslation } from "react-i18next";
import "./PaintingModal.css";

export default function PaintingModal({ painting, onClose }) {
  const { t } = useTranslation();
  if (!painting) return null;

  const handleCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: painting.title,
        price: painting.price * 100,
      }),
    });

    try {
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(t("modal_error"));
      }
    } catch {
      alert(t("modal_error"));
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-image-wrapper">
          <img src={painting.image} alt={painting.title} />
        </div>

        <div className="modal-details">
          <h2 className="modal-title">{painting.title}</h2>
          <p className="modal-price">₪{painting.price}</p>
          <p className="modal-desc">{t("modal_painting_desc")}</p>

          <button className="modal-buy" onClick={handleCheckout}>
            {t("modal_pay")}
          </button>
        </div>
      </div>
    </div>
  );
}
