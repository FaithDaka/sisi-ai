import React from "react";
import TopNavComponent from "./TopNavComponent";
import FooterComponent from "components/Footer";

const PageComponent = ({ children }) => {
  return (
    <div className="Page">
      <TopNavComponent />
      {children}
      <FooterComponent />
    </div>
  );
};

export default PageComponent;
