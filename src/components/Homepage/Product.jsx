import React from "react";
import DataIcon from "assets/icons/data-icon.svg";
import ImageScan from "assets/images/homepage/image-scan.svg";
import AbsoluteImage from "assets/images/homepage/product-card.svg";

const ProductComponent = () => {
  return (
    <div className="product-section">
      <div className="content">
        <div className="section-info">
          <img src={DataIcon} alt="" />
          <span>OUR PRODUCT</span>
        </div>
        <div className="image-text">
          <div className="text">
            <h1 className="title-text">
              All<span className="text-orange">-in-</span>One Platform
            </h1>
            <div className="desc">
              <span className="font-weight-700">Our platform</span>, tailor-made
              for Africa, provides decision-makers with comprehensive
              situational awareness, ensuring they remain well-informed and
              responsive to evolving situations.
            </div>
          </div>
          <div className="image">
            <div>
              <img src={ImageScan} alt="" />
            </div>
            <div>
              <img className="image-overlap" src={AbsoluteImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
