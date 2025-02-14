import React from "react";
import styles1 from "./Herosection2.module.css";

const Herosection2 = ({ heading, subtitle, heroId, heroimg, backgroundImage, className = "", imagclasName = "" }) => {
  return (
    <div
      className={`${styles1["hero-section2-container"]} ${className}`}
      id={heroId}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className={styles1["hero-section2-main"]}>
        {/* Left Section */}
        <div className={styles1["hero-section2-main-left"]}>
          <div className={styles1["hero-section2-left-content"]}>
            <h1 className={styles1["hero-section2-heading"]}>{heading}</h1>
            <p className={styles1["hero-section2-subtitle"]}>{subtitle}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles1["hero-section2-main-right"]}>
          <div className={styles1["hero-section2-img-container"]}>
            <img src={heroimg} className={`${styles1["hero-section2-img"]} ${imagclasName}`} alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection2;


 