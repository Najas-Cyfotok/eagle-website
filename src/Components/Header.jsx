import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate and useLocation
import { FaSearch } from 'react-icons/fa'; // Importing the search icon
import '../Styles/Header.css'; // Import custom CSS

export default function Header({ logo, textColor, searchQuery, setSearchQuery }) {
  const location = useLocation(); // Get current route path
  const [showDropdown, setShowDropdown] = useState(false)
  const toggleDropdown = (value) => setShowDropdown(value);
  const [showDropdown1, setShowDropdown1] = useState(false)
  const toggleDropdown1 = (value) => setShowDropdown1(value);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true); // State to track collapse/expand status
  const navigate = useNavigate(); // Initialize navigate

  // Conditionally set styles for light text color
  const isLight = textColor === 'light';

  // Update navbar background color based on collapse state and light theme
  const navbarStyle = {
    backgroundColor: !isNavbarCollapsed && isLight ? 'grey' : isLight ? 'rgba(255, 255, 255, 0.1)' : '#faf3ed',
    backdropFilter: isLight ? 'blur(2px)' : 'none', // Apply blur when light
  };

  const searchFormStyle = {
    backgroundColor: isLight ? 'transparent' : '#e3e0db',
    border: isLight ? '1px solid white' : 'none',
  };

  const placeholderStyle = {
    color: isLight ? '#fff' : '#6c6c6c', // Set placeholder color dynamically
  };

  const searchIconColor = isLight ? '#fff' : '#6c6c6c'; // Conditionally change search icon color

  const togglerColor = isLight ? 'invert(1)' : 'invert(0)';

  // Helper function to check if the link is active
  const isActive = (path) => location.pathname === path; // Define isActive here

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed); // Toggle navbar collapse state
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar" style={navbarStyle}>
      <div className="container-fluid justify-content-between">
        {/* Logo Section */}
        <img src={logo} alt="Eagle Logo" className="eagle-logo" />

        {/* Search Bar - Mobile View */}
        <div className="mobile-search-bar">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchFormStyle={searchFormStyle} searchIconColor={searchIconColor} placeholderStyle={placeholderStyle} />
        </div>

        {/* Toggler for Mobile View */}
        <button
          className="navbar-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavbarCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon" style={{ filter: togglerColor }}></span>
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${!isNavbarCollapsed ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${isActive('/') ? 'active-nav-link' : ''}`}
                style={{ color: isLight ? '#fff' : '#213343' }}
              >
                About
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => toggleDropdown(true)}
              onMouseLeave={() => toggleDropdown(false)}
            >
              <Link
                to="/products"
                className={`nav-link ${isActive('/products') ? 'active-nav-link' : ''}`}
                style={{ color: isLight ? '#fff' : '#213343' }}
              >
                Products
              </Link>
              <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                <Link to="/product-description/1" className="dropdown-item">Pipe Adapters</Link>
                <Link to="/product-description/2" className="dropdown-item">Pump Adapters</Link>
                <Link to="/product-description/3" className="dropdown-item">Reducers</Link>
                <Link to="/product-description/4" className="dropdown-item">Foot Valve</Link>
                <Link to="/product-description/5" className="dropdown-item">Expanders</Link>
                <Link to="/product-description/6" className="dropdown-item">Rope Collar</Link>
                <Link to="/product-description/7" className="dropdown-item">Cast Iron Adapters</Link>
                <Link to="/product-description/8" className="dropdown-item">Jet Assembly</Link>
                <Link to="/product-description/9" className="dropdown-item">Ferrule FC/NRV</Link>
              </div>
            </li>
            <li className="nav-item"
            onMouseEnter={() => toggleDropdown1(true)}
            onMouseLeave={() => toggleDropdown1(false)}>
              <Link
                to="/manufacturing-process"
                className={`nav-link ${isActive('/manufacturing-process') ? 'active-nav-link' : ''}`}
                style={{ color: isLight ? '#fff' : '#213343' }}
              >
                Manufacturing Process
              </Link>
              <div className={`dropdown-menu ${showDropdown1 ? 'show' : ''}`}>
                <Link to="/shell-molding" className="dropdown-item">Shell Molding</Link>
                <Link to="/co2-molding" className="dropdown-item">Co2 Molding</Link>
                <Link to="/powder-coating" className="dropdown-item">Powder Coating</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                className={`nav-link ${isActive('/contact-us') ? 'active-nav-link' : ''}`}
                style={{ color: isLight ? '#fff' : '#213343' }}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="web-search-bar">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchFormStyle={searchFormStyle} searchIconColor={searchIconColor} placeholderStyle={placeholderStyle} />
          </div>
        </div>
      </div>
    </nav>
  );
}

function SearchBar({ searchQuery, setSearchQuery, searchFormStyle, searchIconColor, placeholderStyle }) {
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle focus event to navigate to /products
  const handleSearchFocus = () => {
    navigate('/products'); // Navigate to /products when search input is focused
  };

  return (
    <form className="search-form" style={searchFormStyle}>
      <div className="search-input-container">
        <FaSearch className="search-icon" style={{ color: searchIconColor }} />
        <input
          className="search-input"
          type="text"
          placeholder="Search Products"
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus} // Navigate when the search bar is clicked/focused
          aria-label="Search"
          style={{ color: searchIconColor }} // Adjust the search input text color
        />
        {/* Use inline styles for placeholder color */}
        <style>{`
          .search-input::placeholder {
            color: ${placeholderStyle.color};
          }
        `}</style>
      </div>
    </form>
  );
}
