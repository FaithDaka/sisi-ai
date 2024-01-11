import React from 'react'
import GlobeImage from "assets/images/homepage/globe-image.svg";
import StatCard from "assets/images/homepage/stat-card.svg";

const RevolutionComponent = () => {
  return (
    <div className="revolution-section">
      <div className="content">
        <div className='title'>
          <div className='title-text'>
            The <span className='text-orange'>AI</span> revolution is here. Decision Makers need to stay <span className='text-orange'>ahead</span> using
            predictive AI.
          </div>
          <div className='illustration'>
            <div className='stat-card'>
                <img src={StatCard} alt=''/>
            </div>
            <div className='globe'>
                <img src={GlobeImage} alt=''/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevolutionComponent