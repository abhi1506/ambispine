import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import styles from "./WhyChooseSection.module.css"; // Renamed for clarity
import { Button } from "./../button/Button";

const WhyChooseSection = ({ data = [], name, subtitle, className = "", heroId }) => {
  return (
    <section className={`${styles["why-choose-section-container"]} ${className}`} id={heroId}>
      <div className={styles["why-choose-section-main"]}>
        
        {/* Left Section */}
        <div className={styles["why-choose-section-main-left"]}>
          <div className={styles["why-choose-section-left-content"]}>
            <h1 className={styles["why-choose-section-heading"]}>{name}</h1>
            <p className={styles["why-choose-section-subtitle"]}>{subtitle}</p>
            <div className={styles["why-choose-explore"]}>
              <Button name="Explore Solution" redirect="/services/explore-technologies" icon={<FaArrowRight />} />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles["why-choose-section-main-right"]}>
          <div className={styles["why-choose-section-why-chooses-container"]}>
            <div className={styles["why-choose-section-card-container"]}>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <div key={item.id || index} className={`${styles["why-chooses-section-card"]} ${item.className || ""}`}>
                    <h3 className={styles["why-choose-section-card-header"]}>{item.heading}</h3>
                    <p className={styles["why-choose-section-card-subtitle"]}>{item.description}</p>
                  </div>
                ))
              ) : (
                <p className={styles["why-choose-no-data"]}>No data available</p>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;
