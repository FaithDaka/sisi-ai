import React from 'react'
import AnalyticsIcon from "assets/icons/analytics-icon.svg"
import GovernanceIcon from "assets/icons/governance-icon.svg";
import PolicingIcon from "assets/icons/policing-icon.svg";

const MissionComponent = () => {
  return (
    <div className="mission-section">
      <div className="content">
        <h2 className="title-text">
          EVERYTHING, <span className="text-orange">EVERYWHERE</span> At Your
          Fingertips
        </h2>
        <div className="subtitle-text">
          <h6>
            At the intersection of technology and progress is INTELLIGENCE
          </h6>
        </div>
        <div className="pointers">
          <div className="point">
            <img alt="" src={AnalyticsIcon} />
            <div className="text">Real-time Analytics</div>
          </div>
          <div className="point">
            <img alt="" src={GovernanceIcon} />
            <div className="text">Optimized E-governance</div>
          </div>
          <div className="point">
            <img alt="" src={PolicingIcon} />
            <div className="text">Predictive Policing</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionComponent;