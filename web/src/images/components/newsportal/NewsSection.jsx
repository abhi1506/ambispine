import React from "react";
import { Link } from "react-router-dom";
import { newsData } from "../../data/newsMockData";
import newsHero1 from "../../assets/AI.jpg";
import "./newssection.css";

const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="news-container">
        {/* Left Column */}
        <div className="main-content-news">
          <h2 className="section-title">Upcoming Event & Launches</h2>
          <div className="event-details">
            <p className="link-subtitle">{newsData.mainEvent.linkText}</p>
            <h3 className="event-title">{newsData.mainEvent.title}</h3>
            <p className="event-subtitle">{newsData.mainEvent.subtitle}</p>
          </div>

          <div className="featured-image">
            <img
              src={newsData.mainEvent.imageUrl}
              alt="Featured news"
              className="main-image"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="features-list">
          {newsData.features.map((feature) => (
            <Link
              to={`/feature/${feature.id}`}
              key={feature.id}
              className="feature-card"
            >
              <div className="feature-image">
                <img src={feature.imageUrl} alt={feature.title} />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
