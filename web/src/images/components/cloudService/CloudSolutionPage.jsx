import React from 'react';
import './CloudSolution.css';
import cloud5 from "../../assets/CloudSolution5.jpeg";
import FAQSection from '../FAQSection/FAQSection';
import cloudeIcon from "../../assets/content/cloudeIcon.png"
const CloudSolutionPage = () => {
    const cardsData = [
        {
          title: 'Infrastructure as a Service (IaaS)', 
          subtitle: 'Customize the ERP system to meet your unique business needs.', 
          position: 'top'
        },
        {
          title: 'Platform as a Service (PaaS)', 
          subtitle: 'Provides a platform allowing customers to develop, run, and manage applications without the complexity of infrastructure.', 
          position: 'left'
        },
        {
          title: 'Software as a Service (SaaS)', 
          subtitle: 'Software applications hosted in the cloud and available over the internet.',
          position: 'right'
        },
        {
          title: 'Cloud Security', 
          subtitle: 'Ensures the protection of data and applications in cloud environments, providing security solutions.',
          position: 'center'
        },
        {
        title: 'Cloud Migration', 
            subtitle: 'Ensures the protection of data and applications in cloud environments, providing security solutions.',
            position: 'bottom'
          },
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
          question: "What is Cloud Computing in Business?",
          answer:
            "Cloud computing in business involves delivering computing services like servers, storage, and applications over the internet.",
        },
        {
          question: "Is Using the Cloud Safe?",
          answer:
            "Yes, cloud providers invest heavily in security, but businesses must also implement their own security measures.",
        },
        {
          question: "Is Cloud Reliability a Concern?",
          answer:
            "Cloud reliability depends on the provider. Most reputable providers offer high availability and disaster recovery options.",
        },
        {
          question: "Do You Need Internet to Access the Cloud?",
          answer:
            "Yes, an internet connection is typically required to access cloud services.",
        },
      ];
  return (
    <>
    <div className="cloud-solution-page">
      {/* Hero Section */}
      <section className="cloud-solution-hero">
        <div className="cloud-solution-hero-content">
         <div className='img-content-icon'>
          <img src={cloudeIcon} alt="" className='img-icon' />
          <h1>Cloud Solutions</h1>
         </div>
          <p>Start Designs is an emerging web development company that offers website development services.
             Our in-house team and professional web developers use new technologies.</p>
        </div>
      </section>

     <div className='cloud-sol-container'>
      <section className="cloud-solutions">
        <div className="cloud-solutions-content">
          <h1>Our Comprehensive Cloud Solutions</h1>
          <div className="cards-container-cloud">
      <div className="cloud-sol-dice">
        {/* Surrounding cards */}
        {cardsData.map((item, index) => (
          <div key={index} className={`card-cloud-sol side-card ${item.position}`}>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-sol">
        <div className="benefits-sol-container">
        <h2>Benefits of Cloud Computing</h2>
        <p>With countless businesses now employing hybrid working models to allow employees to work both on-site and remotely, 
          it is vital that your team can access what they need when they need it.</p>
        </div>
        <div className="benefits-cards-colude-sol">
          {benefitsData.map((item, index) => (
            <div key={index} className="card-colude">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cloud Security Section */}
      <section className="cloud-security">
        <div className="security-left-content">
          <h1>Cloud Security: Protecting Your Data</h1>
          <p>Start Designs is an emerging web development company that offers website development services.
             Our in-house team and professional web developers use new technologies..</p>
        </div>
        <div className="security-right-content">
          <img src={cloud5} alt="Cloud Security" />
        </div>
      </section>
     </div>
    </div>
    <FAQSection faqData={faqs}/>
    </>
  );
};

export default CloudSolutionPage;
