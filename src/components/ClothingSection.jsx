import { useState } from "react"
import "./ClothingSection.css"
import ProductModal from "./ProductModal"

const products = Array.from({ length: 19 }, (_, i) => ({
  id: i + 1,
  name: `Модель №${i + 1}`,
  price: 400 + i * 25,
  image: `/clothing${i + 1}.jpg`,
}))

export default function ClothingSection() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <section className="clothing" id="clothing">
      <h2 className="clothing-title">Коллекция одежды</h2>
      <div className="clothing-grid">
        {products.map((product) => (
          <div className="clothing-card" key={product.id}>
            <div className="image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="clothing-image"
              />
            </div>
            <div className="card-info">
              <h3 className="item-name">{product.name}</h3>
              <p className="item-price">₪{product.price}</p>
              <button className="item-button" onClick={() => setSelectedProduct(product)}>
                Купить
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  )
}
