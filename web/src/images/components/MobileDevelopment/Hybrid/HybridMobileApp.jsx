import React from 'react'
import Herosection2 from '../Herosection2';
import './HybridMobileApp.css';
import webdevelopmentgraphics from './../../../images/web-develop-graphics.png';
import SecondSection from '../SecondSection';
import ServiceSection from '../ServiceSection';
import hibrid from './../../../images/hibrid.png';
import WhyChooseSection from '../WhyChooseSection' 
import FaqSection from '../../card/FaqsSection';
import hibrid2 from './../../../images/hibrid2.png';
import ConsultNow from '../../ConsultNow/ConsultNow';

export default function HybridMobileApp() {
  const comprehensivedata = [
      {
        id:1,
        heading:"Custom iPhone App Development",
        description:"We craft tailored iOS apps that align with your unique business goals and objectives.",
        className:"custom-iphone-services",
      },
      {
        id:2,
        heading:"App Consulting",
        description:"ur expert consultants help you define your app requirements, identify target audiences, and determine the best features and functionalities for your app.",
        className:"aap-consulting",
      
      },
      {
        id:3,
        heading:"App Design",
        description:"Our skilled designers create visually stunning and user-friendly app interfaces that reflect your brand and captivate your users.",
        className:"aap-designe",
        
      },
      {
        id:4,
        heading:"App Testing and Quality Assurance",
        description:"Our skilled designers create visually stunning and user-friendly app interfaces that reflect your brand and captivate your users.",
        className:"aap-testing",
      }
    ]
    const whychoose = [
      {
        id:1,
        heading:"Expert Team",
        description:"Our seasoned iPhone app development team boasts extensive experience, delivering high-quality solutions that exceed expectations",
        className:"expert-team",
      },
      {
        id:2,
        heading:"Agile Methodology",
        description:"We prioritize your goals, objectives, and unique requirements, tailoring our services to meet your needs and ensure your success",
        className:"agile-methodology",
      
      },
      {
        id:3,
        heading:"Customer-Centric Approach",
        description:"Our flexible approach adapts to changing requirements, ensuring efficient, timely, and hassle-free project delivery",
        className:"customer-centric-approch",
        
      },
      {
        id:4,
        heading:"Cost-Effective",
        description:"We optimize resources and streamline processes to deliver high-quality solutions within your budget.",
        className:"cost-effective",
      }
    ]
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
    <div className='Ios-mobile-aap'>
      <Herosection2 heading="HYBRID MOBILE APP DEVELOPMENT"
      subtitle="Revolutionize your business, enhance customer engagement, and drive growth. With Apple's stringent quality standards and loyal user base, investing in iOS app development can help you tap into a lucrative market and stay ahead of the competition"
      className=" "
      heroimg={hibrid}
      imagclasName="imagclasName"
      />
      <div>
        <div className='hybrid-second-part'>
          <h1 className='hybrid-second-part-heading'>Explore Our Hybrid Application Development Potential</h1>
          <p className='hybrid-second-part-subtitle'>Our developers are industry-leading experts in hybrid mobile apps development, bringing their expertise and years of experience to help you create powerful applications optimized for all screen sizes</p>
        </div>
      <SecondSection heading="Hybrid Mobile App Development"
      subtitle="In today's digital landscape, we empower businesses with innovative technologies that drive intelligent, data-driven insights and seamless interconnectivity. Our strategic approach transforms your digital strategy, delivering unparalleled business value across every touchpoint."
      className=" "
      heroimg={hibrid2}
      />
      </div>
    
      <ServiceSection data={comprehensivedata} name="Our comprehensive services include" 
      subtitle="Mobulous excels in delivering high-quality Android app development, creating custom, feature-packed apps to meet your business needs, ensuring optimal performance and user satisfaction."
      className='' 
      />
       <WhyChooseSection data={whychoose} 
       name="Why Choose Us for Mobile App Development Solutions?" 
      subtitle="Mobile app development is becoming increasingly popular for its various benefits such as:"
      className='' 
      />
      <FaqSection faqs={faqs} />
       <ConsultNow />
    </div>
  )
}
