import "./PaintingModal.css"

export default function PaintingModal({ painting, onClose }) {
  if (!painting) return null

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
          <p className="modal-desc">Авторская живопись, душа в каждом мазке.</p>

          <button
            className="modal-buy"
            onClick={() => handleCheckout(painting)}
          >
            Оплатить
          </button>
        </div>
      </div>
    </div>
  )
}

async function handleCheckout(product) {
  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: product.title,
      price: product.price * 100,
    }),
  })

  const data = await response.json()
  if (data.url) {
    window.location.href = data.url
  } else {
    alert("Ошибка при переходе к оплате")
  }
}
