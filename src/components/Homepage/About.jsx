import React from 'react'
import DataIcon from "assets/icons/data-icon.svg";
import AboutImage from 'assets/images/homepage/about-image.svg'
import EclipseIcon from "assets/icons/ellipse.svg";
import LineEclipseIcon from "assets/icons/line-ellipse.svg";
import AbsoluteImage from "assets/images/homepage/about-absolute-image.svg";

const AboutSectionComponent = () => {
  return (
    <div className="about-section">
      <div className="content">
        <div className="section-info">
          <img src={DataIcon} alt="" />
          <span>ABOUT US</span>
        </div>
        <div className="image-text">
          <div className="image">
            <img src={AboutImage} alt="" />
            <img className='image-overlap' src={AbsoluteImage} alt=''/>
          </div>
          <div className="text">
            <h1 className="title-text">
              Why SiSi <span className="text-orange">AI</span>?
            </h1>
            <div className="desc">
              <span className="font-weight-700">SiSi AI</span> utilizes machine
              learning and artificial intelligence to assist high level decision
              makers in Africa
            </div>
            <div className="list-container">
              <div className="list-item">
                <div>
                  <img src={LineEclipseIcon} alt="" />
                </div>
                <span>
                  SiSi AI platform is engineered to work with disparate and
                  limited data sets from any source and format
                </span>
              </div>
              <div className="list-item">
                <div>
                  <img src={LineEclipseIcon} alt="" />
                </div>
                <span>Respond promptly to critical events</span>
              </div>
              <div className="list-item">
                <div>
                  <img src={EclipseIcon} alt="" />
                </div>
                <span>
                  Deploy powerful predictive models to see around the corner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSectionComponent;