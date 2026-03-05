import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductsGrid.css';

const ProductsGrid = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      image: 'https://via.placeholder.com/280x280?text=Smartphone',
      name: 'Smartphone Pro Max',
      price: 29999,
      originalPrice: 49999,
      discount: 40,
      rating: 4.5,
      reviews: 1250
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/280x280?text=Laptop',
      name: 'Gaming Laptop Ultra',
      price: 89999,
      originalPrice: 129999,
      discount: 30,
      rating: 4.8,
      reviews: 890
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/280x280?text=Headphones',
      name: 'Wireless Headphones Pro',
      price: 4999,
      originalPrice: 7999,
      discount: 38,
      rating: 4.3,
      reviews: 560
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/280x280?text=Watch',
      name: 'Smart Watch Elite',
      price: 14999,
      originalPrice: 24999,
      discount: 40,
      rating: 4.6,
      reviews: 720
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/280x280?text=Camera',
      name: 'Digital Camera 4K',
      price: 34999,
      originalPrice: 54999,
      discount: 36,
      rating: 4.7,
      reviews: 430
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/280x280?text=Tablet',
      name: 'Tablet Pro 12 inch',
      price: 44999,
      originalPrice: 64999,
      discount: 31,
      rating: 4.4,
      reviews: 650
    },
    {
      id: 7,
      image: 'https://via.placeholder.com/280x280?text=Speaker',
      name: 'Bluetooth Speaker',
      price: 2499,
      originalPrice: 4999,
      discount: 50,
      rating: 4.2,
      reviews: 1100
    },
    {
      id: 8,
      image: 'https://via.placeholder.com/280x280?text=Charger',
      name: 'Fast Charger 65W',
      price: 1299,
      originalPrice: 1999,
      discount: 35,
      rating: 4.5,
      reviews: 2200
    },
    {
      id: 9,
      image: 'https://via.placeholder.com/280x280?text=Mouse',
      name: 'Gaming Mouse RGB',
      price: 1599,
      originalPrice: 2999,
      discount: 47,
      rating: 4.4,
      reviews: 890
    },
    {
      id: 10,
      image: 'https://via.placeholder.com/280x280?text=KeyBoard',
      name: 'Mechanical Keyboard',
      price: 3999,
      originalPrice: 6999,
      discount: 43,
      rating: 4.6,
      reviews: 1340
    },
    {
      id: 11,
      image: 'https://via.placeholder.com/280x280?text=Monitor',
      name: '27 inch 4K Monitor',
      price: 24999,
      originalPrice: 39999,
      discount: 37,
      rating: 4.7,
      reviews: 620
    },
    {
      id: 12,
      image: 'https://via.placeholder.com/280x280?text=Webcam',
      name: 'HD Webcam Pro',
      price: 2999,
      originalPrice: 5999,
      discount: 50,
      rating: 4.3,
      reviews: 540
    }
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log('Added to cart:', product);
  };

  return (
    <div className="products-grid-container">
      <div className="products-header">
        <h2>Featured Products</h2>
        <p>Discover our amazing collection of products</p>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
