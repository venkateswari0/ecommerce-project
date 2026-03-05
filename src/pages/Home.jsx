import React from 'react';
import '../pages/Home.css';
import Banner from '../components/Banner';
import ProductsGrid from '../components/ProductsGrid';
import TrendingDeals from '../components/TrendingDeals';

const Home = () => {
  return (
    <div className="home-page">
      <div className="banner-wrapper">
        <Banner />
      </div>
      <div className="products-section">
        <ProductsGrid />
      </div>
      <div className="trending-section">
        <TrendingDeals />
      </div>
    </div>
  );
};

export default Home;
