// import React from 'react'
// import './SoftwareContentFeature.css';

// const softwareData = [
//           { title: "Banking Software", description: "Leveraging AI and ML technologies to improve decision-making and automate complex business processes." },
//           { title: "HR Software", description: "Leveraging AI and ML technologies to improve decision-making and automate complex business processes." },
//           { title: "CRM Software", description: "Leveraging AI and ML technologies to improve decision-making and automate complex business processes." },
//           { title: "NGO Software", description: "Leveraging AI and ML technologies to improve decision-making and automate complex business processes." },
//           { title: "Banking Software", description: "Leveraging AI and ML technologies to improve decision-making and automate complex business processes." },
//           { title: "HR Software", description: "Leveraging AI and ML technologies to improve decision-making and automate complex business processes." },
//           { title: "CRM Software", description: "Leveraging AI and ML technologies to improve decision-making and automate complex business processes." },
//           { title: "NGO Software", description: "Leveraging AI and ML technologies to improve decision-making and automate complex business processes." },
//         ];

// export default function SoftwareContentFeature() {
//   return (
//      <div className="software-content-feature-container">
//              <div className="software-content-feature">
//              <div className="software-content-feature-left">
//              <h2 className="heading">Content</h2>
//              <div className="features-section">
//         {softwareData.map((item, index) => (
//           <div className={`card feature-card feature-${index}`} key={index}>
//             <h3>{item.title}</h3>
//             <p>{item.description}</p>
//           </div>
//         ))}
//       </div>

//              </div>
//              <div className="software-content-feature-left-right">
//              <h2 className="heading">Feature</h2>
//              <div className="features-section">
//           {softwareData.map((item, index) => (
//                     <div className={`card feature-card feature-${index}`} key={index}>
//                     <h3>{item.title}</h3>
//                     <p>{item.description}</p>
//                     </div>
//           ))}
//           </div>
//             </div>

//           </div>
//           </div>
//   );
// }

import React from "react";
import "./SoftwareContentFeature.css";

const softwareData = [
  { title: "Banking Software", description: "AI and ML-based automation." },
  { title: "HR Software", description: "AI-driven HR management." },
  { title: "CRM Software", description: "Customer relationship automation." },
  { title: "NGO Software", description: "AI-powered NGO solutions." },
  { title: "E-commerce Software", description: "AI in online shopping." },
  { title: "Healthcare Software", description: "ML for medical diagnosis." },
  { title: "Education Software", description: "AI-powered learning systems." },
  { title: "Finance Software", description: "Automated financial analytics." },
];

export default function SoftwareContentFeature() {
  return (
    <div className="software-content-feature-container">
      <div className="software-content-feature">
        <h2 className="software-content-header">Content</h2>
        <h2 className="software-content-header">Feature</h2>
        {softwareData.map((item, index) => {
          return (
            <div
              className={`software-content-feature-card
              feature-${index}`}
              key={index}
            >
              <h3>{item.title}</h3>
              <p className="soft-ware-content-feature-card-subtitle">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
