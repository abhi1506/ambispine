import React from "react";
import "./SpreadFourthSection.css";

export default function SpreadFourthSection({
  heading,
  maintext,
  title,
  img1,
  img2,
  order1,
  order2,
}) {
  return (
    <div>
      <div className="spread-fourth-section">
        <div className={`spread-fourth-section-left ${order1 || ""}`}>
          <h1 className="spread-second-section-hader">
            {heading}
            <span className="spread-text">{maintext}</span> ads
          </h1>
          <p className="spread-second-section-subtitle">T{title}</p>
        </div>
        <div className={`spread-fourth-section-right ${order2 || ""}`}>
          <div className="spread-fourth-image-container">
            <img src={img1} className="spread-fourth-section-righit-1" />
            <img src={img2} className="spread-fourth-section-righit-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
