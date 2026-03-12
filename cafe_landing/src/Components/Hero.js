import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import coffeeImg from "../Assets/images/coffee-hero.png";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <Container>
        <Row className="align-items-center">

          {/* LEFT SIDE TEXT */}

          <Col md="6" className="hero-text">
            <h1>Fresh Coffee in the Morning</h1>

            <p>
              Start your day with the aroma of freshly brewed coffee.
              Enjoy premium quality beans, cozy ambience and delicious
              flavors crafted for every coffee lover.
            </p>

            <Button className="hero-btn">
              Order Now
            </Button>
          </Col>

          {/* RIGHT SIDE IMAGE */}

          <Col md="6" className="hero-image">
            <img src={coffeeImg} alt="Coffee" />
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Hero;