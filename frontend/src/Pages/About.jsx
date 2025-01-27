import React from 'react';
import './CSS/About.css';
import nur_banner from '../Components/Assets/nur_banner.jpg';
import img_1 from '../Components/Assets/img_1.jpg';
import img_2 from '../Components/Assets/img_2.jpg';
import img_3 from '../Components/Assets/img_3.jpg';
import img_4 from '../Components/Assets/img_4.jpg';

const About = () => {
  return (
    <div className="about-page">
      {/* Banner Section */}
      <div className="banner">
        <div className="banner-text">
          <h1>Welcome to Plant Bazaar</h1>
          <p>Your go-to place for all things plants!</p>
        </div>
        <img src={nur_banner} alt="Shop Banner" className="banner-img" />
      </div>

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          At Plant Bazaar, we believe that plants are not just a hobby but a way of life. We offer a variety of indoor 
          and outdoor plants to help you create your own green sanctuary. Our mission is to make your gardening journey 
          as easy and enjoyable as possible.
        </p>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li>🌿 Quality plants nurtured with care.</li>
          <li>🌱 Promoting sustainable living.</li>
          <li>🌻 Expert guidance on plant care and maintenance.</li>
          <li>🌼 Community-driven and customer-focused service.</li>
        </ul>
      </section>

      {/* Photo Grid Section */}
      <section className="photo-grid-section">
        <h2>Our Plant Collection</h2>
        <div className="photo-grid">
          <img src={img_3} alt="Plant 1" className="grid-img" />
          <img src={img_4} alt="Plant 2" className="grid-img" />
          <img src={img_1} alt="Plant 3" className="grid-img" />
          <img src={img_2} alt="Plant 4" className="grid-img" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have questions or need advice? Reach out to us at:
        </p>
        <p>Email: support@plantbazaar.com</p>
        <p>Phone: +91-9118167082</p>
        <p>Address: Modi nagar, Shankargarh, Prayagraj - 212108</p>
      </section>

      {/* map */}
      <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d902.6015670860108!2d81.61263726955464!3d25.189518212179852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDExJzIyLjMiTiA4McKwMzYnNDcuOCJF!5e0!3m2!1sen!2sin!4v1731759914066!5m2!1sen!2sin"
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps Location"
    ></iframe>
  </div>
    </div>
  );
};

export default About;
