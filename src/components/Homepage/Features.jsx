import React from "react";
import EclipseIcon from "assets/icons/ellipse.svg";
import LineEclipseIcon from "assets/icons/long-line-ellipse.svg";
import DashboardMockup from "assets/images/homepage/dashboard-mockup.svg";

const FeaturesComponent = () => {
  return (
    <div className="features-section">
      <div className="content">
        <div className="title-text">
          <h2>
            <span className="text-orange">Technical</span> Features
          </h2>
        </div>
        <div className="illustration-container">
          <div className="features-container">
            <div className="list-container">
              <div className="list-item">
                <div>
                  <img src={LineEclipseIcon} alt="" />
                </div>
                <span>
                  SiSi AI processes data upon ingestion, utilizing powerful AI
                  to organize and complete disorganized and fragmented data from
                  any source
                </span>
              </div>
              <div className="list-item">
                <div>
                  <img src={LineEclipseIcon} alt="" />
                </div>
                <span>
                  Automatically identifies and translates over 50 languages and
                  dialects, including audio and video transcription
                </span>
              </div>
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
                  <img src={EclipseIcon} alt="" />
                </div>
                <span>
                  SiSi AI platform is engineered to work with disparate and
                  limited data sets from any source and format
                </span>
              </div>
            </div>
          </div>
          <div className="illustration">
            <img src={DashboardMockup} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesComponent;
