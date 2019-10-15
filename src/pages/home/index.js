import React from "react";
import HeroSection from "./../../components/HeroSection";
import FeaturesSection from "./../../components/FeaturesSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="primary"
        size="large"
        title="Anna Yuen"
        subtitle="Tufts Student, majoring in Computer Science passionate about Data Analysis and Visualization"
        
      />
      <FeaturesSection
        color="white"
        size="medium"
      />
    </>
  );
}

export default HomePage;
