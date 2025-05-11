import React from 'react';
import './Hero.css';
import heroImg from '../../assets/homefood.jpeg';
 // Add the image to public or assets

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Welcome to <br />ReFoodify...</h1>
        <p>
          Join ReFoodify today to help reduce food waste <br />
          while feeding those who need it most!
        </p>

        <div className="hero-input">
          <input type="email" placeholder="Enter Your Email" />
          <button>Get started</button>
        </div>

        <p className="privacy">We care about your data in our <a href="#">privacy policy.</a></p>

        <div className="hero-reviews">
          <div className="avatars">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user" />
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" />
            <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="user" />
            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="user" />
          </div>
          <div className="stars">
            ⭐️⭐️⭐️⭐️⭐️ <span>5.0</span> <br />
            <small>from 200+ reviews</small>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImg} alt="food waste" />
      </div>
    </section>
  );
}

export default Hero;
