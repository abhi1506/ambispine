import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import erpHeroImage from "../../assets/erpHero.png";
import inventoryImage from "../../assets/Inventory.png";
import financialImage from "../../assets/financialanalysis1.jpg";
import workforceImage from "../../assets/workforce.png";
import "./Erp.css"
import FAQSection from '../FAQSection/FAQSection';
import ConsultNow from '../ConsultNow/ConsultNow';

const faq=[
  { question: "What is an ERP system?", answer: "An ERP system integrates and manages core business processes." },
  { question: "Is training provided?", answer: "Yes, we offer training sessions for all our plans." },
  { question: "Is customer support available?", answer: "Absolutely! 24/7 customer support is included." },
]
const HeroSection = () => {
  
return(    
      <div className="erp-hero">
      <img src={erpHeroImage} alt="Professional content writing" className="content-hero-img" />
      <div className="erp-hero-left">
        <div>
          <h1>Professional Content Writing Services</h1>
          <p>
            Transform your ideas into impactful content with our expert writers. 
            From blogs to SEO-friendly articles, we deliver content that resonates.
          </p>
        </div>
      </div>
    </div>
)};

const FeaturesSection = () => (
  <section className="my-5">
    <div className="container-erp">
      <h2 className="text-center mb-4  font-weight-bolder">ERP Features</h2>
      <p className="text-center text-small text-white mb-5">Transform your ideas into impactful content with our expert writers. From blogs to SEO-friendly articles, we deliver content that resonates.</p>
      <div className="row">
        {[
          { title: "Inventory Management", text: "Track and optimize inventory levels efficiently.", img: inventoryImage },
          { title: "Financial Analytics", text: "Monitor financial performance with real-time insights.", img: financialImage },
          { title: "Workforce Management", text: "Streamline HR and payroll processes seamlessly.", img: workforceImage },
        ].map((feature, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="erp-card shadow-lg border-0 p-2">
              <div className="d-flex justify-content-center">
                <img src={feature.img} className="erp-card-img-top" alt={feature.title} />
              </div>
              <div className="erp-card-body">
                <h5 className="card-erp-title font-weight-bold text-dark">{feature.title}</h5>
                <p className="card-erp-text text-muted">{feature.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


  

const TestimonialsSection = () => (
  <section className="my-5 bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-5">What Our Clients Say</h2>
      <Carousel>
        {[
          { quote: "This ERP system revolutionized our business processes!", client: "John Doe, CEO" },
          { quote: "Exceptional features and easy to use.", client: "Jane Smith, Manager" },
          { quote: "Highly recommend it for growing companies.", client: "Mike Johnson, CTO" },
        ].map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className="text-center">
              <p className="lead">"{testimonial.quote}"</p>
              <p>- {testimonial.client}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  </section>
);
const HowItWorksSection = () => (
  <section className="how-it-works my-5">
    <div className="container">
      <h2 className="text-center font-weight-bolder mb-5">How It Works</h2>
      <p className="text-center text-small text-white mb-5">
        Discover how AmbiSpine Technologies simplifies business processes with our advanced ERP system.
      </p>
      <div className="row">
        {[
          { step: "1", title: "Sign Up", text: "Create an account with AmbiSpine Technologies to get started." },
          { step: "2", title: "Setup", text: "Customize the ERP system to meet your unique business needs." },
          { step: "3", title: "Manage", text: "Monitor and manage your operations efficiently with our tools." },
        ].map((process, index) => (
          <div className="col-md-4 text-center" key={index}>
            <div className="step-box-card mb-4">
              <div className="step-number display-4 text-white font-weight-bold">{process.step}</div>
             <div className='step-box-card-body'>
             <h5 className="font-weight-bold mt-3">{process.title}</h5>
             <p>{process.text}</p>
             </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);






const ERPComponent = () => (
  <div className='erp-main-container'>
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
   
    <FAQSection faqData={faq} />
    <ConsultNow/>
  </div>
);

export default ERPComponent;
