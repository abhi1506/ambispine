import React from "react";
import "./MobileDevelopment.css";
import heroBackground from "../../assets/mobileHero.png";
import ConsultNow from "../ConsultNow/ConsultNow";
import Herosection2 from "./Herosection2";
import crmupate5 from '../../images/software-custom1.png';
import TechnologyComponent from "../../future/TechnologyComponent";
import FaqSection from "../FAQSection/FaqsSection";
import { FaProjectDiagram, FaPencilRuler, FaCode, FaBug } from "react-icons/fa";

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
  const procesData = [
    {
      title: "Strategy & Planning",
      subtitle: "We analyze your business needs and create a strategic roadmap for your mobile app development.",
    },
    {
      title: "UI/UX Design",
      subtitle: "Our designers craft intuitive and visually appealing mobile interfaces for enhanced user engagement.",
    },
    {
      title: "Development",
      subtitle: "We build high-performance mobile applications using the latest technologies and best practices.",
    },
    {
      title: "Testing & Deployment",
      subtitle: "Our QA experts ensure your app is bug-free before launching it on the App Store and Google Play.",
    },
  ];
 
const processSteps = [
  {
    title: "Planning",
    subtitle: "Defining project goals, requirements, and strategy to ensure a solid foundation.",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Design",
    subtitle: "Creating intuitive UI/UX designs that enhance user engagement and experience.",
    icon: <FaPencilRuler />,
  },
  {
    title: "Development",
    subtitle: "Building high-performance, scalable mobile applications with the latest technologies.",
    icon: <FaCode />,
  },
  {
    title: "Testing",
    subtitle: "Ensuring quality, security, and performance through rigorous testing before launch.",
    icon: <FaBug />,
  },
];

  
const features = [
  { 
    title: "Expert Team", 
    subtitle: "Highly skilled professionals with vast experience.", 
    bgColor: "#FF0C0C" 
  },
  { 
    title: "Innovative Solutions", 
    subtitle: "Creative and cutting-edge technology implementations.", 
    bgColor: "#F5940C" 
  },
  { 
    title: "User-Centric Design", 
    subtitle: "Designs that prioritize user experience and engagement.", 
    bgColor: "#01237F" 
  },
  { 
    title: "Timely Delivery", 
    subtitle: "Ensuring projects are completed on schedule.", 
    bgColor: "#627205" 
  },
  { 
    title: "Customer Support", 
    subtitle: "24/7 support to ensure seamless operation.", 
    bgColor: "#63CAD1" 
  }
];

const MobileDevelopment = () => {
  return (
    <div className="mob-dev-container">
    
      <Herosection2 heading="Transform Your Business with Our Mobile App Development Solutions"
      subtitle=" Create engaging and user-friendly mobile apps that drive business growth and customer satisfaction."
      className=" "
      heroimg={heroBackground}
      imagclasName='imagclasName'
      />
      <section className="mob-dev-wrapper">
  <div className="mob-dev-process-grid">
    
    <div className="mob-dev-content-right">
      <h2>Our Mobile App Development Services</h2>
      <p>Create engaging and user-friendly mobile apps that drive business growth and customer satisfaction.</p>
    </div>


    <div className="mob-dev-col-left">
      {procesData.map((step, index) => (
        <div 
          key={index} 
          className={`mob-dev-card ${index % 2 === 0 ? "even-card" : "odd-card"}`}
        >
          <h3>{step.title}</h3>
          <p>{step.subtitle}.</p>
        </div>
      ))}
    </div>

  </div>
</section>



      <section className="mobile-dev-process">
  <div className="process-header">
    <h2>Our Mobile App Development Process</h2>
  </div>
  <div className="process-steps">
    <h1>Mobile App Development Process</h1>
    <div className="steps-container">
  {processSteps.map((step, index) => (
    <div key={index} className="step-card" style={{ "--delay": index + 1 }} aria-label={`Step ${index + 1}: ${step.title}`}>
      <div className="step-icon-wrapper">
        <div className="step-icon">{step.icon}</div>
      </div>
      <h3>{step.title}</h3>
      <p>{step.subtitle}</p>
    </div>
  ))}
</div>


  </div>
</section>


      <TechnologyComponent/>
      {/* Why Choose Us? */}
      <section className="mob-dev-why">
        <h2>Why Choose Us?</h2>
        <p>
        Create engaging and user-friendly mobile apps that drive business growth and customer satisfaction Create engaging and user-friendly mobile apps that drive business growth and customer satisfactionCreate engaging and user-friendly mobile apps that drive business growth and customer satisfactionCreate engaging and user-friendly mobile apps that drive business growth and customer satisfactionCreate engaging and 
        user-friendly mobile apps that drive business growth and customer satisfaction
        .</p>
        <div className="mob-dev-flex">
  {features.map((feature, index) => (
    <div 
      key={index} 
      style={{ backgroundColor: feature.bgColor }} 
      className={`mob-dev-feature ${index % 2 === 0 ? "mob-dev-up" : "mob-dev-down"}`}
    >
      <h3>{feature.title}</h3>
      <p>{feature.subtitle}</p>
    </div>
  ))}
</div>

      </section>

      <FaqSection faqs={faq}/>
      <ConsultNow/>
    </div>
  );
};

export default MobileDevelopment;
