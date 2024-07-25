import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import driveImage from "../assets/Drive-with-Uber.webp";

const styles = {
  heading: {
    fontFamily: "'Roboto', sans-serif", // Replace with your desired font-family
    fontWeight: 'bold',
    fontSize: '2rem', // Adjust size as needed
  },
  paragraph: {
    fontFamily: "'Arial', sans-serif", // Replace with your desired font-family
    fontSize: '1rem', // Adjust size as needed
    color: '#333', // Adjust color as needed
  },
};

const DriverSection = () => {
  return (
    <Container fluid className="drive-section py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <img src={driveImage} alt="Drive with Uber" className="img-fluid" />
        </Col>
        <Col md={6}>
          <h2 style={styles.heading}>Drive when you want, make what you need</h2>
          <p style={styles.paragraph}>
            Make money on your schedule with deliveries or rides—or both. You
            can use your own car or choose a rental through Uber.
          </p>
          <Button variant="dark" className="mr-2">
            Get started
          </Button>
          <Button variant="link" className="text-dark">
            Already have an account? Sign in
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DriverSection;
