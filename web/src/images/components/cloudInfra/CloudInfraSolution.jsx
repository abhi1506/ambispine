import React from "react";
import "./CloudInfraSolution.css";
import FAQSection from "../FAQSection/FAQSection";
import ConsultNow from "../ConsultNow/ConsultNow";
import CloudBenefits from "./CloudBenefits";
import BusinessInsights from "./BusinessInsights";
 const faqData = [
    {
      question: "What is SEO and why is it important?",
      answer:
        "SEO (Search Engine Optimization) is the practice of optimizing your website to increase its visibility in search engine results. It's important because it helps drive organic traffic to your website, increases brand awareness, and can lead to better conversion rates.",
    },
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO is a long-term strategy that typically takes 4-6 months to start seeing significant results. However, this timeline can vary depending on factors like competition, content quality, and your starting point.",
    },
    {
      question: "Do I need SEO if my website already gets traffic?",
      answer:
        "Yes, SEO can still be beneficial even if your website already receives traffic. It helps ensure sustainable growth, diversifies your traffic sources, and keeps you competitive in your market.",
    },
  ];

const CloudInfraSolution = () => {
  const computeServices = Array(6).fill({
    title: "Compute Services",
    description:
      "Mobile app development is becoming increasingly popular for its various benefits such as:",
  });

  return (
    <>
      <div className="infrastructure-container">
        <div className="header-section">
          <h1>Our Comprehensive Cloud Infrastructure Solutions</h1>
          <p>
            Every detail is crafted with precision and undergoes multiple rounds
            of rigorous testing. Our dedicated team is committed to delivering
            comprehensive iPhone app development services under one roof. Our
            iPhone app development expertise has empowered clients to achieve
            their goals and thrive in their industries.
          </p>
        </div>

        <div className="services-container">
          {computeServices.map((service, index) => (
            <div className="service-row" key={index}>
              {index % 2 === 0 ? (
                // Left aligned service box
                <div className="service-box service-left">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              ) : (
                // Right aligned service box
                <div className="service-box service-right">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <CloudBenefits />
      <BusinessInsights />
      <FAQSection  faqData={faqData}/>
      <ConsultNow />
    </>
  );
};

export default CloudInfraSolution;
