import React from "react";
// import "./HomeSection.css";
import "./NetworkSectionHome.css";

import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiShareForwardFill } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";

// import officediscussingImg from "../../assets/office-discussing.avif";
import empowerImg1 from "../../../assets/empowerImg1.jpg";
import learnImg from "../../../assets/learn.jpg";
import connectedImg from "../../../assets/connect.avif";
import maximize from "../../../assets/maximize.jpg";
// import maximi from "../../assets/maximi.png";
import cmsimg from "./../../../images/cmsimg.png";
import ImgContRightHeroSection from "./ImgContRightHeroSection";
export default function NetworkSectionHome() {
  const spreadsServices = [
    {
      src: empowerImg1,
      Icon: <HiMiniUserGroup />,
      alt: "Image 2",
      text: "Emphasizes the importance of accessing valuable resources and support through a strong network and follow your passion with following your choices.",
      headText: "Empower your life",
    },
    {
      src: learnImg,
      alt: "Image 3",
      Icon: <MdLeaderboard />,
      headText: "Learn new skills",
      text: "Learning is an endless process, and it's impact is infinite. Never stop learning and together, let's reach new heights expand your network",
    },
    {
      src: connectedImg,
      alt: "Image 4",
      Icon: <RiShareForwardFill />,
      headText: "Connect, Capture And Share",
      text: "Connect with the world at your fingertips. Think, express and share your ideas with the globe. Spread your wings and soar to new heights feel connection here!",
    },
  ];

  return (
    <div className="">
      <div className="home-spread-services-container">
        <ImgContRightHeroSection
          leftImg={cmsimg}
          rheading="Spread Your Wings, Expand Your Network"
          rsubtitle="Expand your reach and influence. Grow your connections, increase
              your opportunities, and access to resources. Make a bond with new
              possibilities and horizons."
          imgclss=""
          redirect="/product/spreads"
        />
        <div className="home-spread-service-section">
          <div className="home-spread-services-header">
            <div className="hom-services-title-col-left">
              <h3 className="home-services-main-title">
                <b>Connect Learn Grow</b> <br />
                Your premier destination for professional growth and networking
              </h3>
            </div>
            <div className="hom-services-title-col-right">
              <p className="home-right-services-subtitle">
                Implies that a stronger network can provide valuable support and
                tools highlights the potential for new experiences and
                possibilities
              </p>
            </div>
          </div>
          <div className="home-spread-service-line"></div>

          <div className="home-services-grid">
            {spreadsServices.map((data, index) => (
              <div key={index} className="home-services-grid-card2">
                {/* <div className="service-icon"></div> */}
                <h4 className="home-services-grid-card2-header ">
                  <span className="home-spread-service-grid-icon">
                    {data.Icon}
                  </span>
                  {data.headText}
                </h4>
                <p className="home-services-grid-card2-description">
                  {data.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="maximize-section-update">
        <div className="maximize-home-header">
          <h2 className="maximize-home-header-title ">
            Maximize efficiency with <br /> intelligent automation
          </h2>
          <p className="maximize-home-header-subtitle">
            <span style={{ fontWeight: "500" }}>AMBISPINE TECHNOLOGIES</span>{" "}
            <span style={{ fontSize: "17px" }}>
              invites you to join our vibrant digital community platform
            </span>
          </p>
        </div>

        <div className="maximize-content-section">
          <ImgContRightHeroSection
            leftImg={maximize}
            rheading={
              <span
                dangerouslySetInnerHTML={{
                  __html: "Elevate Your Business with <br /> Cloud Expertise",
                }}
              />
            }
            rsubtitle="AMBISPINE TECHNOLOGIES invites you to join our vibrant digital community platform, where you can connect, collaborate, and foster creativity and innovation. Join us to unlock endless possibilities and experience the magic of limitless potential!"
            imgclss=""
            redirect="/services/cloud-solution"
          />
        </div>
      </div>
    </div>
  );
}
