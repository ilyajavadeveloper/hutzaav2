import "./Modal.css"

export default function ProductModal({ product, onClose }) {
  if (!product) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={product.image} alt={product.name} className="modal-image" />
        <h2 className="modal-title">{product.name}</h2>
        <p className="modal-price">₪{product.price}</p>
        <p className="modal-desc">Уникальный дизайн и высокое качество пошива.</p>
        <button className="modal-button" onClick={() => handleCheckout(product)}>Оплатить</button>
      </div>
    </div>
  )
}

async function handleCheckout(product) {
  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: product.name,
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
