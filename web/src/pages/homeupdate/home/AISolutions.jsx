// AISolutions.jsx
import React from "react";
import "./AiSolutions.css";
import cloudHome from "../../../assets/cloudHome.jpg";
import cloudAiImage1 from "../../../assets/cloudAiImage1.png";
import cloudAiImage2 from "../../../assets/cloudAiImage2.png";
import solutionIcon1 from "../../../assets/cloud22 (3).jpg";
import solutionIcon2 from "../../../assets/cloud22 (4).jpg";
import solutionIcon3 from "../../../assets/cloud22 (5).jpg";
import AiHome1 from "../../../assets/cloud22 (8).jpg";
import AiHome2 from "../../../assets/cloud22 (7).jpg";
import AiHome3 from "../../../assets/cloud22 (6).jpg";
import AiHome4 from "../../../assets/cloud22 (2).jpg";
import { Link } from "react-router-dom";

const CloudCard = ({ title, description, backgroundImage, redirectlink }) => (
  <div
    className="cloud-card-home-page"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)), url(${backgroundImage})`,
    }}
  >
    <div className="card-content-home-page">
      <div className="glow-overlay-home-page"></div>
      <div className="content-wrapper-home-page">
        <h3>{title}</h3>
        <p style={{ color: "#BCCCDC", textAlign: "start" }}>{description}</p>
        <Link className="expand-button" to={redirectlink}>
          <span>Expand</span>
          <svg
            className="arrow-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  </div>
);
const FeatureItem = ({ icon, description }) => (
  <div className="feature-ai-item-container">
    <div className="feature-item">
      <div className="feature-icon-wrapper">
        <div className="icon-background"></div>
        <img src={icon} alt="" className="feature-icon" />
      </div>
      <div className="feature-content">
        <p>{description}</p>
        <div className="feature-indicator">
          <div className="pulse-dot"></div>
          <div className="status-line"></div>
        </div>
      </div>
    </div>
  </div>
);

const AISolutions = () => {
  const cloudCards = [
    {
      title: "Embrace The Booster Of Cloud Computing",
      description:
        "Elevate Your Business with Cloud Expertise. Unlock the power of cloud computing. Ambispine Technologies' cloud solutions deliver flexible, secure, and scalable infrastructure for your business needs. Our cloud services enhance productivity, reduce costs, and foster collaboration.",
      backgroundImage: cloudHome,
      redirectlink: "/services/cloud-solution-and-data-migration",
    },
    {
      title: "Scale Your Business Using Robust SaaS Technology",
      description:
        "Scalable, reliable, on-demand computing resources with minimal management effort enhancing efficiency and flexibility for businesses. Infrastructure enables essential services through interconnected systems and foundational physical structures",
      backgroundImage: cloudAiImage1,
      redirectlink: "/services/cloud-infastructure",
    },
    {
      title:
        "Revolutionize Your Business With Scalable, Secure, And Reliable Cloud Solutions",
      description:
        "Discover the benefits of cloud computing. Ambispine Technologies' cloud solutions offer adaptable, secure, and scalable infrastructure for your business needs. Our cloud services streamline operations, reduce costs, and enhance collaboration.",
      backgroundImage: cloudAiImage2,
      redirectlink: "services/edge-computing",
    },
  ];

  const features = [
    {
      icon: AiHome1,
      description:
        "AI-powered chatbots automate customer interactions, providing instant responses and support.",
    },
    {
      icon: AiHome2,
      description:
        "Tools monitor brand reputation by analyzing user sentiments and feedback across social platforms.",
    },
    {
      icon: AiHome3,
      description:
        "Personalized content feeds based on user preferences and behavior, enhancing user engagement.",
    },
    {
      icon: AiHome4,
      description:
        "AI analyzes engagement patterns to determine the best times to post content for maximum reach and interaction.",
    },
  ];

  return (
    <div className="ai-solutions-home-page">
      <div className="cloud-cards-home-page">
        {cloudCards.map((card, index) => (
          <CloudCard key={index} {...card} />
        ))}
      </div>

      <div
        className="solutions-section-home-page"
        style={{ backgroundColor: "black" }}
      >
        <div className="solutions-content-home-page ai-power-solution-section">
          <h2>AI-Powered Solutions</h2>
          <p className="solutions-description">
            We offer cutting-edge AI solutions tailored to revolutionize your
            operations. Our services include intelligent automation.
          </p>
          <div className="solution-icons">
            <img src={solutionIcon1} alt="AI Solution 1" />
            <img src={solutionIcon2} alt="AI Solution 2" />
            <img src={solutionIcon3} alt="AI Solution 3" />
            <img src={cloudHome} alt="AI Solution 4" />
          </div>
        </div>

        <div className="features-list">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AISolutions;
