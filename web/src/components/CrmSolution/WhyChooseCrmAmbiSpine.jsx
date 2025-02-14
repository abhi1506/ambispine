import React from 'react';
import './WhyChooseCrmAmbiSpine.css';
import { BsHeadset, BsGearFill, BsCurrencyDollar, BsShieldLock, BsGlobe, BsBoxArrowInRight } from "react-icons/bs";

export default function WhyChooseCrmAmbiSpine() {
  const whychoosequ = [
    {
      icon: <BsHeadset />,
      headText: "24/7 Dedicated Support",
      text: "Our expert team is available around the clock to assist with all your needs.",
    },
    {
      icon: <BsGearFill />,
      headText: "Fully Customizable Solutions",
      text: "Adapt our CRM platform to align perfectly with your unique business processes.",
    },
    {
      icon: <BsCurrencyDollar />,
      headText: "Cost-Effective Plans",
      text: "Flexible pricing models designed to suit enterprises of all sizes.",
    },
    {
      icon: <BsShieldLock />,
      headText: "Scalability and Security",
      text: "Future-proof your business with enterprise-grade scalability and secure systems.",
    },
    {
      icon: <BsGlobe />,
      headText: "Global Expertise",
      text: "Trusted by multinational corporations worldwide for superior CRM solutions.",
    },
    {
      icon: <BsBoxArrowInRight />,
      headText: "Seamless Integration",
      text: "Integrate our CRM seamlessly with your existing tools and platforms.",
    },
  ];

  return (
    <div className='why-choose-ambipine-crm-section'>
      <div className='why-choose-crm-sect-top'>
        <h1 className='why-ch-ambi-crm-sect-head'>Why Choose AmbiSpine Technologies?</h1>
        <p className='why-ch-ambi-crm-sect-subtitle'>
          At AmbiSpine Technologies Pvt Ltd, we’re committed to driving innovation, empowering businesses, and delivering exceptional value.
        </p>
      </div>
      <div className='why-ch-ambi-crm-sect-container'>
        {whychoosequ.map((data, index) => (
          <div key={index} className='why-ch-ambi-crm-sect-card'>
            <span className='why-ch-ambi-crm-sect-icon'>{data.icon}</span>
            <h4 className='why-ch-ambi-crm-sect-header'>{data.headText}</h4>
            <p className='why-ch-ambi-crm-sect-sub-sub'>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
