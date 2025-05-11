// src/components/About/about.jsx

import React from 'react';
import './about.css';
import aboutImage from '../../assets/about-food.jpg'; // Change path if needed

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2><span className="highlight">About...</span></h2>
          <p>
            ReFoodify connects surplus food donors with charities and food banks, facilitating
            seamless distribution to those in need. Our platform promotes sustainability by
            minimizing food waste while addressing hunger in our communities.
          </p>
          <h3>
            Let's connect to make a difference in our community by reducing food waste together.
          </h3>
          <button className="contact-button">Contact us</button>
        </div>

        <div className="about-image">
          <img src={aboutImage} alt="About food" />
        </div>
      </div>

      {/* Second Half of the About Section */}
      <div className="about-extended">
        <h2>How ReFoodify Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Register</h3>
            <p>Create an account as a donor, receiver, or volunteer.</p>
          </div>
          <div className="step">
            <h3>2. List Food</h3>
            <p>Donors list excess food with details (quantity, pickup time, location).</p>
          </div>
          <div className="step">
            <h3>3. Match</h3>
            <p>Our system matches donors with nearby NGOs or individuals.</p>
          </div>
          <div className="step">
            <h3>4. Pickup & Deliver</h3>
            <p>Volunteers or NGOs collect food and distribute it to those in need.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
