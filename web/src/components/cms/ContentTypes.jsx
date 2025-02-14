import React from "react";
import "./ContentTypes.css";

const ContentTypes = () => {
  return (
    <div className="content-types">
      <h1 className="content-types-title">Types of Content We Offer</h1>

      {/* Section with a single continuous stick dividing all content */}
      <div className="content-stick-section">
        <div className="left-content" >
          <h2>Article</h2>
        </div>
        <div className="content-stick" ></div>
        <div className="right-content" style={{background:'#FFF706'}}>
          <h2>Article</h2>
        </div>
       
      </div>

      <div className="content-stick-section">
        <div className="left-content" style={{background:'#5FEA2D'}}>
          <h2>Article</h2>
        </div>
        <div className="content-stick"></div>
        <div className="right-content" style={{background:'#EA8F2D'}}>
          <h2>Article</h2>
        </div>
      </div>

     
    </div>
  );
};

export default ContentTypes;
