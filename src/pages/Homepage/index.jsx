import AboutSectionComponent from "components/Homepage/About";
import FeaturesComponent from "components/Homepage/Features";
import HeaderComponent from "components/Header";
import MissionComponent from "components/Homepage/Mission";
import ProductComponent from "components/Homepage/Product";
import RevolutionComponent from "components/Homepage/Revolution";
import React from "react";
import PageComponent from "components/Layout/PageComponent";

const HomePage = () => {
  return (
    <>
    <PageComponent>
      <div className="home-page">
        <HeaderComponent />
        <MissionComponent />
        <AboutSectionComponent />
        <RevolutionComponent />
        <ProductComponent />
        <FeaturesComponent />
      </div>
      </PageComponent>
    </>
  );
};

export default HomePage;
