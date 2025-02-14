import React from "react";
import secondSection from "./SecondSection.module.css"; 

const SecondSection = ({ 
  heading, 
  subtitle, 
  heroId, 
  heroimg, 
  className = "", 
  classNameheader = "", 
  imagclasName = "" 
}) => {
  return (
    <div className={`${secondSection["second-section-container"]} ${className}`} id={heroId}>
      <div className={secondSection["second-section-main"]}>
        {/* Left Section */}
        <div className={secondSection["second-section-main-left"]}>
          <div className={secondSection["second-section-left-content"]}>
            <h1 className={`${secondSection["second-section-heading"]} ${classNameheader}`}>
              {heading}
            </h1>
            <p className={secondSection["second-section-subtitle"]}>{subtitle}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className={secondSection["second-section-main-right"]}>
          <div className={secondSection["second-section-img-container"]}>
            <img
              src={heroimg}
              className={`${secondSection["second-section-img"]} ${imagclasName}`}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
