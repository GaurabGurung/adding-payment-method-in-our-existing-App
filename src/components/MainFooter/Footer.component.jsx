import React, { useEffect } from "react";
import "./Footer.scss";
import MailIcon from "../../assests/mail-line.png";
import PhoneIcon from "../../assests/phone-line.png";
import MapPinIcon from "../../assests/map-pin-line.png";

import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="footer">
      <Container>
        <Row>
          <Col lg="5">
            <div className="logo">
              <h4>Fashion Elegance</h4>
            </div>
            <p className="mt-4 mb-4">
              Welcome to Fashion Elegance, where style meets sophistication. At
              Fashion Elegance, we curate a collection of chic and timeless
              clothing, designed to bring out the elegance in every individual.
              Explore our diverse range of fashion essentials, from contemporary
              trends to classic pieces that stand the test of time. Elevate your
              wardrobe with Fashion Elegance – Your destination for refined
              style and unparalleled elegance in every stitch.
            </p>
          </Col>
          <Col lg="2">
            <div className="footer__quick-links">
              <h4 className="footer__title"> Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to={"/shop"}>Mens</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to={"/shop"}>Womens</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to={"/shop"}>Jackets</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to={"/shop"}>Sneakers</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to={"/shop"}>Hats</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer__quick-links">
              <h4 className="footer__title"> Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/">Home</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 ">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/checkout">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="footer__title">Contact</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0 contact_li">
                  <img src={MapPinIcon} alt="" />
                  <p>123 Mitchell Street, Brunswick VIC 3056</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 contact_li">
                  <img src={PhoneIcon} alt="" />
                  <p>+61 4223 07796</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 contact_li">
                  <img src={MailIcon} alt="" />
                  <p>gaurabgurung181@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12" className="text-center">
            <p className="footer__copyright">
              Copyright {year} developed by Gaurab Gurung, All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
