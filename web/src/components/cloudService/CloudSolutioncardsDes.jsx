import React from "react";
import "./CloudSolutioncardsDes.css";

const CloudSolutioncardsDes = () => {
  const cardsData = [
    {
      title: "Infrastructure as a Service (IaaS)",
      subtitle: "Customize the ERP system to meet your unique business needs.",
      position: "top",
    },
    {
      title: "Platform as a Service (PaaS)",
      subtitle:
        "Provides a platform allowing customers to develop, run, and manage applications without the complexity of infrastructure.",
      position: "left",
    },
    {
      title: "Software as a Service (SaaS)",
      subtitle:
        "Software applications hosted in the cloud and available over the internet.",
      position: "right",
    },
    {
      title: "Cloud Security",
      subtitle:
        "Ensures the protection of data and applications in cloud environments, providing security solutions.",
      position: "center",
    },
    {
      title: "Cloud Migration",
      subtitle:
        "Ensures the protection of data and applications in cloud environments, providing security solutions.",
      position: "bottom",
    },
  ];

  return (
    <section className="cloud-solutions_desc">
      <div className="cloud-solutions-content_desc">
        <h1>Our Comprehensive Cloud Solutions</h1>
        <div className="cards-container-cloud_desc">
          <div className="cloud-sol-dice_desc">
            {cardsData.map((item, index) => (
              <div
                key={index}
                className={`card-cloud-sol_desc ${item.position}`}
                style={{ "--delay": `${index * 0.2}s` }}
              >
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudSolutioncardsDes;
