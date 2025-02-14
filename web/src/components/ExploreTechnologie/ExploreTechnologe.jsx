import React from "react";
import "./ExploreTechnologie.css";
import ExploreHeroSection from "./ExploreHeroTechnologi";
import exloretechnologi from "./../../images/exloretechnologi.png";
import processdevelop from "./../../images/processDevelop.png";
import Herosection2 from "../MobileDevelopment/Herosection2";
import SecondSection from "../MobileDevelopment/SecondSection";
import { BiCodeAlt } from "react-icons/bi";
import SoftwareProduct from "./OurSoftwareProduct";
// import InnovationSolution from "./InnovationSolution";
// import OurCustomersSection from "../card/OurCustomersSection";
import Technologies from "./TechToolsSlider";
import ConsultNow from "../ConsultNow/ConsultNow";
import InnovationSolution from './InnovationSolution'
export default function ExploreTechnologe() {
  const services = [
    { title: "Custom Software Development" },
    { title: "Mobile App Development" },
    { title: "Web Application Development" },
    { title: "Consultancy & Strategy" },
    { title: "UX/UI Design" },
  ];

  return (
    <div className="explore-technologies-pages">
      <div className="explore-hero-section">
        <ExploreHeroSection
          heading="Explore Technologies We Transform "
          subtitle="Technology helps things get better!! It helps things get smaller, faster, and easier much and much better. Your android app has to be one that boosts the image of your company. It should have those features that your audience can use with ease. Android applications help in boosting the revenue and gaining maximum growth. In this era of technology."
          className=" "
          imagclasName="imagclasName"
          heroimg={exloretechnologi}
        />

        <SecondSection
          heading="Software Development Process"
          subtitle="In today's fast-paced digital landscape, custom software development is crucial for businesses to stay ahead of the competition. Our software development services help you design, develop, and deploy robust software solutions that meet your unique needs and goals."
          className=" "
          // classNameheader='goal-obj-header'
          heroimg={processdevelop}
          imagclasName="imagclasName"
        />
        <SoftwareProduct />
        <InnovationSolution />

        <div className="explore-services-container">
          <h2 className="explore-services-title">
            Our Software Development Services
          </h2>
          <div className="explore-services-card-container">
            {services.map((service, index) => (
              <div
                key={index}
                className={` explore-service-card explore-card-${index}`}
                // style={{
                //   backgroundColor: service.color,
                //   // top: `${index * 125}px`,
                //   // left: `${index * 120}px`
                //   // transform: `translate(${index * 125}px, ${index * 120}px)`,
                // }}
              >
                <div className="service-icon">
                  <BiCodeAlt />
                </div>
                <p className="service-text">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
        <Technologies />
      </div>
      <ConsultNow />
    </div>
  );
}
