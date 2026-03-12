import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import logo from "../Assets/images/coffee-logo.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center">

          {/* LOGO */}
          <Col md="4" className="footer-logo text-center text-md-start">
            <img src={logo} alt="logo" />
          </Col>

          {/* SOCIAL ICONS */}
          <Col md="4" className="footer-social text-center">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </Col>

          {/* BUTTON */}
          <Col md="4" className="footer-btn text-md-end text-center">
            <Button className="footer-contact-btn">
              Contact Us
            </Button>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;