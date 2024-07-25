import React from "react";
import "./styles.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DriveSection from "./components/DriveSection";
import Footer from "./components/Footer";


import Qr from "./components/Qr";
import UberBusi from "./components/uberBusi";
import MakingMoney from "./components/MakingMoney";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <DriveSection />
      <UberBusi />
     <MakingMoney />
<Qr />
      <Footer />

    </>
  );
};

export default App;
