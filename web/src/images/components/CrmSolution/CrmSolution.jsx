import React from 'react'
import Herosection2 from '../MobileDevelopment/Herosection2'
import './CrmSolution.css';
import crmupate1 from '../../images/crmupate1.png';
import crmupate2 from '../../images/crmupate2.png';
import crmupate3 from '../../images/crmupate3.svg';
import crmupate4 from '../../images/crmupate4.png';
import WhyChooseCrmAmbiSpine from './WhyChooseCrmAmbiSpine';
import  OurCustomersSection from '../card/OurCustomersSection';
import FaqSection from '../card/FaqsSection';
import ConsultNow from '../ConsultNow/ConsultNow';

export default function CrmSolutions() {
   const featurecrmsolution = [
      {
        src: crmupate2,
        alt: "Image 2",
        text: "Track and manage leads effectively.",
        headText: "Lead Management",
      },
      {
        src: crmupate3,
        alt: "Image 3",
        headText: "Sales Automation",
        text: "Automate repetitive sales tasks to save time.",
      },
      {
        src: crmupate4,
        alt: "Image 4",
        headText: "Customer Analytics",
        text: "Analyze customer data for better decision-making Analyze customer data for better decision-making",
      },
    ];

      const whychoosequ = [
        {
          id: 1,
          headText: "SAP",
          text: "Ehance your business processes with SAP CRM solution that is efficient, scalable, and reliable. Optimize customer engagement, improve operational efficiency, and achieve seamless interactions with powerful tools designed to drive success.",
          className:'sap'
        },
        {
          id: 2,
          headText: "Oracle",
          text: "Optimize performance with OracleOptimize your operations and drive innovation with Oracle’s robust and scalable solutions. Enhance efficiency, ensure reliability, and unlock growth with cutting-edge technology tailored to your business needs. ERP Intelligent, adaptable, cloud-powered solutions.",
          className:'ora-cle'
        },
        {
          id: 3,
          headText: "NetSuite",
          text: "Streamline operations and drive growth with NetSuite’s cloud-based ERP solutions. From financial management to CRM, experience unified and scalable tools designed to optimize your business processes and empower success.",
          className:'net-suite'
        }
      ];
      const faqs = [
        {
          question: "Does your Android app development company sign an NDA to secure my app idea?",
          answer: "Ans : Yes. The first task of our team is to sign an NDA to maintain the app's security and privacy. You can trust us that your iOS app development ideas will be completely safe. So, Get the desirable app with our top iOS app development company.",
        },
        {
          question: "How long does it take to develop an Android app",
          answer: "The timeline depends on the complexity of the project, but typically ranges from 4 to 12 weeks.",
        },
        {
          question: "Do you provide support after the Android app is launched?",
          answer: "Yes, we provide user-friendly CMS solutions or ongoing maintenance services for updates.",
        },
      ]; 
  return (
    <div className='crm-solution-upates'>
      <Herosection2 heading="Revolutionize Your Business with CRM Solutions"
      subtitle="Manage customers, track sales, and boost productivity with ease."
      className=" "
      heroimg={crmupate1}
      />
      
      <div className='crm-feature-container'>
        <h1 className='cmsupdate-feaute-heading'>Comtent Writing Service</h1>
        <div className='crm-feature-solution-container'>
        {
          featurecrmsolution.map((data, index)=>{
            return(
            <div key={index} className='crm-feature-solution-card'>
              <div className='crm-feature-solution-card-imag-container'>
                <img src={data.src} className='crm-feauture-solution-img' alt={data.alt} />
              </div>
              <div  className='crm-feature-solution-card-content'>
                <h4 className='feature-crm-headtext'>{data.headText}</h4>
                <p className='feature-crm-subtitle'>{data.text}</p>
              </div>
          </div>
          )
          })
        }
        </div>
      </div>
      <div>
        <WhyChooseCrmAmbiSpine />
      </div>
      <div className='strategic-parten-ship-container'>
          <h3 className='stategic-header'>Strategic Partnership with Scalable Software Solutions</h3>
          <div className='strategic-card-container'>
          {
            whychoosequ.map((data) =>{
             return(
              <div key={data.id} className={`strategic-card ${data.className}`}>
              <h4 className='fw-bold'>{data.headText}</h4>
              <p>{data.text}</p>
             </div>
             )
            })
          }
          </div>
      </div>
      <FaqSection faqs={faqs} />
      <ConsultNow />
    </div>
  )
}
