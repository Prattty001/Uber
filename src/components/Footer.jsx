import React from "react";
import "../styles.css";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaGlobe,
  FaMapMarkerAlt,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="u">Uber</h2>
          <p className="hh">Visit Help Center</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <div className="cpm">
              <a>About us</a>
              <a className="st">Our offerings</a>
              <a>Newsroom</a>
              <a>Investors</a>
              <a>Blog</a>
              <a>Careers</a>
              <a>Uber AI</a>
              <a>Gift cards</a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Products</h3>
            <div className="pro">
              <a>Ride</a>
              <a>Drive</a>
              <a>Deliver</a>
              <a>Eat</a>
              <a>Uber for Business</a>
              <a>Uber Freight</a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Global citizenship</h3>
            <div className="gc">
              <a>Safety</a>
              <a>Diversity and Inclusion</a>
              <a>Sustainability</a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Travel</h3>
            <div className="t">
              <a>Reserve</a>
              <a>Airports</a>
              <a>Cities</a>
            </div>
          </div>
        </div>
        <div className="footer-social">
          <a>
            <FaFacebookF />{" "}
          </a>
          <a>
            <FaTwitter />{" "}
          </a>
          <a>
            <FaYoutube />{" "}
          </a>
          <a>
            <FaLinkedinIn />{" "}
          </a>
          <a>
            <FaInstagram />{" "}
          </a>
          <div className="footer-location">
            <span>
              <FaGlobe /> English
            </span>
            <span>
              <FaMapMarkerAlt /> Dehradun
            </span>
          </div>
        </div>
        <div className="footer-apps">
          <a>
            <FaGooglePlay /> Get it on Google Play
          </a>
          <a>
            <FaApple /> Download on the App Store
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2024 Uber Technologies Inc.</span>
          <div>
            <a>Privacy</a>
            <a>Accessibility</a>
            <a>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
