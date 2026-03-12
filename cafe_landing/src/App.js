import React from "react";
import "./App.css";
import CafeNavbar from "./Components/Navbar";
import CafeHero from "./Components/Hero";
import Features from "./Components/Features";
import WhyChoose from "./Components/Choose";
import Visit from "./Components/Visit";
import CoffeeHeroSection from "./Components/Enjoy";
import TestimonialsSection from "./Components/Testimonials";
import Footer from "./Components/Footer";


function App() {
  return (
    <div>

      <CafeNavbar />

      <section id="home">
        <CafeHero />
      </section>

      <section id="features">
        <Features />
      </section>
      <section id="choose"><WhyChoose/></section>

      <section id="visit"><Visit/></section>
    
      <section id="enjoy"><CoffeeHeroSection/></section>

      <section id="testimonial"><TestimonialsSection/></section>

      <section id="Footer"><Footer/></section>

    </div>
  );
}

export default App;