import React from 'react'
import Herosection2 from './../Herosection2';
import './AndroidMobileApp.css';
import webdevelopmentgraphics from './../../../images/web-develop-graphics.png';
import SecondSection from './../SecondSection';
import ServiceSection from './../ServiceSection';
import iosservicesection from './../../../images/iosservicesection.png'
import androidhere from './../../../images/androidhere.png'
import WhyChooseSection from './../WhyChooseSection' 
import FaqSection from './../../card/FaqsSection';
import android2 from '../../../images/android2.png'
import ConsultNow from '../../ConsultNow/ConsultNow';


export default function AndroidMobileApp() {
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
      <Herosection2 heading="ANDROID APP DEVELOPMENT SERVICES"
      subtitle="Technology helps things get better!! It helps things get smaller, faster, and easier much and much better. Your android app has to be one that boosts the image of your company. It should have those features that your audience can use with ease. Android applications help in boosting the revenue and gaining maximum growth. In this era of technology where mobile is a priority i"
      className=" "
      heroimg={androidhere}
      imagclasName='imagclasName'
      />
       <SecondSection heading="We are your Hero for Android App Development Solutions."
      subtitle="place and each feature goes into multiple rounds of testing. Our dedicated team works round the clock to provide a wide range of Android app development services under one roof. Our Android app development skills have helped our clients achieve their goals and succeed in their respective industries."
      className=" "
      heroimg={android2}
      />
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
