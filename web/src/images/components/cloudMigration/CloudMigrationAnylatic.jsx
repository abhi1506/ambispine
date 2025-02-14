import React from "react";
import "./CloudMigrationAnalytics.css";
import FAQSection from "../FAQSection/FAQSection";
import cloudeHeroImg from "../../assets/cloudeHero.png"
import ConsultNow from "../ConsultNow/ConsultNow";
const cardData = [
    { title: "Seamless Integration", sub: "Ensure smooth transition with minimal downtime." },
    { title: "Enhanced Security", sub: "Advanced cloud security for your data protection." },
    { title: "Optimized Performance", sub: "Improve speed and efficiency with cloud scaling." },
    { title: "Cost Efficiency", sub: "Reduce infrastructure costs and maximize ROI." }
  ];
  const cardData2 = [
    { title: "Cloud Insights", sub: "Gain valuable insights from your cloud data." },
    { title: "Enhanced Scalability", sub: "Scale your cloud infrastructure easily." },
    { title: "Real-time Analytics", sub: "Get real-time data analytics with cloud tools." },
    { title: "Security & Compliance", sub: "Ensure data security and regulatory compliance." }
  ];
  
const benefitsData = [
    {
      title: "Cost Efficiency",
      description: "Improve cost efficiency by reducing on-premises infrastructure and enabling pay-as-you-go models."
    },
    {
      title: "Boosted Productivity",
      description: "Cloud-based solutions ensure that your team can work seamlessly across various locations."
    },
    {
      title: "Increased Security",
      description: "Cloud providers offer advanced security measures to protect sensitive data."
    },
    {
      title: "Disaster Recovery",
      description: "Ensure business continuity with automated data backups and disaster recovery solutions."
    }
  ];
  const faqs = [
    {
      question: "What is cloud migration?",
      answer: "Cloud migration is the process of moving data, applications, and IT processes from on-premises infrastructure to the cloud."
    },
    {
      question: "Why is cloud migration important?",
      answer: "It enhances scalability, security, cost-efficiency, and operational flexibility for businesses."
    },
    {
      question: "What are the main types of cloud migration?",
      answer: "The three main types are lift-and-shift, re-platforming, and re-architecting."
    },
    {
      question: "How does cloud analytics help businesses?",
      answer: "Cloud analytics allows businesses to process, analyze, and derive insights from data stored in the cloud for better decision-making."
    },
    {
      question: "What challenges are involved in cloud migration?",
      answer: "Common challenges include data security, downtime, compliance, and cost management."
    }
  ];
  
const CloudMigrationAnalytics = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="cma-hero">
        <div className="cma-hero-content">
        <h1>Unlock the Power of Cloud Migration & Analytics</h1>
        <p className="text-white">Transform Your Business with</p>
        </div>
       <div className="cma-hero-img">
       <img src={cloudeHeroImg} alt="" className=""/>
       </div>
      </section>

      {/* Main Section */}
      <div className="cma-container">
        <div className="cma-container-main">
      <section className="cma-main">
    <div className="cma-left">
      <h2>Cloud Migration: A Seamless Transition</h2>
      <p>
        Migrate your applications and data seamlessly with minimal downtime. 
        Our cloud solutions ensure a smooth transition, enhanced security, and optimized performance.
      </p>
    </div>
    
    <div className="cma-right">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`cma-card ${index === 0 || index === 3 ? "cma-card-orange" : ""}`}
        >
          <h3>{card.title}</h3>
          <p>{card.sub}</p>
        </div>
      ))}
    </div>
  </section>

      {/* Reverse Section */}
      <section className="cma-main">
    <div className="cma-right">
      {cardData2.map((card, index) => (
        <div
          key={index}
          className={`cma-card ${index === 0 || index === 3 ? "cma-card-orange" : ""}`}
        >
          <h3>{card.title}</h3>
          <p>{card.sub}</p>
        </div>
      ))}
    </div>

    <div className="cma-left">
      <h2>Unlocking Business Insights</h2>
      <p>
        Leverage real-time cloud analytics to gain deeper insights into your data. 
        Enhance decision-making, optimize business processes, and improve efficiency with cutting-edge cloud tools.
      </p>
    </div>
  </section>
</div>
      <section className="cma-benefits-sol">
        <h2>Benefits of Cloud Computing</h2>
        <p>Cloud computing offers businesses flexibility, scalability, and cost efficiency. Here are some key advantages:</p>
        <div className="cma-benefits-cards-sol">
          {benefitsData.map((item, index) => (
            <div key={index} className="cma-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection faqData={faqs}/>
      <ConsultNow/>
    </div>
    </>
    
  );
};

export default CloudMigrationAnalytics;
