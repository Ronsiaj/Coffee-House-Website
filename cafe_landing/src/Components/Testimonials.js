import React from "react";
import { Container, Row, Col } from "reactstrap";

import person1 from "../Assets/images/person1.jpg";
import person2 from "../Assets/images/person1.jpg";
import person3 from "../Assets/images/person1.jpg";

const TestimonialsSection = () => {
  return (
    <section className="testimonial-section">
      <Container>

        <Row className="testimonial-row">

          {/* Testimonial 1 */}
          <Col md="4" className="testimonial-item border-right">
            <div className="testimonial-content">

              <img src={person1} alt="person"/>

              <div>
                <h5>John Carter</h5>
                <p>
                  Amazing coffee and cozy atmosphere.
                  The aroma and taste are just perfect
                  for starting my mornings.
                </p>
              </div>

            </div>
          </Col>


          {/* Testimonial 2 */}
          <Col md="4" className="testimonial-item border-right">
            <div className="testimonial-content">

              <img src={person2} alt="person"/>

              <div>
                <h5>Emily Watson</h5>
                <p>
                  One of the best cafés I've visited.
                  Friendly staff and delicious
                  handcrafted beverages.
                </p>
              </div>

            </div>
          </Col>


          {/* Testimonial 3 */}
          <Col md="4" className="testimonial-item">
            <div className="testimonial-content">

              <img src={person3} alt="person"/>

              <div>
                <h5>Michael Lee</h5>
                <p>
                  Perfect place to relax and enjoy
                  premium coffee with friends.
                  Highly recommended!
                </p>
              </div>

            </div>
          </Col>

        </Row>

      </Container>
    </section>
  );
};

export default TestimonialsSection;