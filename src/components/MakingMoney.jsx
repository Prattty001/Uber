import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import earImage from "../assets/Earn-with-Uber.webp"; // Update this line with your actual image file name

const MakingMoney = () => {
  return (
    <Container fluid className="drive-section py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <img src={earImage} alt="Drive with Uber" className="img-fluid" />
        </Col>
        <Col md={6}>
          <h2>Make money by renting out your car</h2>
          <p>
            Connect with thousands of drivers and earn more per week with Uber’s
            free fleet management tools.
          </p>
          <Button variant="dark" className="mr-2">
            Get started
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MakingMoney;