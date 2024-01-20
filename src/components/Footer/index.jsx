import React from 'react'
import SecondaryLogo from "assets/images/logos/secondary-logo.png"
import DataSphere from "assets/images/footer/data-sphere.svg"

const FooterComponent = () => {
  return (
    <div className="footer-section">
      <div className="content">
        <div className="left-section">
          <div className="logo">
            <img src={SecondaryLogo} alt="" height={120} />
          </div>
          <div className="tagline">
            Unleashing the Pan-African AI revolution
          </div>
          <div className="copyright">
            <div>© Copyright {new Date().getFullYear()} SiSi Ai</div>
          </div>
          <div className="subtitle-text"></div>
          <div className="copyright"></div>
        </div>
        <div className="middle-section">
          <img src={DataSphere} alt="" />
        </div>
        <div className="right-section"></div>
      </div>
    </div>
  );
}

export default FooterComponent;