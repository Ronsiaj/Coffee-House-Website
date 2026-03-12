import React from "react";
import heroImg from "../Assets/images/coffee-display.png";


const CoffeeHeroSection = () => {
  return (
    <section
      className="coffee-hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay">

        <div className="hero-content">
          <h2>Enjoy Your Hour</h2>

          <p>
            Experience the perfect blend of aroma and flavor.
            Freshly brewed coffee crafted with passion to
            make every moment special.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CoffeeHeroSection;