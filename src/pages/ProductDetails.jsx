import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id: id,
    name: 'Premium Smartphone Pro Max',
    price: 29999,
    originalPrice: 49999,
    rating: 4.5,
    reviews: 1250,
    stock: 45,
    description: 'High-performance smartphone with advanced features and incredible performance.',
    features: [
      '6.7" AMOLED Display',
      '120Hz Refresh Rate',
      'Snapdragon 8 Gen 2',
      '12GB RAM',
      '256GB Storage',
      '50MP Camera',
      '5000mAh Battery',
      '65W Fast Charging',
      '5G Support',
      'IP68 Water Resistant'
    ],
    specifications: {
      Display: '6.7" QHD+ AMOLED, 120Hz',
      Processor: 'Snapdragon 8 Gen 2',
      RAM: '12GB LPDDR5',
      Storage: '256GB UFS 4.0',
      Camera: '50MP Main, 12MP Ultra-wide, 12MP Telephoto',
      Battery: '5000mAh with 65W Charging',
      OS: 'Android 14',
      Weight: '195g'
    },
    image: 'https://via.placeholder.com/400x400?text=Product+Details'
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} item(s) to cart`);
  };

  return (
    <div className="product-details-container">
      <div className="product-details-grid">
        {/* Product Image */}
        <div className="product-image-section">
          <img src={product.image} alt={product.name} />
          <div className="image-actions">
            <button className="action-btn">❤️ Wishlist</button>
            <button className="action-btn">📤 Share</button>
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info-section">
          <h1>{product.name}</h1>
          
          <div className="rating-section">
            {'⭐'.repeat(Math.floor(product.rating))}
            <span className="rating-value">{product.rating}</span>
            <span className="review-count">({product.reviews} reviews)</span>
          </div>

          <div className="price-section">
            <span className="current-price">₹{product.price.toLocaleString()}</span>
            <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
            <span className="discount">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          </div>

          <div className="stock-info">
            <span className="stock-status">
              {product.stock > 0 ? '✓ In Stock' : '✕ Out of Stock'}
            </span>
            <span className="stock-count">{product.stock} items available</span>
          </div>

          <div className="description">
            <p>{product.description}</p>
          </div>

          <div className="quantity-selector">
            <label>Quantity:</label>
            <div className="quantity-controls">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <input type="number" value={quantity} readOnly />
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              🛒 Add to Cart
            </button>
            <button className="buy-now-btn">💳 Buy Now</button>
          </div>

          <div className="delivery-info">
            <div className="delivery-item">
              <span className="icon">🚚</span>
              <div>
                <p>Free Delivery</p>
                <small>Available in your area</small>
              </div>
            </div>
            <div className="delivery-item">
              <span className="icon">💚</span>
              <div>
                <p>7 Days Return</p>
                <small>No questions asked</small>
              </div>
            </div>
            <div className="delivery-item">
              <span className="icon">🛡️</span>
              <div>
                <p>1 Year Warranty</p>
                <small>Manufacturer warranty</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features & Specifications */}
      <div className="product-details-tabs">
        <div className="tab-section">
          <h3>✨ Key Features</h3>
          <ul className="features-list">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="tab-section">
          <h3>📋 Specifications</h3>
          <table className="specifications-table">
            <tbody>
              {Object.entries(product.specifications).map(([key, value]) => (
                <tr key={key}>
                  <td className="spec-key">{key}</td>
                  <td className="spec-value">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
