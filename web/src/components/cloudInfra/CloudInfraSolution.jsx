

import React from "react";
import "./CloudInfraSolution.css";
import ConsultNow from "../ConsultNow/ConsultNow";
import CloudBenefits from "./CloudBenefits";
import BusinessInsights from "./BusinessInsights";
import FaqSection from "../FAQSection/FaqsSection";
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
  const computeServices = [
    {
      title: "Cloud Compute Services",
      description:
        "Scalable computing resources that adapt to your business needs with automated load balancing and distribution.",
    },
    {
      title: "Storage Solutions",
      description:
        "Secure and reliable cloud storage with automatic backup and instant accessibility across platforms.",
    },
    {
      title: "Network Infrastructure",
      description:
        "High-performance networking with advanced security protocols and global content delivery.",
    },
    {
      title: "Network Infrastructure",
      description:
        "High-performance networking with advanced security protocols and global content delivery.",
    },
  ];

  return (
    <>
      <div className="infrastructure-wrapper">
        <div className="infrastructure-container">
          <div className="header-section">
            <h1>Our Comprehensive Cloud Infrastructure Solutions</h1>
            <p>
              Every detail is crafted with precision and undergoes multiple
              rounds of rigorous testing. Our dedicated team delivers
              enterprise-grade cloud solutions that empower businesses to scale
              and innovate.
            </p>
          </div>

          <div className="content-section">
            <div className="services-column">
              {computeServices.map((service, index) => (
                <div key={index} className="service-card-llus">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>

            <div className="illustration-column">
              <svg
                className="cloud-illustration"
                viewBox="0 0 500 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Cloud Icon */}
                <path
                  d="M400 150 C430 150 450 130 450 100 C450 70 430 50 400 50 C390 20 360 0 325 0 C285 0 250 25 235 60 C225 55 215 52 200 52 C160 52 128 82 125 120 C105 120 90 135 90 155 C90 175 105 190 125 190 L400 190 C430 190 450 170 450 155 C450 140 430 150 400 150"
                  fill="#2196f3"
                  opacity="0.8"
                />

                {/* Connected Devices */}
                <g transform="translate(0, 220)">
                  {[100, 200, 300, 400].map((x, i) => (
                    <g key={i} transform={`translate(${x}, 0)`}>
                      <rect
                        x="10"
                        y="10"
                        width="60"
                        height="40"
                        rx="5"
                        fill="#64b5f6"
                      />
                      <line
                        x1="40"
                        y1="0"
                        x2="40"
                        y2="10"
                        stroke="#b3e5fc"
                        strokeWidth="2"
                      />
                    </g>
                  ))}
                </g>

                {/* Connection Lines */}
                <g stroke="#b3e5fc" strokeWidth="2" strokeDasharray="5,5">
                  {[140, 240, 340, 440].map((x, i) => (
                    <path key={i} d={`M${x} 190 L${x} 230`} />
                  ))}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <CloudBenefits />
      <BusinessInsights />
      <FaqSection faqs={faqData} />
      <ConsultNow />
    </>
  );
};

export default CloudInfraSolution;
