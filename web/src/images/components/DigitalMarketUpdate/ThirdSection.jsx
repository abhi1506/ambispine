import React from "react";
import { FaArrowDown } from "react-icons/fa";
// import PropTypes from "prop-types";  
import thirdSecontion from './ThirdSecontion.module.css';


const ThirdSection = ({ heading, subtitle, heroId, heroimg, className, classNameheader=' ', imagclasName='' }) => {
  return (
    <div className={`${thirdSecontion['third-section-container']} ${className || ""}`} 
    id={heroId} 
    >
  <div className={thirdSecontion['third-section-main']}>
  <div className={thirdSecontion['third-section-main-right']}>
      <div className={thirdSecontion['third-section-img-container']}>
          <img src={heroimg} className={`${thirdSecontion['third-section-img']} ${imagclasName || ''}`} alt="" />
      </div>
    </div>
    <div className={thirdSecontion['third-section-main-left']}>
      <div className={thirdSecontion['third-section-left-content']}>
      <h1 className={`${thirdSecontion['third-section-heading']} ${classNameheader || ''}`}>{heading}</h1>
      <p className={thirdSecontion['third-section-subtitle']}>{subtitle}</p>
      </div>
    </div>
   
  </div>
</div>
  );
};

export default ThirdSection;
