import React from "react";
import "./FeaturedProducts.css";
import { ShoppingCart, Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "LED Bulb 12W",
    price: 450,
    description: "Energy-efficient, long-lasting LED bulb",
    discount: 15,
    image: "https://down-ph.img.susercontent.com/file/cn-11134207-7r98o-lr2jo8h8sx4d2e",
  },
  {
    id: 2,
    name: "Circuit Breaker",
    price: 1250,
    description: "High-quality safety circuit breaker",
    discount: 0,
    image: "https://tse3.mm.bing.net/th/id/OIP.Tb5KfR6crV2ZQakaOBOe2QHaIi?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 3,
    name: "Extension Cord 5m",
    price: 850,
    description: "Heavy-duty 5-meter extension cord",
    discount: 10,
    image: "https://tse3.mm.bing.net/th/id/OIP.byAqRCNgWSOLW4KI5yTLTwHaHa?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 4,
    name: "Smart Switch",
    price: 2100,
    description: "WiFi-enabled smart wall switch",
    discount: 0,
    image: "https://tse2.mm.bing.net/th/id/OIP.gXKNlIXWYcjHOGcl8xX3gwHaEK?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 5,
    name: "Ceiling Fan",
    price: 4500,
    description: "Energy-efficient ceiling fan with remote",
    discount: 20,
    image: "https://i.pinimg.com/originals/37/c8/43/37c843ceb1e1e7b09b3e09cfa83cc601.jpg",
  },
  {
    id: 6,
    name: "Power Strip 6-Way",
    price: 1100,
    description: "Surge-protected 6-outlet power strip",
    discount: 0,
    image: "https://images-na.ssl-images-amazon.com/images/I/71Db6TgH3IL._AC_SL1500_.jpg",
  },
];

export function FeaturedProducts() {
  return (
    <section className="featured-section">
      <div className="featured-container">

        {/* Header */}
        <div className="featured-header">
          <div>
            <h2>
              Featured <span>Products</span>
            </h2>
            <p>Hand-picked selection of our best-selling electronics and electrical supplies.</p>
          </div>
          <a href="/products" className="view-all">View All Products →</a>
        </div>

        {/* Products Grid */}
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">

              {/* Product Image */}
              <div className="product-image">
                <img src={product.image} alt={product.name} className="product-img" />

                {product.discount > 0 && (
                  <div className="discount-badge">-{product.discount}% OFF</div>
                )}

                <div className="quick-actions">
                  <button className="icon-btn" aria-label="Add to Wishlist">
                    <Heart size={18} />
                  </button>
                  <button className="icon-btn" aria-label="Add to Cart">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="description">{product.description}</p>
                <div className="product-footer">
                  <div>
                    <span className="price-label">Price</span>
                    <span className="price">LKR {product.price.toLocaleString()}.00</span>
                  </div>
                  <button className="buy-btn">Buy Now</button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
