import React from "react";
import "./EdgeComputing.css";
import EdgeComputingFeatures from "./EdgeComputingFeatures";
import EdgeBenefits from "./EdgeBenefits";
import EdgeUseCases from "./EdgeUseCases";
import ServerRoom from "./ServerRoom";
import FAQSection from "../FAQSection/FAQSection";
import ConsultNow from "../ConsultNow/ConsultNow";
const edgeComputingFAQs = [
  {
    question: "What is Edge Computing?",
    answer:
      "Edge computing is a distributed computing paradigm that brings computation and data storage closer to the location where it is needed, improving response times and saving bandwidth.",
  },
  {
    question: "How does Edge Computing improve performance?",
    answer:
      "By processing data closer to the source, edge computing reduces latency and enhances real-time decision-making, which is crucial for applications like IoT and AI.",
  },
  {
    question: "What are the key benefits of Edge Computing?",
    answer:
      "Key benefits include reduced latency, enhanced security, lower bandwidth usage, and improved reliability for mission-critical applications.",
  },
  {
    question: "What industries benefit the most from Edge Computing?",
    answer:
      "Industries such as healthcare, manufacturing, autonomous vehicles, retail, and telecommunications benefit significantly from edge computing.",
  },
  {
    question: "Is Edge Computing secure?",
    answer:
      "Yes, edge computing enhances security by keeping sensitive data closer to its source and reducing exposure to cyber threats associated with centralized cloud computing.",
  },
];
const EdgeComputing = () => {
  return (
    <>
      <div className="hero-container-edge">
        <div className="hero-overlay-edge"></div>
        <div className="hero-content-edge">
          <h1>Unlock the Power of Edge Computing</h1>
          <p style={{ color: "#fff" }}>
            Transform Your Business with Faster, Smarter, and More Secure
            Computing
          </p>
        </div>
      </div>
      <EdgeComputingFeatures />
      <EdgeBenefits />
      <EdgeUseCases />
      <ServerRoom />
      <FAQSection faqData={edgeComputingFAQs} />
      <ConsultNow />
    </>
  );
};

export default EdgeComputing;
