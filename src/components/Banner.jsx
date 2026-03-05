import React, { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      title: 'Big Billion Sale',
      subtitle: 'Up to 70% OFF',
      description: 'Explore amazing deals on Electronics, Mobiles & more',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'Electronics Fest',
      subtitle: 'Starting ₹999',
      description: 'Smartphones, Laptops, and Accessories on sale',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Fashion Week',
      subtitle: 'Flat 50% OFF',
      description: 'Trending clothes and accessories for everyone',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      title: 'Home Essentials',
      subtitle: 'Up to 60% OFF',
      description: 'Furniture, decor, and home appliances',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="banner-container">
      <div 
        className="banner-slide"
        style={{ background: banners[currentSlide].color }}
      >
        <div className="banner-content">
          <h1 className="banner-title">{banners[currentSlide].title}</h1>
          <p className="banner-subtitle">{banners[currentSlide].subtitle}</p>
          <p className="banner-description">{banners[currentSlide].description}</p>
          <button className="banner-cta">Shop Now</button>
        </div>
      </div>

      {/* Navigation Controls */}
      <button className="banner-nav prev" onClick={prevSlide}>❮</button>
      <button className="banner-nav next" onClick={nextSlide}>❯</button>

      {/* Dots */}
      <div className="banner-dots">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
