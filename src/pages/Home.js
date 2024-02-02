import React from "react";
import Footer from "../Components/Common/Footer/footer";
import Header from "../Components/Common/Header";
import LandingPageComponent from "../Components/LandingPage/Intro";

function HomePage() {
  return (
    <div>
      <Header />
      <LandingPageComponent />
      <Footer />
    </div>
  );
}

export default HomePage;
