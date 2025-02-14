import React from 'react'
import Herosection2 from './../Herosection2';
import './IOSMobileApp.css';
import SecondSection from './../SecondSection';
import ServiceSection from './../ServiceSection';
import iosservicesection from './../../../images/iosservicesection.png'
import WhyChooseSection from './../WhyChooseSection' 
import FaqSection from './../../card/FaqsSection';
import ios1 from './../../../images/ios1.png';
import ConsultNow from '../../ConsultNow/ConsultNow';

export default function IOSMobileApp() {
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
        question: "Does your iOS app development company sign an NDA to keep my app secure?",
        answer: "Ans : Yes. The first task of our team is to sign an NDA to maintain the app's security and privacy. You can trust us that your iOS app development ideas will be completely safe. So, Get the desirable app with our top iOS app development company.",
      },
      {
        question: "How long does it take to create a website?",
        answer: "The timeline depends on the complexity of the project, but typically ranges from 4 to 12 weeks.",
      },
      {
        question: "Can I update my website after it's launched?",
        answer: "Yes, we provide user-friendly CMS solutions or ongoing maintenance services for updates.",
      },
    ]; 

  return (
    <div className='Ios-mobile-aap'>
      <Herosection2 heading="IOS APP DEVELOPMENT SERVICES"
      subtitle="Revolutionize your business, enhance customer engagement, and drive growth. With Apple's stringent quality standards and loyal user base, investing in iOS app development can help you tap into a lucrative market and stay ahead of the competition"
      className=" "
      heroimg={ios1}
      imagclasName='imagclasName'
      />
       <SecondSection heading="We are your Hero for iPhone App Development Solutions."
      subtitle="Every detail is crafted with precision and undergoes multiple rounds of rigorous testing. Our dedicated team is committed to delivering comprehensive iPhone app development services under one roof. Our iPhone app development expertise has empowered clients to achieve their goals and thrive in their industries"
      className=" "
      heroimg={iosservicesection}
      />
      <ServiceSection data={comprehensivedata} name="Our comprehensive services include." 
      subtitle="Mobulous specializes in providing the best iOS app development services to clients. Our experts create feature-rich and custom iOS apps tailored to your specific business needs and requirements, ensuring leading-edge quality and user satisfaction."
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
