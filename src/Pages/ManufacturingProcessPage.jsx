import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import '../Styles/ManufacturingProcessPage.css';
import Header from '../Components/Header';

import LogoDark from '../assets/images/logo-dark.svg';
import PowerCoating from '../assets/images/power-coating.png';
import ShellMoulding from '../assets/images/shell-moulding.png';
import Co2Moulding from '../assets/images/co2-moulding.png';
import ArrowRight from '../assets/images/arrow-right.svg';

export default function ManufacturingProcessPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <>
      <div className="header-top">
        <Header logo={LogoDark} textColor="dark" />
      </div>
      <div className="manufacturing-container">
        <div className="manufacturing-title-section">
          <div className="breadcrumb-container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Manufacturing Process</li>
              </ol>
            </nav>
          </div>

          <h1 className="manufacturing-title" data-aos="fade-right">Manufacturing Process</h1>
        </div>

        {/* Shell Molding Section */}
        <div className="section-container" data-aos="fade-left">
          <div className="text-container">
            <h2 className="section-heading">Shell Molding</h2>
            <div className="section-content">
              <p className="section-description">
                Shell molding, also known as shell casting or investment casting, is a precision
                casting process used to create intricate metal parts. This process allows us to produce
                high-quality, complex shapes with excellent surface finishes.
              </p>
              <span className="continue-reading-section">
                <a href="/shell-molding" className="continue-reading">
                  Continue reading
                </a>
                <img src={ArrowRight} className="arrow-right" alt="Arrow Right" />
              </span>
            </div>
          </div>
          <div className="image-container">
            <img src={ShellMoulding} alt="Shell Molding" className="section-image" />
          </div>
        </div>

        {/* CO2 Molding Section */}
        <div className="section-container reverse" data-aos="fade-right">
          <div className="text-container">
            <h2 className="section-heading">CO2 Molding</h2>
            <p className="section-description">
              CO2 molding, or CO2 sand casting, is a method where carbon dioxide is used to harden the sand mold.
              This process ensures that our castings have excellent surface finishes and dimensional accuracy.
            </p>
            <span className="continue-reading-section">
              <a href="/co2-molding" className="continue-reading">
                Continue reading
              </a>
              <img src={ArrowRight} className="arrow-right" alt="Arrow Right" />
            </span>
          </div>
          <div className="image-container">
            <img src={Co2Moulding} alt="CO2 Molding" className="section-image" />
          </div>
        </div>

        {/* Powder Coating Section */}
        <div className="section-container" data-aos="fade-left">
          <div className="text-container">
            <h2 className="section-heading">Powder Coating</h2>
            <p className="section-description">
              Powder coating is a finishing process used to apply a protective and decorative coating to metal surfaces.
              Unlike traditional liquid paint, powder coating involves applying a dry powder that is then cured under heat
              to form a durable finish.
            </p>
            <span className="continue-reading-section">
              <a href="/powder-coating" className="continue-reading">
                Continue reading
              </a>
              <img src={ArrowRight} className="arrow-right" alt="Arrow Right" />
            </span>
          </div>
          <div className="image-container">
            <img src={PowerCoating} alt="Powder Coating" className="section-image" />
          </div>
        </div>
      </div>
    </>
  );
}
