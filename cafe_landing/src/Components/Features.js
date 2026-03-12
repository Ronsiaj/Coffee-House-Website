import React from "react";
import { Container, Row, Col } from "reactstrap";

import image from "../Assets/images/coffee-cup-icon.png";

const Features = () => {
  return (
    <section className="features-section" id="features">
      <Container>

        <Row className="text-center">

          <Col md="3" className="feature-item">
            <img src={image} alt="Espresso" />
            <h4>Espresso</h4>
            <p>
              Strong and bold coffee brewed with finely ground beans for
              a rich and intense flavor.
            </p>
          </Col>

          <Col md="3" className="feature-item separator">
            <img src={image} alt="Latte" />
            <h4>Latte</h4>
            <p>
              Smooth blend of espresso and steamed milk creating a creamy
              and balanced coffee experience.
            </p>
          </Col>

          <Col md="3" className="feature-item separator">
            <img src={image} alt="Cold Brew" />
            <h4>Cold Brew</h4>
            <p>
              Slow brewed cold coffee delivering a refreshing and smooth
              taste perfect for warm days.
            </p>
          </Col>

          <Col md="3" className="feature-item separator">
            <img src={image} alt="Cappuccino" />
            <h4>Cappuccino</h4>
            <p>
              A classic coffee with espresso, steamed milk and rich foam
              for a perfect balance of flavor.
            </p>
          </Col>

        </Row>

      </Container>
    </section>
  );
};

export default Features;