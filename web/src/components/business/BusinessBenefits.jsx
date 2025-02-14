import React from "react";
import "./BusinessBenefits.css";
import cloudSol from "../../assets/cloud solution 1.png";
import cyber from "../../assets/cybersecurity 1.png";
import consult from "../../assets/consulting 1.png";

// const BusinessBenefits = () => {
//   const benefits = [
//     {
//       id: 1,
//       iconSrc: cloudSol,
//       title: "Cloud Solutions and Migrations",
//       description:
//         "Your journey to the cloud made simple: Leverage our expertise at Ambispine Technologies to migrate your business to the cloud with minimal disruption. We specialize in cloud architecture, deployment, and management, ensuring a seamless transition and optimized performance.",
//     },
//     {
//       id: 2,
//       iconSrc: cyber,
//       title: "Cybersecurity and Complian",
//       description:
//         "Secure your business, protect your future: At Ambispine Technologies, we defend your operations against evolving cyber threats. Our comprehensive security services ensure compliance with industry standards while safeguarding your sensitive data from breaches.",
//     },
//     {
//       id: 3,
//       iconSrc: consult,
//       title: "IT Consulting and Strateg",
//       description:
//         "Empower your business with expert IT consulting and strategy: At Ambispine Technologies, we guide you through digital transformation with tailored solutions that drive efficiency and growth. From cloud migrations to strategic IT planning, we offer insights and services that streamline operations and boost your competitive edge.",
//     },
//   ];

//   return (
//     <section className="benefits-section">
//       <div className="benefits-container">
//         <header className="benefits-header">
//           <h1 className="benefits-title">The Benefits of Our Business</h1>
//           <h2 className="benefits-subtitle">Continuity Solutions</h2>
//         </header>

//         <div className="benefits-content">
//           {benefits.map((benefit) => (
//             <div key={benefit.id} className="benefit-item">
//               <div className="benefit-icon-wrapper">
//                 <img
//                   src={benefit.iconSrc}
//                   alt={benefit.title}
//                   className="benefit-icon"
//                 />
//               </div>
//               <div className="benefit-text">
//                 <h3 className="benefit-title">{benefit.title}</h3>
//                 <p className="benefit-description">{benefit.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BusinessBenefits;

// import React from "react";

const BusinessBenefits = () => {
  const benefits = [
    {
      image: cloudSol,
      title: "Cloud Solutions and Migrations",
      description: (
        <span
          dangerouslySetInnerHTML={{
            __html:
              "Your journey to the cloud made simple: Leverage our expertise at Ambispine Technologies to<br /> migrate your business to the cloud with minimal disruption. We specialize in cloud architecture, <br/>  deployment, and management, ensuring a seamless transition and optimized performance.",
          }}
        />
      ),
    },
    {
      image: cyber,
      title: "Cybersecurity and Complian",
      description: (
        <span
          dangerouslySetInnerHTML={{
            __html:
              "Your journey to the cloud made simple: Leverage our expertise at Ambispine Technologies to<br /> migrate your business to the cloud with minimal disruption. We specialize in cloud architecture, <br/>  deployment, and management, ensuring a seamless transition and optimized performance.",
          }}
        />
      ),
    },
    {
      image: consult,
      title: "IT Consulting and Strateg",
      description: (
        <span
          dangerouslySetInnerHTML={{
            __html:
              "Your journey to the cloud made simple: Leverage our expertise at Ambispine Technologies to<br /> migrate your business to the cloud with minimal disruption. We specialize in cloud architecture, <br/>  deployment, and management, ensuring a seamless transition and optimized performance.",
          }}
        />
      ),
    },
  ];

  return (
    <div className="benefits-container">
      <h1 className="benefits-title">The Benefits of Our Business</h1>
      <h2 className="benefits-subtitle">Continuity Solutions</h2>

      <div className="benefits-list">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-item">
            <div className="benefit-image">
              <img src={benefit.image} alt={benefit.title} />
            </div>
            <div className="benefit-content">
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessBenefits;
