import { useTranslation } from "react-i18next";
import "./ProductModal.css";

export default function ProductModal({ product, onClose }) {
  const { t } = useTranslation();
  if (!product) return null;

  const handleCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: product.name,
        price: product.price * 100,
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
          <img src={product.image} alt={product.name} />
        </div>

        <div className="modal-details">
          <h2 className="modal-title">{product.name}</h2>
          <p className="modal-price">₪{product.price}</p>
          <p className="modal-desc">{t("modal_clothing_desc")}</p>

          <button className="modal-buy" onClick={handleCheckout}>
            {t("modal_pay")}
          </button>
        </div>
      </div>
    </div>
  );
}
