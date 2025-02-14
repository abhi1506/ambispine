import React from "react";
import { FaArrowDown } from "react-icons/fa";
// import PropTypes from "prop-types";  
import secondSecontion from './SecondSecontion.module.css';


const SecondSection = ({ heading, subtitle, heroId, heroimg, className, classNameheader='', imagclasName='' }) => {
  return (
    <div className={`${secondSecontion['second-section-container']} ${className || ""}`} 
    id={heroId} >
  
  <div className={secondSecontion['second-section-main']}>
    <div className={secondSecontion['second-section-main-left']}>
      <div className={secondSecontion['second-section-left-content']}>
      <h1 className={`${secondSecontion['second-section-heading']} ${classNameheader || ''}`}>{heading}</h1>
      <p className={secondSecontion['second-section-subtitle']}>{subtitle}</p>
      </div>
    </div>
    <div className={secondSecontion['second-section-main-right']}>
      <div className={secondSecontion['second-section-img-container']}>
          <img src={heroimg} className={`${secondSecontion['second-section-img']} ${imagclasName || ''}`} alt="" />
      </div>
    </div>

  </div>
</div>
  );
};

export default SecondSection;
