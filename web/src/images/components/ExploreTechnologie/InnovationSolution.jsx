// const innodata = {
//   title: "Building Innovative Solutions with Cutting-Edge Technologies",
//   description: "Our team can assist you in transforming your business with the latest tech capabilities to stay ahead of the curve.",
//   categories: [
//     {
//       category: "Industry-Specific Solutions",
//       solutions: [
//         {
//           name: "Banking Software",
//           description:
//             "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
//         },
//         {
//           name: "HR Software",
//           description:
//             "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
//         },
//         {
//           name: "HR Software",
//           description:
//             "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
//         },
//         {
//           name: "HR Software",
//           description:
//             "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
//         },
//         {
//           name: "HR Software",
//           description:
//             "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
//         },
//       ],
//     },
//     {
//       category: "Business Productivity Solutions",
//       solutions: [
//         {
//           name: "E-Commerce Software",
//           description:
//             "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
//         },
//         {
//           name: "Billing Software",
//           description:
//             "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
//         },
//       ],
//     },
//     {
//       category: "Education and Field Solutions",
//       solutions: [
//         {
//           name: "School Software",
//           description:
//             "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
//         },
//         {
//           name: "Field Officer Software",
//           description:
//             "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
//         },
//       ],
//     },
//   ],
// };
// import './InnovationSolution.css'

// const InnovationSolution = () => {
//   return (
//     <div className='soft-product-section'>
//           <div className='soft-product-container'>
//           <div className='soft-product-sect-top'>
//       <h1>{softwareData.title}</h1>
//       <p>{softwareData.description}</p>
//       </div>

//       {softwareData.categories.map((category, index) => (
//         <div key={index} className=''>
//           <h2 className='soft-ware-produt-title'>{category.category}</h2>
//           <div className='soft-prouct-sec-body'>
          
//             {category.solutions.map((solution, idx) => (
//                <div key={idx} className='soft-product-sec-card'>
//                     <h5 className='soft-product-card-name'>{solution.name}</h5>
//                     <p className='soft-product-card-title'>{solution.description}</p>
           
//               </div>
//             ))}
          
//         </div>
//       </div>

//       ))}
//           </div>
    
//     </div>
//   );
// };

// export default InnovationSolution;


import React from "react";
import './InnovationSolution.css';
import growth from './../../images/growth.svg';
import finance from './../../images/finance.svg';
import retail from './../../images/retail.svg';
import helthcare from './../../images/helthcare.svg';
import professional from './../../images/professional 1.svg';
import hand from './../../images/hand.svg';
import edu from './../../images/edu.svg';


const technologyData = {
  "Blockchain Technology": [
    "Decentralized and Secure",
    "Smart Contracts",
    "Blockchain Development",
  ],
  "Cloud Technology": [
    "Scalable and Secure",
    "Cloud Migration",
    "Cloud Management",
  ],
  "Big Data Technology": [
    "Data Analytics",
    "Data Visualization",
    "Data Management",
  ],
  "Artificial Intelligence (AI) and Machine Learning (ML)": [
    "AI-powered Solutions",
    "ML-based Models",
    "Natural Language Processing (NLP)",
  ],
  "Internet of Things (IoT)": [
    "IoT-based Solutions",
    "Device Management",
    "Data Analytics",
  ],
};

const indWeServ = [
      {
        src: growth,
        alt: "growth",
        text: "Track and manage leads effectively.",
        headText: "Lead Management",
      },
      {
        src: finance,
        alt: "finance",
        headText: "Sales Automation",
        text: "Automate repetitive sales tasks to save time.",
      },
      {
        src: retail,
        alt: "retail",
        headText: "Customer Analytics",
        text: "Client Management Project Management Time & Billing Document Management",
      },
      {
        src: helthcare,
        alt: "helthcare",
        headText: "Customer Analytics",
        text: "Client Management Project Management Time & Billing Document Management",
      },
      {
        src: professional,
        alt: "professional",
        headText: "Customer Analytics",
        text: "Client Management Project Management Time & Billing Document Management",
      },
      {
        src: edu,
        alt: "Image 4",
        headText: "Customer Analytics",
        text: "Client Management Project Management Time & Billing Document Management",
      },
      {
        src: hand,
        alt: "Image 4",
        headText: "Customer Analytics",
        text: "Client Management Project Management Time & Billing Document Management",
      },
    ];

const InnovationSolution = () => {
  return (
    <div className="innovation-container-section">
      <div className="innovation-container-main">
      <div className="innovation-container-top">
      <h2>Building Innovative Solutions with Cutting-Edge Technologies</h2>
      <p>Our team can assist you in transforming your business with the latest tech capabilities to stay ahead of the curve.</p>
      </div>
    <div className="tech-container">
      {Object.keys(technologyData).map((category, index) => (
        <div key={index} className="tech-section">
          <h3 className="tech-header">{category}</h3>
          
          <ul className="tech-list">
            {technologyData[category].map((item, idx) => (
              <li key={idx} className="tech-item">{item}</li>
            ))}
          </ul>
         
        </div>
      ))}
    </div>
    <div className="innovation-container-top">
    <h2>Industries We Serve</h2>
      </div>
      <div className="industry-we-ser-container">
          {
            indWeServ.map((item, index) =>{
              return(
                <div key={index} className="industry-we-ser-card">
                    <img src={item.src} className="industry-we-card-img" alt={item.alt}/> 
                  <div>
                    <h3 className="industry-we-card-title">{item.headText}</h3>
                    <p className="industry-we-card-subtitle">{item.text}</p>
                  </div>
              </div>
              )
            })
          }
      </div>
    </div>

     
     
    </div>
  );
};

export default InnovationSolution;
