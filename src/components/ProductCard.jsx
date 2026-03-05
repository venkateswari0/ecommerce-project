import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ 
  id = 1,
  image = 'https://via.placeholder.com/280x280?text=Product',
  name = 'Product Name',
  price = 999,
  originalPrice = 1499,
  discount = 33,
  rating = 4.5,
  reviews = 128,
  onAddToCart = () => {}
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setIsAdded(true);
    onAddToCart({ id, name, price });
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleProductClick = () => {
    navigate(`/product/${id}`);
  };

  const discountPercent = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className="product-card" onClick={handleProductClick} style={{ cursor: 'pointer' }}>
      {/* Image Container */}
      <div className="product-image-container">
        <img 
          src={image} 
          alt={name} 
          className="product-image"
        />
      </div>

      {/* Product Info */}
      <div className="product-info">
        {/* Product Name */}
        <h3 className="product-name">{name}</h3>

        {/* Price Section */}
        <div className="price-section">
          <span className="current-price">₹{price}</span>
          {originalPrice && originalPrice > price && (
            <span className="original-price">₹{originalPrice}</span>
          )}
        </div>

        {/* Rating */}
        <div className="rating-section">
          <div className="star-rating">
            {'⭐'.repeat(Math.floor(rating))}
            {rating % 1 !== 0 && <span className="half-star">⭐</span>}
          </div>
          <span className="rating-value">{rating}</span>
          <span className="reviews-count">({reviews})</span>
        </div>

        {/* Add to Cart Button */}
        <button 
          className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
          onClick={handleAddToCart}
        >
          {isAdded ? '✓ Added to Cart' : '🛒 Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
