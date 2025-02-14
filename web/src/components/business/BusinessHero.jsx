// import React from "react";

// import heroImage from "../../assets/BusinessHeroImage.png";
// import TechTransformSection from "./TechTransformSection";
// import BusinessCloud from "./BusinessCloud";
// import BusinessBenefits from "./BusinessBenefits";

// const BusinessHero = () => {
//   const styles = {
//     heroSectionBusi: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       padding: "2rem 6rem",
//       minHeight: "80vh",
//       backgroundColor: "#0a192f",
//       color: "white",
//       position: "relative",
//       overflow: "hidden",
//     },
//     contentContainer: {
//       flex: "1",
//       maxWidth: "600px",
//       zIndex: "1",
//     },
//     title: {
//       fontSize: "4rem",
//       fontWeight: "bold",
//       marginBottom: "1.5rem",
//       lineHeight: "1.2",
//     },
//     description: {
//       fontSize: "1.2rem",
//       lineHeight: "1.6",
//       color: "#94a3b8",
//       marginBottom: "2rem",
//     },
//     imageContainerBusi: {
//       flex: "1",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     heroImgBusi: {
//       maxWidth: "100%",
//       height: "auto",
//     },
//     "@media (max-width: 768px)": {
//       heroSectionBusi: {
//         flexDirection: "column",
//         padding: "2rem",
//         textAlign: "center",
//       },
//       contentContainer: {
//         maxWidth: "100%",
//         marginBottom: "2rem",
//       },
//       title: {
//         fontSize: "2.5rem",
//       },
//     },
//   };

//   return (
//     <>
//       <div style={styles.heroSectionBusi}>
//         <div style={styles.contentContainer}>
//           <h1 style={styles.title}>Business Solution</h1>
//           <p style={styles.description}>
//             Start Designs is an emerging web development company that offers
//             website development services. Our in-house team and professional web
//             developers use new technologies
//           </p>
//         </div>
//         <div style={styles.imageContainerBusi}>
//           <img
//             src={heroImage}
//             alt="Business Growth Illustration"
//             style={styles.heroImgBusi}
//           />
//         </div>
//       </div>
//       <TechTransformSection />
//       <BusinessCloud />
//       <BusinessBenefits />
//     </>
//   );
// };

// export default BusinessHero;

import React from "react";
import heroImage from "../../assets/BusinessHeroImage.png";
import TechTransformSection from "./TechTransformSection";
import BusinessCloud from "./BusinessCloud";
import BusinessBenefits from "./BusinessBenefits";
import "./BusinessHero.css";

const BusinessHero = () => {
  return (
    <>
      <section className="hero-section-business-busi">
        <div className="hero-content-container-busi">
          <h1 className="hero-title-busi">Business Solution</h1>
          <p className="hero-description-busi">
            Start Designs is an emerging web development company that offers
            website development services. Our in-house team and professional web
            developers use new technologies
          </p>
        </div>
        <div className="hero-image-container-busi">
          <img
            src={heroImage}
            alt="Business Growth Illustration"
            className="hero-image-busi"
          />
        </div>
      </section>
      <TechTransformSection />
      <BusinessCloud />
      <BusinessBenefits />
    </>
  );
};

export default BusinessHero;
