import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", address: "", message: "" }); // clear form
    } catch (err) {
      alert("Failed to send message.");
      console.error("Error sending message:", err);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Contact Us...</h2>
        <h3>Our Office</h3>
        <div className="contact-info">
          <p>📞 +91 0000000000</p>
          <p>📧 refoodify@gmail.com</p>
          <p>📍 xxx, India</p>
        </div>
      </div>

      <div className="contact-right">
        <form onSubmit={handleSubmit}>
          <label>Enter Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Enter Your Address</label>
          <textarea
            name="address"
            placeholder="Type your Address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <label>Enter Your Message</label>
          <textarea
            name="message"
            placeholder="Type your Message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
