import React from "react";
import { AiOutlineFileText, AiOutlineSetting, AiOutlineThunderbolt, AiOutlineSearch } from "react-icons/ai"; 
import "./CmsCardSection.css";

const CmsCardSection = () => {
  const cardData = [
    { id: 1, title: "Content Management", content: "Manage content efficiently with our CMS solutions.", icon: <AiOutlineFileText /> },
    { id: 2, title: "Organization", content: "Best practices for structuring digital content.", icon: <AiOutlineSetting /> },
    { id: 3, title: "Automation", content: "Enhance workflows with automation features.", icon: <AiOutlineThunderbolt /> },
    { id: 4, title: "SEO Optimization", content: "Improve SEO and user experience.", icon: <AiOutlineSearch /> },
  ];

  return (
    <div className="cms-card-section">
      <div className="cms-card-header">
        <h1 className="cms-title">Features</h1>
        <p className="cms-description">
          Streamline your content management process with our customizable and scalable CMS solutions.
        </p>
      </div>

      <div className="cms-card-container">
        {cardData.map((card) => (
          <div className="cms-card" key={card.id}>
            <span className="cms-card-icon">{card.icon}</span>
            <h3 className="cms-card-title">{card.title}</h3>
            <p className="cms-card-content">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CmsCardSection;

