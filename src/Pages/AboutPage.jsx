import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "../Styles/AboutPage.css";
import Header from "../Components/Header";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import LogoLight from "../assets/images/logo-light.svg";
import LogoDark from "../assets/images/logo-dark.svg";
import WaterMarkLogo from "../assets/images/watermark-logo.svg";
import WavesBg from "../assets/images/waves-bg.png";
import Valves from "../assets/images/valves.png";
import NavLeft from "../assets/images/nav-btn-left.svg";
import NavRight from "../assets/images/nav-btn-right.svg";
import ObjectiveImg from "../assets/images/objectives-bg.png";
import VisionLogo from "../assets/images/vision-logo.svg";
import CastIron from "../assets/images/castironadapter.png";
import PipeAdapter from "../assets/images/pipeadapter.png";
import FootValve from "../assets/images/footvalve.png";
import PumpAdapter from "../assets/images/pumpadapter.png";
import JetAssembly from "../assets/images/jetassembly.png";
import Reducers from "../assets/images/reducer.png";
import MissionLogo from "../assets/images/mission-logo.svg";
import LocationIcon from "../assets/images/location-icon.svg";
import MailIcon from "../assets/images/email-icon.svg";
import PhoneIcon from "../assets/images/phone-icon.svg";
import ScrollIcon from "../assets/images/scroll-icon.svg";
import QualityBg from "../assets/images/quality-bg.png";
import EmblaCarousel from "../Components/EmblaCarousel";
import { motion, useScroll } from "framer-motion";
import { useParallax } from "../lib/utils";

export default function AboutPage() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const productsGridRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false); // Track if the page is scrolled
  const [products, setProducts] = useState([]); // State to hold products

  const OPTIONS = { loop: true }; // embla carousel options

  // console.log(products);

  //Najas Parallax
  // const ParallaxSection = ({ id, children }) => {
  //   const ref = useRef(null);
  //   const { scrollYProgress } = useScroll({
  //     target: ref,
  //   });
  //   const y = useParallax(scrollYProgress, 100);
  //   return (
  //     <motion.section ref={ref} id={id} style={{ y }}>
  //       {children}
  //     </motion.section>
  //   );
  // };

  // Fetch products data from JSON file
  useEffect(() => {
    fetch("/ProductData.json") // Fetching from public folder
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Change threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    };
  }, []);

  // const scrollLeft = () => {
  //   if (productsGridRef.current) {
  //     productsGridRef.current.scrollBy({
  //       left: -300, // Adjust the scroll distance as needed
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // const scrollRight = () => {
  //   if (productsGridRef.current) {
  //     productsGridRef.current.scrollBy({
  //       left: 300, // Adjust the scroll distance as needed
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  const scrollPageDown = () => {
    window.scrollBy({
      top: 900, // Scroll down by 800px
      behavior: "smooth", // Smooth scroll behavior
    });
  };

  // Handlers for button clicks
  const handleExploreProducts = () => {
    navigate("/products"); // Navigate to products page
  };

  const handleContactUs = () => {
    navigate("/contact-us"); // Navigate to contact page
  };

  const scrollLeft = () => {
    if (productsGridRef.current) {
      productsGridRef.current.scrollTo({
        left: productsGridRef.current.scrollLeft - 100, // Adjust scroll position
        behavior: "smooth", // Ensures smooth scrolling
      });
    }
  };

  const scrollRight = () => {
    if (productsGridRef.current) {
      productsGridRef.current.scrollTo({
        left: productsGridRef.current.scrollLeft + 100, // Adjust scroll position
        behavior: "smooth", // Ensures smooth scrolling
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 3000); // Automatically scroll every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
  return (
    <>
      {/* Show the dark header if scrolled, otherwise the light header */}
      <div className="header-top">
        {isScrolled ? (
          <Header logo={LogoDark} textColor="dark" />
        ) : (
          <Header logo={LogoLight} textColor="light" />
        )}
      </div>

      <div className="about-page">
        {/* Hero Section */}
        <section  className="hero">
          <div className="hero-overlay">
            <h1 className="hero-overlay-text" data-aos="fade-right">
              Precision Engineered Pipe Fittings & Valves
            </h1>
          </div>
          <div className="scroll-down">
            <img src={WaterMarkLogo} className="water-mark-logo" />
            <span>
              <img
                src={ScrollIcon}
                onClick={scrollPageDown}
                alt="Scroll Down"
              />
            </span>
          </div>
        </section>

        {/* About Us Section */}
        <section className="about-us-section">
          <div
            className="about-us-content"
            data-aos="fade-right"
            style={{
              // backgroundImage: 'url(/logo-dark.svg)',
              position: "relative",
              minHeight: "600px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "40px",
            }}
          >
            <h2 className="about-title">About us</h2>
            <h3 className="about-subtitle">Engineering with Purpose</h3>
            <p className="about-description" style={{ fontSize: "24px" }}>
              Eagle Pipe Fittings and Valves has been a pioneer in the pipe
              fittings industry since 2010. We specialize in manufacturing
              high-quality stainless steel and cast iron adapters, foot valves,
              and a wide range of other precision-engineered components.
            </p>
          </div>

          <div className="about-us-image" data-aos="fade-left">
            <div className="images-container">
              <Link to="/product-description/7">
                <img src={CastIron} alt="Pipe Fittings" />
              </Link>
              <Link to="/product-description/1">
                <img src={PipeAdapter} alt="Pipe Fittings" />
              </Link>
              <Link to="/product-description/2">
                <img src={PumpAdapter} alt="Pipe Fittings" />
              </Link>
              {/* <Link to="/product-description/3">
                <img src={Reducers} alt="Pipe Fittings" />
              </Link>
              <Link to="/product-description/4">
                <img src={FootValve} alt="Pipe Fittings" />
              </Link>
              <Link to="/product-description/4">
                <img src={JetAssembly} alt="Pipe Fittings" />
              </Link> */}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="products-section">
          <h2 className="product-section-title">Our Products</h2>
          {/* <div ref={productsGridRef} className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-card-img-wrapper">
                  <img
                    className="product-image"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                </div>
                <Link to="/products" className="product-link">
                  Know More
                </Link>
              </div>
            ))}
          </div> */}
          {/* <div className="carousel-navigation">
            <button className="nav-button prev" onClick={scrollLeft}>
            <img src={NavLeft} alt="Previous" />
            </button>
            <button className="nav-button next" onClick={scrollRight}>
            <img src={NavRight} alt="Next" />
            </button>
            </div> */}
          <EmblaCarousel slides={products} options={OPTIONS} />
        </section>
        {/* Objective and Mission Section */}
        <section className="objectives-section">
          <div className="objectives-section-wrapper">
            <div className="objective-content" data-aos="fade-right">
              <h2 className="objective-title">Our Objective</h2>
              <p className="objective-description" style={{ fontSize: "18px" }}>
                At Eagle Pipe Fittings and Valves, our goal is to lead the
                industry in providing high-quality, precision-engineered pipe
                fittings and valves. We focus on innovation, quality, and
                sustainability, ensuring our products exceed customer
                expectations and meet the highest standards in the industry.
                Since 2010, we’ve specialized in stainless steel and cast iron
                components, delivering reliable solutions for our clients'
                needs.
              </p>
              <img
                src="/industry.png"
                alt="Manufacturing"
                className="objective-image"
              />
            </div>
            <div className="mission-vision-section" data-aos="fade-left">
              <div className="mission-vision-section-wrapper">
                <div className="mission-vision-card mission-card">
                  <img src={MissionLogo} className="mission-vision-icon" />
                  <h3 className="mission-vision-card-title">Our Mission</h3>
                  <p
                    className="mission-vision-card-description"
                    style={{ fontSize: "18px" }}
                  >
                    To deliver top-quality pipe fittings and valves that exceed
                    our customers' expectations, through continuous innovation.
                  </p>
                </div>
                <div className="mission-vision-card vision-card">
                  <img src={VisionLogo} className="mission-vision-icon" />
                  <h3 className="mission-vision-card-title">Our Vision</h3>
                  <p
                    className="mission-vision-card-description"
                    style={{ fontSize: "18px" }}
                  >
                    To be the leading provider of precision-engineered pipe
                    fittings and valves, recognized for our commitment to
                    quality, customer satisfaction, and sustainable practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Section */}
        <section className="quality-section">
          <img
            src={QualityBg}
            className="quality-bg-img"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
          />
          <div className="quality-content">
            <h1 className="quality-title" data-aos="fade-right">
              DISCOVER THE DIFFERENCE <br /> QUALITY MAKES.
            </h1>
            <div className="quality-text" data-aos="fade-left">
              <p className="quality-description">
                At Eagle Pipe Fittings and Valves, we bring over a decade of
                expertise in delivering top-tier products that exceed industry
                standards. From precision-engineered stainless steel and cast
                iron adapters to innovative solutions in fluid control, our
                commitment to quality and customer satisfaction remains
                unmatched.
              </p>
              <button className="contact-button" onClick={handleContactUs}>
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
