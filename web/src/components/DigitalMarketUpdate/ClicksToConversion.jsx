import React from "react";
import "./ClicksToConversion.css";

export default function ClicksToConversion({ data }) {
  return (
    <div className="clicks-to-conver-section">
      {data.map((item) => (
        <div key={item.id} className={`clicks-to-conver-card sco_container sco_container_${item.id}`}>
          <div className="sco_show_content">
            <h5 className="">{item.content}</h5>
          </div>
          <div className="sco_show_content_hover">
            <img src={item.Icon} className="sco-show-content-icon" alt={data.alt || 'clik icon'} />
            <h5 className="click-header">{item.content}</h5>
            <p className="click-sub">{item.hoverContent1}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
