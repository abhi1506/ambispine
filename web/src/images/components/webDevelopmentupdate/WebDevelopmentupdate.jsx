import React, { useState } from "react";
import "./WebDevelopmentupdate.css";
import image1 from "../../assets/Pngtree.jpg";
import image2 from "../../assets/Group.svg";
import image3 from "../../assets/Analyze-Data.svg";
import image4 from "../../assets/Coding-Website.svg";
import image5 from "../../assets/Cryptowallets-Showing.svg";
import DevelopersTools from "../card/DevelopersTools";
import { FaRegEdit } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import QuotationForm from '../form/QuotationForm';
import FaqSection from "../card/FaqsSection";
import CallToAction from "../card/CallToAction";
import webdevelopmentgraphics from '../../images/web-develop-graphics.png';
import bankinigsolution from '../../images/bankinig-solutioin-1.png';
import { FaArrowRightLong } from "react-icons/fa6";
import connect1 from '../../images/connect1.png'
import { Link } from "react-router-dom";
import HoveringTestContent from './HoveringTestContent';
import { Button } from './../button/Button'

const WebDevelopmentupdate = () => {
  const bussineesbutton = [
    {
      id:1,
      name:"Business",
      link:"/services/business-solution",
    },
    {
      id:2,
      name:"Mobile",
      link:"/services/mobile-app-development"
    },
    {
      id:3,
      name:"Custom",
      link:"/services/software-development-services"
    },
  ]
  const onlinePreserveSolution = [
    {
      id: 1,
      name: "Customized Website Design",
      icon: image2,
      background: "rgba(255, 166, 82, 1)",
      
    },
    {
      id: 2,
      name: "Responsive and Mobile-Friendly",
      icon: image3,
      background: "rgba(146, 82, 255, 1)",
      
    },
    {
      id: 3,
      name: "Search Engine Optimization (SEO)",
      icon: image4,
      background: "rgba(255, 82, 82, 1)",
     
    },
    {
      id: 4,
      name: "Fast and Secure Hosting",
      icon: image5,
      background: "rgba(243, 165, 91, 1)",
    },
  ];
  const clouddata = [
    {
      id: 1,
      content: "Embrace the booster of Cloud Computing",
      hoverContent2:
        "Embrace the booster of cloud computing.Ambispine Technologies' cloud services provide secure, scalable, and reliable infrastructure for your business applications. Our cloud solutions enable you to reduce costs, increase agility, and improve collaboration.",
      src: connect1,
    },
    {
      id: 2,
      content: "Elevate Your Business with Cloud Expertise",
      hoverContent2:
        "Unlock the power of cloud computing. Ambispine Technologies' cloud solutions deliver flexible, secure, and scalable infrastructure for your business needs. Our cloud services enhance productivity, reduce costs, and foster collaboration.",
      src: connect1,
    },
    {
      id: 3,
      content:
        "Revolutionize Your Business with Scalable, Secure, and Reliable Cloud Solutions",
      hoverContent2:
        "Discover the benefits of cloud computing. Ambispine Technologies' cloud solutions offer adaptable, secure, and scalable infrastructure for your business needs. Our cloud services streamline operations, reduce costs, and enhance collaboration",
      src: connect1,
    },
  ];

  const faqs = [
    {
      question: "CMS or SaaS Development?",
      answer:
        "Cloud computing in business involves delivering computing services like servers, storage, and applications over the internet.",
    },
    {
      question: "Web App Development?",
      answer:
        "Yes, cloud providers invest heavily in security, but businesses must also implement their own security measures.",
    },
    {
      question: "EPR Developemnt?",
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
    <div className="web-development-container">
      <div className="container-web">
        <div className="content">
          <h1>Explore  Web Developme</h1>
          <p>In a world where technology bridges gaps and brings people closer, we stand at the forefront. We specialize in enhancing business health through robust IT support and innovative SaaS applications. Solutions are designed to connect people, streamline processes, and empower companies to reach their full potential. 
          </p>
          <div className="explore-button-container">
          {
            bussineesbutton.map((link)=>{
             return(

              <Link key={link.id}  to={`${link.link}`}  className="network-learn-more-link explore-dev-link " data-aos="fade-up"
              > {link.name} <FaArrowRightLong className="" />
                </Link>
          
             )  
            })
          }
           </div>
        </div>
        <div className="iamge">
            <div className="web-hero-image-container">
            <img src={webdevelopmentgraphics} alt="Web Development" />
            </div>
        </div>
      </div>
      
      <section className="web-developments-process">
        <div className="process-tops">
        <h2  className="web-dev-head">Welcome to our Website Development Services</h2>
        <p  className="web-dev-sub">Our website development services provide your business with an online presence. We create a professional and responsive website for you that attracts your customers.</p>
        <p  className="web-on-presence">Welcome to our Website Development Services</p>
        <div className="process-steps-container">
        {onlinePreserveSolution.map((data) => (
          <div key={data.id} className='process-steps-card' style={{ background: data.background }}>
            <h3 className="steps-heading">{data.name}</h3>
            <img src={data.icon} alt="show related icon" />
          </div>
            ))}        
      
        </div>
        </div>

        
      </section>

       <div className="tranformic-container">
                <div className="our-vision">
                <h1 className="tranformic-heading"> Transforming The Sector</h1>
                </div>

                <div className="tranfrom-body">
                <div className="tranfrom-body-left">
                    <div className="img-container">
                    <img
                      src={bankinigsolution}
                      alt="Our Services"
                    />
                    </div>
              </div>
              <div className="tranfrom-body-right">
              <h1 className="tranformic-heading">  Banking</h1>
               <p className="transfromic-subtile">In a world where technology bridges gaps and brings people closer, we stand at the forefront. We specialize in enhancing business health through robust IT support and innovative SaaS applications. Solutions are designed to connect people, streamline processes, and empower companies to reach their full potential. </p>
            </div>
                </div>
            
            <div>
          
      
            </div>
        </div>
        <HoveringTestContent data={clouddata}/>
        

          <div className="tranfrom-body-second">
                <div className="tranfrom-body-second-left ">
                    <div className="img-container">
                    <img
                      src={connect1}
                      alt="Our Services"
                    />
                    </div>
              </div>
              <div className="tranfrom-body-second-right">
               <p className="transfromic-subtile">In a world where technology bridges gaps and brings people closer, we stand at the forefront. We specialize in enhancing business health through robust IT support and innovative SaaS applications. Solutions are designed to connect people, streamline processes, and empower companies to reach their full potential. </p>
                <div className="text-center">
                <Button name="Explore Web Solution" redirect="/explore-web-solution"   />
                </div>
            </div>
                </div>
            
            <div>
          
      
            </div>





      {/* <section className="web-development-covers">
        <h2>Website Development Covers</h2>
        <div className="covers-list">
          <div className="cover-item">
            <h3>E-commerce Website Development</h3>
            <p>
              We build custom e-commerce solutions tailored to your business
              needs.
            </p>
          </div>
          <div className="cover-item">
            <h3>WordPress Development</h3>
            <p>
              Our experts can create and customize WordPress websites for you.
            </p>
          </div>
          <div className="cover-item">
            <h3>Mobile App Development</h3>
            <p>We develop mobile apps for both iOS and Android platforms.</p>
          </div>
          <div className="cover-item">
            <h3>Custom Web Development</h3>
            <p>
              Our team can build any type of custom website or web application.
            </p>
          </div>
        </div>
      </section> */}
      </div>
     {/* < FaqSection faqs={faqs}/> */}
     

      {/* <section>
        <DevelopersTools />
      </section> */}

      {/* <CallToAction/> */}
     
    </>
  );
};

export default WebDevelopmentupdate;
