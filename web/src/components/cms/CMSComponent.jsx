import React from "react";
import "./CMS.css";
import cmsHero from "../../assets/contentHero.jpeg";
import cmsImg from "../../assets/content-4.png";
import cmsImg2 from "../../assets/content-5.jpeg";
import CmsCardSection from "./CmsCardSection";
import ContentTypes from "./ContentTypes";
import ConsultNow from "../ConsultNow/ConsultNow";
import FaqSection from "../FAQSection/FaqsSection";
import {Link} from 'react-router-dom'
import { Button } from './../button/Button'
import { FaArrowRight } from "react-icons/fa6";

export const cardData = [
  { id: 1, title: "Development", content: "Streamline your content management process with our customizable and scalable CMS solutions." },
  { id: 2, title: "Integration", content: "Seamlessly integrate our CMS with your existing systems to enhance efficiency and collaboration." },
  { id: 3, title: "Migration", content: "Effortlessly migrate your data to a modern CMS while ensuring security and minimal downtime." },
  { id: 4, title: "Maintenance", content: "Keep your CMS running smoothly with regular updates, security patches, and performance optimizations." },
];

export const faqData = [
  { question: "What is your return policy?", answer: "You can return any unused and unopened items within 30 days of purchase for a full refund." },
  { question: "How long does shipping take?", answer: "Standard shipping typically takes 5-7 business days. Expedited shipping options are also available." },
  { question: "Do you offer international shipping?", answer: "Yes, we offer international shipping to select countries. Please check our shipping page for more details." },
  { question: "How can I track my order?", answer: "Once your order has shipped, you will receive an email with a tracking number and a link to track your package." },
  { question: "Can I change or cancel my order?", answer: "Orders can be changed or canceled within 24 hours of purchase. Please contact our customer service team as soon as possible for assistance." }
];

const CMSystemComponent = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="cms-hero-section">
        <div className="cms-hero-image">
          <img src={cmsHero} alt="Hero Background" />
        </div>
        <div className="cms-hero-content">
          <h1 className="cms-hero-title">
            Empower Your Business with Our CMS Solutions
          </h1>
          <p className="cms-hero-subtitle">
            Simplify content management with our customizable and scalable CMS
            platform.
          </p>
        </div>
      </div>
      <section className="cms-container-component">
      {/* Main CMS Section */}
      <section className="cms-card-solution-section-container">
      <div className="cms-content-section">
          <h1 className="centered-heading">Content Writing Service</h1>
          <br />
          <div className="cms-section">
            <div className="cms-section-content">
              <h2 className="cms-section-heading">
                Take Control of Your Content with Our CMS Solutions
              </h2>
              <p className="text-white">
                Enhance efficiency with our customizable content management
                platform, tailored for businesses of all sizes.
              </p>
            </div>
            <div className="cms-section-image">
              <img src={cmsImg} alt="CMS Image" />
            </div>
          </div>
        </div>
      </section>
  
        

        <ContentTypes />
        <CmsCardSection />

        {/* CMS Features Section */}
        <div className="cms-card-solution-section-container">
          <div className="cms-card-solution-section">
          <div className="cms-card-solution-header">
            <h1 className="centered-solution-heading">CMS Solution</h1>
            <br />
            <h1 className="cms-solution-title">Features</h1>
            <p className="cms-solution-description">
            Streamline your content management process with our customizable and scalable CMS solutionsStreamline your content management process with our customizable and scalable CMS solutionsStreamline your
             content management process with our customizable and scalable CMS solutions
            </p>
            {/* <Link className="solution-btn">Explore Solution</Link> */}
            <Button name='Explore Solution' icon={<FaArrowRight />} redirect='/services/explore-technologies' />
          </div>

          <div className="cms-card-solution-container">
          {cardData.map((card, index) => (
  <div
    className="cms-solution-card"
    key={card.id}
    style={{ marginRight: `${index * 30}px` }}  
  >
    <h3 className="cms-solution-card-title">{card.title}</h3>
    <p className="cms-solution-card-content">{card.content}</p>
  </div>
))}

          </div>
          </div>
        </div>

        {/* Effortlessly Manage Content Section */}
        <div className="cms-effortlessly-section">
          <div className="cms-effortlessly-image">
            <img src={cmsImg2} alt="Effortlessly Background" />
          </div>
          <div className="cms-effortlessly-content">
            <h1 className="cms-effortlessly-title">
              Take Control of Your Content Strategy
            </h1>
            <p className="cms-effortlessly-subtitle">
              Experience a seamless content management journey with our
              all-in-one CMS.
            </p>
            <Button name='Explore Solution' icon={<FaArrowRight />} redirect='/services/explore-technologies' />

            {/* <Link to="/services/explore-technologies" className="solution-btn">Explore Solution</Link> */}
          </div>
        </div>

        {/* FAQ Section */}
        <FaqSection faqs={faqData} />

        {/* Consult Now Section */}
        <ConsultNow />
      </section>
    </div>
  );
};

export default CMSystemComponent;