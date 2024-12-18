import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import LocationIcon from '../assets/images/location-icon.svg';
import MailIcon from '../assets/images/email-icon.svg';
import PhoneIcon from '../assets/images/phone-icon.svg';
import Header from '../Components/Header';
import LogoDark from '../assets/images/logo-dark.svg'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import '../Styles/ContactPage.css'; // Ensure the CSS file is properly linked

export default function ContactPage()  {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Duration of animation in milliseconds
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs.send(
      'service_zt4h6jd', // Your Service ID
      'template_ybnk1hm', // Your Template ID
      templateParams,     // Mapped template variables
      'ceU1zJoScDkS-f0si' // Your Public Key
    )
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        // Clear form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      },
      (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message, please try again later.');
      }
    );
  };

  return (
<>
<Header logo={LogoDark} textColor="dark" />
<div className="contact-page">
<div className="contact-section">
      {/* Contact Wrapper */}
      <div className="contact-wrapper" data-aos="fade-right">
        {/* Contact Title */}
        <h2 className="contact-title">Contact us</h2>

        {/* Contact Form & Info Container */}
        <div className="contact-container">
          {/* Contact Form */}
          <form className="contact-form" onSubmit={sendEmail} data-aos="fade-right">
            <div className="name-fields">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                className="contact-input fn"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                className="contact-input ln"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email *"
              className="contact-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              className="contact-input"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your message..."
              className="contact-input"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className="send-button" type="submit">
              Send Message
            </button>
          </form>



          {/* Contact Info */}
          <div className="contact-info" data-aos="fade-left">
            <h3>Let's Connect</h3>
            <div className="contact-content">
              <p>
                Questions, comments, or suggestions? Simply fill in the form and
                we’ll be in touch shortly.
              </p>
              <span>
                <img src={LocationIcon} className="icon" alt="Location Icon" />
                <h5>
                No: 23, Lakshmi Nagar,<br /> Vadavalli Road, Edayarpalayam, <br />
Coimbatore Tamil Nadu 641025
India
                </h5>
              </span>
              <span>
                <img src={PhoneIcon} className="icon" alt="Phone Icon" />
                <h5>7395889955, 7395889922</h5>
              </span>
              <span>
                <img src={MailIcon} className="icon" alt="Mail Icon" />
                <h5>info@epfv.in</h5>
              </span>
            </div>
          </div>
        </div>
      </div>

   
    </div>
    </div>
    </>
  );
};
