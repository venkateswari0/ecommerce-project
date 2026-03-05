import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search for:', searchQuery);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Left Section - Logo */}
        <div className="header-left">
          <button 
            className="logo-btn"
            onClick={() => navigate('/')}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <Logo size="medium" />
          </button>
        </div>

        {/* Center Section - Search Bar */}
        <div className="header-center">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              className="search-input"
              placeholder="Search for products, brands, and more"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn">
              🔍
            </button>
          </form>
        </div>

        {/* Right Section - Auth & Actions */}
        <div className="header-right">
          <button 
            className="header-btn login-btn"
            onClick={handleLoginClick}
          >
            📝 Login
          </button>
          <button 
            className="header-btn cart-btn"
            onClick={handleCartClick}
          >
            🛒 Cart
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
