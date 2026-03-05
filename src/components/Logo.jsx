import React from 'react';
import './Logo.css';

const Logo = ({ size = 'medium' }) => {
  return (
    <div className={`logo-container ${size}`}>
      <svg 
        className="logo-svg" 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circle */}
        <circle cx="50" cy="50" r="48" fill="none" stroke="#00bcd4" strokeWidth="2"/>
        
        {/* Inner Design - Shopping Bag Icon */}
        <path 
          d="M 35 35 L 35 55 Q 35 65 45 65 L 55 65 Q 65 65 65 55 L 65 35" 
          fill="none" 
          stroke="#00bcd4" 
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Handle */}
        <path 
          d="M 40 35 Q 40 25 50 25 Q 60 25 60 35" 
          fill="none" 
          stroke="#00bcd4" 
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Highlight dot */}
        <circle cx="72" cy="28" r="3" fill="#00bcd4" opacity="0.7"/>
      </svg>
      
      <div className="logo-text">
        <h2>LINAKart</h2>
      </div>
    </div>
  );
};

export default Logo;
