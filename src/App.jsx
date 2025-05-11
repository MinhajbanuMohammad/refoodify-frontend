// App.jsx

import React from 'react';

import Hero from './components/Hero/Hero';
import About from './components/About/about';
import Navbar from './components/Navbar/Navbar';
import Services from "./components/Services/services";
import Contact from "./components/Contact/Contact";
import Review from './components/Review/Review';
import AuthForm from './components/AuthForm/AuthForm';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <AuthForm />
      <Review />
    </>
  );
}

export default App;
