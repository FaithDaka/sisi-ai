import React from "react";
import PrimaryLogo from "assets/images/logos/primary-logo.png";

const TopNavComponent = () => {
  return (
    <div className="top-bar-container">
      <div className="top-bar">
        <div className="logo">
          <img src={PrimaryLogo} alt="" height={32} />
        </div>
        <nav className="nav">
          <div>Home</div>
          <div>About</div>
          <div>Product</div>
          <div>Contact</div>
        </nav>
      </div>
    </div>
  );
};

export default TopNavComponent;
