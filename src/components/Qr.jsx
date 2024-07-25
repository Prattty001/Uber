import React from 'react';
import "../styles.css";

const Qr = () => {
  return (
<div className="app-container">
      <h2>It's easier in the apps</h2>
      <div className="qr-container">
        <div className="qr-box">
          <img src="qr.png" alt="Uber App QR Code" />
          <div className="text-container">
            <p>Download the Uber app</p>
            <span>Scan to download</span>
            <div className="arrow-container">
              <span className="arrow">→</span>
            </div>
          </div>
        </div>
        <div className="qr-box">
          <img src="qr2.png" alt="Driver App QR Code" />
          <div className="text-container">
            <p>Download the Driver app</p>
            <span>Scan to download</span>
            <div className="arrow-container">
              <span className="arrow">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qr;