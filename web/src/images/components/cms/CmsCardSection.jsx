import React from "react";
import "./CmsCardSection.css";

const CmsCardSection = () => {
  const cardData = [
    { id: 1, title: "Articals 1", content: "Effortlessly manage your content with our CMS solutions." },
    { id: 2, title: "Articals 2", content: "Effortlessly manage your content with our CMS solutions." },
    { id: 3, title: "Articals 3", content: "Effortlessly manage your content with our CMS solutions." },
    { id: 4, title: "Articals 4", content: "Effortlessly manage your content with our CMS solutions." },
  ];

  return (
    <div className="cms-card-section">
      <div className="cms-card-header">
        <h1 className="cms-title">Features</h1>
        <p className="cms-description">
        Streamline your content management process with
our customizable and scalable CMS
solutionsStreamline your content management
process with our customizable and scalable CMS
solutionsStreamline your content management
process with our customizable and scalable CMS
solutions
        </p>
      </div>

      <div className="cms-card-container">
        {cardData.map((card) => (
          <div className="cms-card" key={card.id}>
            <h3 className="cms-card-title">{card.title}</h3>
            <p className="cms-card-content">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CmsCardSection;
