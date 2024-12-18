import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get the productId from route
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import Header from '../Components/Header';
import LogoDark from '../assets/images/logo-dark.svg';
import '../Styles/ProductDescriptionPage.css'; // Custom CSS for styling

export default function ProductDescriptionPage() {
  const { productId } = useParams(); // Get the productId from the URL
  const [product, setProduct] = useState(null); // State to hold the product details

  useEffect(() => {
    // Fetch product data from ProductData.json
    fetch('/ProductData.json')
      .then((response) => response.json())
      .then((data) => {
        // Find the product with the matching id
        const foundProduct = data.find((prod) => prod.id === parseInt(productId));
        setProduct(foundProduct); // Update the state with the found product
      })
      .catch((error) => console.error('Error fetching product data:', error));

    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, [productId]);

  if (!product) {
    // Display loading or error message until the product is fetched
    return <div>Loading product details...</div>;
  }

  return (
    <>
      <div className="header-top">
        <Header logo={LogoDark} textColor="dark" />
      </div>
      <div className="product-description-page">
        <div className="product-description-wrapper">
          <nav className="description-breadcrumb-nav" data-aos="fade-right">
            <ol className="description-breadcrumb">
              <li className="description-breadcrumb-item">
                Home &nbsp;\ &nbsp;
              </li>
              <li className="description-breadcrumb-item">
                Products &nbsp;\ &nbsp;
              </li>
              <li className="description-breadcrumb-item active" aria-current="page">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="product-details-container" >
            {/* Left side image section */}
            <div className="product-desc-image-container">
              <div className="product-desc-image-wrap" data-aos="zoom-in">
                <img
                  src={product.imageUrl} // Display the product image
                  alt={product.name}
                  className="product-desc-image"
                />
              </div>
            </div>

            {/* Right side details section */}
            <div className="product-info-container" data-aos="fade-left">
              <h1 className="product-title">{product.name}</h1>
              <p className="product-description">
                {product.description}
              </p>
              
              {/* Conditionally render the Properties section if properties array is not empty */}
              {product.properties && product.properties.length > 0 && (
                <div className="product-properties">
                  <ul className="properties-list" data-aos="fade-up">
                    {product.properties.map((property, index) => (
                      <li key={index} className="property-item">
                        {property}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Conditionally render the Sizes section if sizes array is not empty */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="product-sizes" >
                  <h4>Sizes:</h4>
                  <div className="sizes-container">
                    {product.sizes.map((size, index) => (
                      <span key={index} className="size-box">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Conditionally render the Grades section if grades is available */}
              {product.grades && product.grades.length > 0 && (
                <div className="product-grades" >
                  <h4>Grades:</h4>
                  <p>{product.grades}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
