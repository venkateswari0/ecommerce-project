import React from 'react';
import ProductCard from './ProductCard';
import './TrendingDeals.css';

const TrendingDeals = () => {
  const trendingProducts = [
    {
      id: 101,
      image: 'https://via.placeholder.com/280x280?text=Trending+1',
      name: 'Best Seller Product',
      price: 1499,
      originalPrice: 2999,
      discount: 50,
      rating: 4.8,
      reviews: 5230
    },
    {
      id: 102,
      image: 'https://via.placeholder.com/280x280?text=Trending+2',
      name: 'Trending This Week',
      price: 3499,
      originalPrice: 5999,
      discount: 42,
      rating: 4.6,
      reviews: 3120
    },
    {
      id: 103,
      image: 'https://via.placeholder.com/280x280?text=Trending+3',
      name: 'Bestseller Item',
      price: 2199,
      originalPrice: 3999,
      discount: 45,
      rating: 4.7,
      reviews: 2850
    },
    {
      id: 104,
      image: 'https://via.placeholder.com/280x280?text=Trending+4',
      name: 'Hot Deal Today',
      price: 999,
      originalPrice: 1999,
      discount: 50,
      rating: 4.5,
      reviews: 4100
    },
    {
      id: 105,
      image: 'https://via.placeholder.com/280x280?text=Trending+5',
      name: 'Customer Favorite',
      price: 1999,
      originalPrice: 3499,
      discount: 43,
      rating: 4.6,
      reviews: 3450
    },
    {
      id: 106,
      image: 'https://via.placeholder.com/280x280?text=Trending+6',
      name: 'Most Watched',
      price: 899,
      originalPrice: 1799,
      discount: 50,
      rating: 4.4,
      reviews: 2980
    },
    {
      id: 107,
      image: 'https://via.placeholder.com/280x280?text=Trending+7',
      name: 'Flash Sale Item',
      price: 2599,
      originalPrice: 4499,
      discount: 42,
      rating: 4.7,
      reviews: 1650
    },
    {
      id: 108,
      image: 'https://via.placeholder.com/280x280?text=Trending+8',
      name: 'Limited Stock',
      price: 5999,
      originalPrice: 9999,
      discount: 40,
      rating: 4.8,
      reviews: 920
    }
  ];

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
  };

  return (
    <div className="trending-deals-container">
      <div className="trending-header">
        <h2>🔥 Trending Deals</h2>
        <p>Best sellers and most watched items</p>
      </div>

      <div className="trending-products">
        {trendingProducts.map(product => (
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

export default TrendingDeals;
