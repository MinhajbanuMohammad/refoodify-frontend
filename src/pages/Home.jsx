// src/pages/Home.jsx

import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/about';
import Navbar from './components/Navbar/Navbar';
import Services from '../components/Services/services';
import Contact from "./components/Contact/Contact";
import Review from './components/Review/Review';
import AuthForm from './components/AuthForm/AuthForm';
const Home = () => {
  return (
    <>
       <Navbar />
      <section id="Home">
  {/* Home Section */}
</section>
      <section id="about">
  {/* About section content */}
</section>

      <section id="services">
  {/* Services Section */}
</section>
      <section id="Contact">
  {/* Contact Section */}
</section>
      <AuthForm />
      <section id="Reviews">
  {/* Contact Section */}
</section>
    </>
  );
};

export default Home;
