import React from "react";
import spreadhero from "./../../images/spreadproduct.png";
import spreadproduct from "./../../assets/content-5.jpeg";
import "./SpreadUpdate.css";
import SpreadSecondSection from "./SpreadSecondSection";
import SecondSection from "../MobileDevelopment/SecondSection";
import SpreadFourthSection from "./SpreadFourthSection";
import AdSection from "./AdSection";

export default function SpreadUpdate() {
  const talentData = Array(4).fill("Explore what's possible with");
  const handleScrollClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="spread-pages">
      <div className="spread-hero-section">
        <div className="container-img-spread">
          <img src={spreadhero} className="spread-img" alt="spread" />
        </div>
      </div>

      <div className="spread-button-container">
        {["For You", "Talent Solution", "For Creator", "AI"].map(
          (label, index) => (
            <button
              className="spread-button"
              onClick={() => handleScrollClick(label.replace(/\s+/g, ""))}
              key={index}
            >
              {label}
            </button>
          )
        )}
      </div>

      <div id="ForYou">
        <SpreadSecondSection />
      </div>

      <div className="talent-section" id="TalentSolution">
        <h3 className="talent-title">Talent Solution</h3>
        <div className="talent-section-card-container">
          {talentData.map((text, index) => (
            <div key={index} className="talent-section-card animate-card">
              <h1 className="talent-header">
                {text} <span className="spread-text">Spreads</span> Ads
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div id="ForCreator">
        <SecondSection
          heading="Creator"
          subtitle={
            <span
              dangerouslySetInnerHTML={{
                __html:
                  "The cost to advertise is up to you. Select a<br /> budget that fits your business goals and <br /> update it at any time Expertise",
              }}
            />
          }
          classNameheader="goal-obj-header"
          heroimg={spreadproduct}
          imagclasName="imagclasName"
        />

        {/* Spread Fourth Sections */}
        <SpreadFourthSection
          heading="Explore what's possible with"
          title="The cost to advertise is up to you. Select a budget that fits your business goals and update it at any time."
          img1={spreadproduct}
          img2={spreadhero}
          maintext="Spreads"
          order1="order1"
          order2="order2"
        />

        <SpreadFourthSection
          heading="Explore what's possible with"
          title="The cost to advertise is up to you. Select a budget that fits your business goals and update it at any time."
          img1={spreadproduct}
          img2={spreadhero}
          maintext="Spreads"
        />
      </div>
      {/* Ad Section */}
      <div id="AI">
        <AdSection />
      </div>
    </div>
  );
}
