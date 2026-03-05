import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');
  const navigate = useNavigate();

  const menuItems = [
    'Electronics',
    'Mobiles',
    'Fashion',
    'Home',
    'Appliances',
    'Grocery',
    'Books',
    'Furniture',
    'Offers%'
  ];

  const handleAdminClick = () => {
    navigate('/admin');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          {menuItems.map((item) => (
            <li key={item} className="navbar-item">
              <a 
                href="#"
                className={`navbar-link ${activeItem === item ? 'active' : ''}`}
                onMouseEnter={() => setActiveItem(item)}
                onMouseLeave={() => setActiveItem('')}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(item);
                }}
              >
                {item}
              </a>
            </li>
          ))}
          <li className="navbar-item admin-item">
            <button 
              className="navbar-admin-btn"
              onClick={handleAdminClick}
              title="Admin Dashboard"
            >
              ⚙️ Admin
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
