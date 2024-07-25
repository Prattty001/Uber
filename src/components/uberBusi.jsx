import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import businImage from "../assets/Business-with-Uber.webp";
const UberBusi = () => {
  return (
    <Container fluid className="drive-section py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h2 className="display-4">
            The Uber you know, reimagined for business
          </h2>
          <p className="lead">
            Uber for Business is a platform for managing global rides and meals,
            and local deliveries, for companies of any size.
          </p>
          <Button variant="dark" className="mr-2">
            Get started
          </Button>
          <Button variant="link" className="text-dark">
            Check out our solutions
          </Button>
        </Col>
        <Col md={6} className="text-center">
          <img src={businImage} alt="Drive with Uber" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default UberBusi;
