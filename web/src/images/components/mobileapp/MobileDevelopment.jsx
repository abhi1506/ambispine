import React from "react";
import "./MobileDevelopment.css";
import heroBackground from "../../assets/mobileHero.png";
import FAQSection from "../FAQSection/FAQSection";
import ConsultNow from "../ConsultNow/ConsultNow";
import Herosection2 from "../MobileDevelopment/Herosection2";
import crmupate5 from '../../images/software-custom1.png';
const faq = [
    {
      question: "What is your return policy?",
      answer: "Our return policy allows returns within 30 days of purchase. Items must be unused and in their original packaging.",
    },
    {
      question: "How do I track my order?",
      answer: "Once your order has shipped, you'll receive a tracking number via email to track the status of your delivery.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to a variety of countries worldwide. Shipping fees and times vary depending on your location.",
    },
    {
      question: "Can I change my order after placing it?",
      answer: "Unfortunately, once an order is placed, it cannot be changed. However, you can cancel and place a new order within 30 minutes of purchase.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact our customer support team through email at support@example.com or by calling our toll-free number at 1-800-123-4567.",
    },
  ];
  const procesData=[
    {
      title: "Mobile",
      subtitle: "Create engaging and user-friendly mobile apps that drive business growth and customer satisfaction",
    },
    {
      title: "Mobile",
      subtitle: "Create engaging and user-friendly mobile apps that drive business growth and customer satisfaction",
    },
    {
      title: "Mobile",
      subtitle: "Create engaging and user-friendly mobile apps that drive business growth and customer satisfaction",
    },
    {
      title: "Mobile",
      subtitle: "Create engaging and user-friendly mobile apps that drive business growth and customer satisfaction",
    },
  ]
const MobileDevelopment = () => {
  return (
    <div className="mob-dev-container">
      {/* Introduction Section */}
     
      <Herosection2 heading="Transform Your Business with Our Mobile App Development Solutions"
      subtitle=" Create engaging and user-friendly mobile apps that drive business growth and customer satisfaction."
      className=" "
      heroimg={heroBackground}
      imagclasName='imagclasName'
      />
      {/* Mobile App Development Process */}
      <section className="mob-dev-process-grid">
        <div className="mob-dev-content">
        <h2>Our Mobile App Development Services</h2>
        <p>Create engaging and user-friendly mobile apps that drive business growth and customer satisfactionCreate engaging and user-friendly mobile apps that drive business growth and customer satisfactionCreate engaging and user-friendly
             mobile apps that drive business growth and customer satisfaction</p>
        </div>
        <div className="mob-dev-col">
          {procesData.map((step, index) => (
            <div key={index} className="mob-dev-card">
              <h3>{step.title}</h3>
              <p>{step.subtitle}.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mobile-dev-process">
  <div className="process-header">
    <h2>Our Mobile App Development Process</h2>
  </div>
  <div className="process-steps">
  <h1>Mobile App Development Process</h1>
    <div className="steps-container">
      {["Planning", "Design", "Development", "Testing"].map((step, index) => (
        <div key={index} className="step-card">
          <h3>{step}</h3>
          <p>Step {index + 1} in the process.</p>
        </div>
      ))}
    </div>
  </div>
</section>
<div className='our-experty-section'>
        <h1 className='our-experties-heading'>Our Technology Expertise</h1>
        <div className='our-experties-container'>
              <img src={crmupate5} className="our-experti-img" alt='expetiyes technologies' />
        </div>
      </div>
      {/* Why Choose Us? */}
      <section className="mob-dev-why">
        <h2>Why Choose Us?</h2>
        <p>
        Create engaging and user-friendly mobile apps that drive business growth and customer satisfaction Create engaging and user-friendly mobile apps that drive business growth and customer satisfactionCreate engaging and user-friendly mobile apps that drive business growth and customer satisfactionCreate engaging and user-friendly mobile apps that drive business growth and customer satisfactionCreate engaging and 
        user-friendly mobile apps that drive business growth and customer satisfaction
        .</p>
        <div className="mob-dev-flex">
          {["Expert Team", "Innovative Solutions", "User-Centric Design", "Timely Delivery"].map((reason, index) => (
            <div key={index} className={`mob-dev-feature ${index % 2 === 0 ? "mob-dev-up" : "mob-dev-down"}`}>
              <h3>{reason}</h3>
              <p>We ensure excellence in every project.</p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection faqData={faq}/>
      <ConsultNow/>
    </div>
  );
};

export default MobileDevelopment;
