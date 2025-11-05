// src/components/Header.js (UPDATED for better centering)
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const WEBSITE_NAME = "Vinnu's Telugu Christian Lyrics";

const Header = ({ title, children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const goBack = () => {
    navigate(-1);
  };

  return (
    <header className="app-header">
      
      {/* 1. CONSTANT HEADER (Website Name - Centered) */}
      <div className="constant-header">
        <h1 className="website-name">{WEBSITE_NAME}</h1>
      </div>
      
      {/* 2. SUB-HEADER (Page-Specific Title, Back & Home Icons) */}
      <div className="sub-header">
        
        {/* Left Side: Back button / Home Page 3-dots */}
        <div className="header-left">
          {/* Back Button Icon / Placeholder for centering */}
          {!isHomePage && (
            <button onClick={goBack} className="header-icon back-icon">
              &#x25C0; {/* Left Arrow Icon */}
            </button>
          )}
          
          {/* 3-dots Menu (Only on Home Page) */}
          {isHomePage && children && children[0]} 
        </div>

        {/* PAGE SPECIFIC TITLE (Sub-Header) */}
        <h2 className="page-title">{title}</h2>

        {/* Right Side: Home Icon / Placeholder for centering */}
        <div className="header-right-icons">
          {/* Home icon visible on all screens EXCEPT Home Page */}
          {!isHomePage && (
            <button onClick={() => navigate('/')} className="header-icon home-icon">
              &#8962; {/* Home icon */}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;