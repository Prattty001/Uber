import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const SectionCard = ({ image, title, text, buttonText, linkText }) => {
  return (
    <Container fluid className="section-card py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <img src={image} alt={title} className="img-fluid" />
        </Col>
        <Col md={6}>
          <h2>{title}</h2>
          <p>{text}</p>
          <Button variant="dark" className="mr-2">
            {buttonText}
          </Button>
          {linkText && (
            <Button variant="link" className="text-dark">
              {linkText}
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SectionCard;
