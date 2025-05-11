import React from "react";
import "./services.css";
import donateImage from "../../assets/donate.jpg"; // Add this image
import mapImage from "../../assets/map.jpeg";       // Add this image
import userFriendlyImage from "../../assets/userfriendly.png"; // Add this image

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services...</h2>
      <p className="services-subtitle">Transforming Food Waste into Hope</p>
      <div className="services-container">
        <div className="service-card">
          <h3>Donate food waste to farmers</h3>
          <p>
            Connect with individuals and organizations to donate surplus food waste to farmers. The food waste will be usefull for farmers as a best natural fertilizers.
          </p>
          <img src={donateImage} alt="Food Donation" />
          <button>ENQUIRE NOW</button>
        </div>
        <div className="service-card">
          <h3>Location Based matching</h3>
          <p>
            Find nearby food donation opportunities through our advanced location-based matching system. This feature helps recipients quickly locate available food in their vicinity.
          </p>
          <img src={mapImage} alt="Location Based Matching" />
          <button>ENQUIRE NOW</button>
        </div>
        <div className="service-card">
          <h3>User friendly Experience</h3>
          <p>
            Our intuitive platform simplifies food donation, making connections between donors and charities seamless.
          </p>
          <img src={userFriendlyImage} alt="User Friendly" />
          <button>ENQUIRE NOW</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
