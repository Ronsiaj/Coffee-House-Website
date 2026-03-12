import React from "react";
import { Row, Col, Button } from "reactstrap";
import coffeeImg from "../Assets/images/choose-image.jpg";

const WhyChoose = () => {
    return (
        <section className="why-wrapper">

            <Row className="g-0">

                {/* LEFT */}

                <Col xs="12" md="6" className="choose-left">

                    <div className="choose-text">
                        <h2>Why Choose Us?</h2>

                        <p>
                            Freshly brewed coffee made from premium beans
                            and served in a cozy atmosphere.
                        </p>

                        <Button className="choose-btn">
                            Read More
                        </Button>
                    </div>

                    <div className="choose-image">
                        <img src={coffeeImg} alt="coffee" />
                    </div>

                </Col>


                {/* RIGHT */}

                {/* RIGHT COLUMN */}

                <Col xs="12" md="6" className="timing-box">

                    <div className="timing-content">

                        <h3>Opening Hours</h3>

                        <ul>
                            <li><span>Monday - Friday</span> <span>7:00 AM - 9:00 PM</span></li>
                            <li><span>Saturday</span> <span>8:00 AM - 10:00 PM</span></li>
                            <li><span>Sunday</span> <span>8:00 AM - 8:00 PM</span></li>
                        </ul>

                    </div>

                </Col>

            </Row>

        </section>
    );
};

export default WhyChoose;