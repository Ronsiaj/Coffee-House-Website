import React from "react";
import { Container, Row, Col } from "reactstrap";

import coffee1 from "../Assets/images/coffee1.jpg";
import coffee2 from "../Assets/images/coffee2.jpg";
import coffee3 from "../Assets/images/coffee3.jpg";
import coffee4 from "../Assets/images/coffee4.png";

const MorningSection = () => {
  return (
    <section className="morning-section">
      <Container>

        <Row>

          {/* LEFT SIDE */}

          <Col md="5" className="morning-left">

            <h2>Morning Happy</h2>

            <p>
              Start your day with freshly brewed coffee made from
              premium roasted beans. Enjoy the perfect aroma,
              warm ambience and delightful flavors crafted
              by our expert baristas.
            </p>

          </Col>


          {/* RIGHT SIDE */}

          <Col md="7" className="visit-right">

            <h3>Visit Us Today</h3>

            <Row className="coffee-grid">

              <Col xs="6" md="3" className="coffee-card">
                <img src={coffee1} alt="coffee"/>
                <p>Cappuccino</p>
                <span>$5</span>
              </Col>

              <Col xs="6" md="3" className="coffee-card">
                <img src={coffee2} alt="coffee"/>
                <p>Latte</p>
                <span>$4</span>
              </Col>

              <Col xs="6" md="3" className="coffee-card">
                <img src={coffee3} alt="coffee"/>
                <p>Espresso</p>
                <span>$3</span>
              </Col>

              <Col xs="6" md="3" className="coffee-card">
                <img src={coffee4} alt="coffee"/>
                <p>Cold Brew</p>
                <span>$6</span>
              </Col>

            </Row>

          </Col>

        </Row>

      </Container>
    </section>
  );
};

export default MorningSection;