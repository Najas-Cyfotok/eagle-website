import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import '../Styles/ProductsPage.css';
import ProductsBg from '../assets/images/products-bg.png';
import Header from '../Components/Header';
import LogoDark from '../assets/images/logo-dark.svg';

export default function ProductsPage() {
  const [productsData, setProductsData] = useState([]); // State to hold product data
  const [sortOption, setSortOption] = useState('Relevance');
  const [searchQuery, setSearchQuery] = useState(''); // Search query state
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const itemsPerPage = 9; // Number of items to display per page
  const navigate = useNavigate(); // Initialize navigate

  // Fetch product data from JSON file
  useEffect(() => {
    fetch('/ProductData.json')
      .then((response) => response.json())
      .then((data) => setProductsData(data))
      .catch((error) => console.error('Error fetching product data:', error));

    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // Filter products based on search query and apply sorting
  const filteredProducts = productsData
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'Ascending : A to Z') {
        return a.name.localeCompare(b.name); // Sort products in ascending order (A to Z)
      } else if (sortOption === 'Descending : Z to A') {
        return b.name.localeCompare(a.name); // Sort products in descending order (Z to A)
      } else {
        return 0; // Default sorting for "Relevance"
      }
    });

  // Calculate the products to display on the current page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle product click to navigate to the product description page
  const handleProductClick = (productId) => {
    navigate(`/product-description/${productId}`);
  };

  return (
    <>
      <div className="header-top">
        <Header logo={LogoDark} textColor="dark" searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="products-page">
        {/* Banner Section */}
        <div className="banner-section" data-aos="fade-right">
          <div className="product-breadcrumb-container">
            <nav aria-label="product-breadcrumb">
              <ol className="product-breadcrumb">
                <li className="product-breadcrumb-item"><a href="/">Home</a> /</li>
                <li className="product-breadcrumb-item active" aria-current="page">Products</li>
              </ol>
            </nav>
          </div>
          <div className="products-title-section" data-aos="fade-right">
            <h1>Products</h1>
          </div>
        </div>
        <img src={ProductsBg} className="products-bg-img" alt="Products Background" />

        {/* Products Grid Section */}
        <div className="products-container" data-aos="fade-in">
          <div className="products-header" data-aos="fade-right">
            <span className="product-count">
              {filteredProducts.length > 0
                ? `Showing ${indexOfFirstProduct + 1}-${indexOfLastProduct > filteredProducts.length ? filteredProducts.length : indexOfLastProduct} of ${filteredProducts.length} products`
                : `0-${filteredProducts.length} of ${filteredProducts.length} products`}
            </span>

            {/* Sort Dropdown */}
            <div className="sort-dropdown">
              <label htmlFor="sort">Sort by:</label>
              <select id="sort" value={sortOption} onChange={handleSortChange}>
                <option value="Relevance">Relevance</option>
                <option value="Ascending : A to Z">Ascending : A to Z</option>
                <option value="Descending : Z to A">Descending : Z to A</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {currentProducts.length > 0 ? (
            <div className="product-items-grid" data-aos="fade-up">
              {currentProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="product-item"
                  onClick={() => handleProductClick(product.id)} // On click navigate to product description page
                  style={{ cursor: 'pointer' }} // Add cursor pointer to show it's clickable
                  data-aos="zoom-in" // Add AOS zoom-in effect
                >
                  <img src={product.imageUrl} alt={product.name} className="product-image" />
                  <h3 className="product-name">{product.name}</h3>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-products-message" data-aos="fade-left">
              <p>No products found</p>
            </div>
          )}

          {/* Pagination */}
          <div className="pagination" >
            <span className="pagination-text">Page {currentPage} of {totalPages}</span>
            <div className="pagination-controls">
              {[...Array(totalPages).keys()].map((page) => (
                <button
                  key={page + 1}
                  className={`pagination-button ${currentPage === page + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(page + 1)}
                
                >
                  {page + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
