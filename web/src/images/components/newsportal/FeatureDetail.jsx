import React from "react";
import { useParams, Link } from "react-router-dom";
import { newsData } from "../../data/newsMockData";
import "./featuredetail.css";

const FeatureDetail = () => {
  const { id } = useParams();
  const feature = newsData.features.find((f) => f.id === parseInt(id));

  if (!feature) {
    return <div className="error-message">Feature not found</div>;
  }

  return (
    <div className="feature-detail-container">
      <Link to="/news" className="back-button">
        ← Back to News
      </Link>

      <div className="feature-detail-content">
        <div className="feature-detail-header">
          <h1 className="feature-detail-title">{feature.title}</h1>
          <p className="feature-detail-description">{feature.description}</p>
        </div>

        <div className="feature-detail-image">
          <img src={feature.imageUrl} alt={feature.title} />
        </div>

        <div
          className="feature-detail-body"
          dangerouslySetInnerHTML={{ __html: feature.fullContent }}
        />
      </div>
    </div>
  );
};

export default FeatureDetail;
