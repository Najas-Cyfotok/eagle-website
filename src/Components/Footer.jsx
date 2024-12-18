import { Link } from 'react-router-dom';
import LogoDark from '../assets/images/logo-dark.svg';
import { Container, Grid } from '@mui/material';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social icons (LinkedIn instead of YouTube)
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import '../Styles/Footer.css';
import { Padding } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div>
        <Container>
          <Grid container spacing={3} className="footer-grid">
            {/* Logo and Social Media Section */}
            <Grid item xs={12} md={3} className="footer-logo-section">
              <img src={LogoDark} alt="Eagle Logo" className="footer-logo" />
              <div className="footer-social-icons">
                <a href="https://www.linkedin.com/company/eagle-pipe-fittings-and-valves/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/eaglepipefittingsandvalves?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/eaglepipefittings_valves?igsh=cXAwN2IzdnVmZXh4" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </Grid>

            {/* Quick Links Section */}
            <Grid item xs={12} md={3} className="footer-links">
              <h4 className="sect-title">Quick links</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <Link to="/" style={{ textDecoration: 'none', color: '#2c2c2c', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src="/information.png" alt="About Icon" width="15" height="15" />
                    <span>About</span>
                  </Link>
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <Link to="/manufacturing-process" style={{ textDecoration: 'none', color: '#2c2c2c', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src="/manufacturing.png" alt="Manufacturing Icon" width="15" height="15" />
                    <span>Manufacturing Process</span>
                  </Link>
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <Link to="/products" style={{ textDecoration: 'none', color: '#2c2c2c', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src="/product.png" alt="Products Icon" width="15" height="15" />
                    <span>Products</span>
                  </Link>
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <Link to="/contact-us" style={{ textDecoration: 'none', color: '#2c2c2c', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <PhoneIcon style={{ fontSize: '18px' }} />
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>

            </Grid>

            {/* Contact Us Section */}
            <Grid item xs={12} md={3} className="footer-links">
              <h4 className="sect-title">Contact Us</h4>
              <ul>
                <li>
                  <span style={{ paddingRight: "10px", color: 'inherit' }}><LocationOnIcon /></span>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=No+23+Lakshmi+Nagar+Vadavalli+Road+Edayarpalayam+Coimbatore+Tamil+Nadu+641025+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-icon"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >

                    No: 23, Lakshmi Nagar,<br />
                    Vadavalli Road, Edayarpalayam<br />
                    Coimbatore Tamil Nadu 641025
                    India
                  </a>

                </li>

                <li>
                  <a
                    href="mailto:info@epfv.in"
                    className="info-icon"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <span style={{ paddingRight: "10px", color: 'inherit' }}><MailIcon /></span>
                    info@epfv.in
                  </a>
                </li>

                <li>
                  <span className="info-icon"><PhoneIcon /></span>
                  <a
                    href="tel:7395889955"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    7395889955
                  </a>
                  ,
                  <a
                    href="tel:7395889922"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    7395889922
                  </a>
                </li>

              </ul>

            </Grid>

          </Grid>
        </Container>
        <div className="policy-section">
          <div className="divider"></div>
          <div className="policy-section-wrapper">
            <p className="copyrights-text">Copyright © 2024 Eagle Valves and Fittings</p>
            <p className="privacy-terms-text">All Rights Reserved | Terms and Conditions | Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>

  );
}
