import React from 'react';
import './CSS/About.css'; 
import nur_banner from '../Components/Assets/nur_banner.jpg'


const About = () => {
  return (
    <div className="about-page">
      {/* Banner Image */}
      <div className="banner">
    <div className="banner-text">
      <h1>Welcome to Plant Bazaar</h1>
      <p>Your go-to place for all things plants!</p>
    </div>
    <img 
      src={nur_banner}
      alt="Shop Banner" 
      className="banner-img"
    />
  </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About Us</h2>
        <p>
          At Plant Bazaar, we believe that plants are not just a hobby, but a way of life. We offer a variety of indoor 
          and outdoor plants to help you create your own green sanctuary. Our mission is to make your gardening journey 
          as easy and enjoyable as possible.
        </p>
      </div>

      {/* Values Section */}
      <div className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li>🌿 Quality plants nurtured with care.</li>
          <li>🌱 Promoting sustainable living.</li>
          <li>🌻 Expert guidance on plant care and maintenance.</li>
          <li>🌼 Community-driven and customer-focused service.</li>
        </ul>
      </div>

      {/* Photo Grid Section */}
      <div className="photo-grid-section">
        <h2>Our Plant Collection</h2>
        <div className="photo-grid">
          <img 
            src="https://your-image-link.com/photo1.jpg" 
            alt="Plant 1" 
            className="grid-img"
          />
          <img 
            src="https://your-image-link.com/photo2.jpg" 
            alt="Plant 2" 
            className="grid-img"
          />
          <img 
            src="https://your-image-link.com/photo3.jpg" 
            alt="Plant 3" 
            className="grid-img"
          />
          <img 
            src="https://your-image-link.com/photo4.jpg" 
            alt="Plant 4" 
            className="grid-img"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have questions or need advice? Reach out to us at:
        </p>
        <p>Email: support@plantbazaar.com</p>
        <p>Phone: +91-9118167082</p>
        <p>Address: Modi nagar, Shankargarh, Prayagraj - 212108</p>
      </div>
    </div>
  );
};

export default About;
