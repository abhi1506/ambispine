import React from "react";
import "./TechTransformSection.css";

const TechTransformSection = () => {
  const solutions = [
    {
      title: "Cloud Solutions",
      description:
        "We provide cloud-based solutions for secure, scalable, and cost-effective business operations.",
    },
    {
      title: "Cloud Solutions",
      description:
        "We provide cloud-based solutions for secure, scalable, and cost-effective business operations.",
    },
    {
      title: "Cloud Solutions",
      description:
        "We provide cloud-based solutions for secure, scalable, and cost-effective business operations.",
    },
  ];

  return (
    <section className="tech-transform-section">
      <h1 className="transform-title">
        Meet Technology That Transform The World
      </h1>
      <div className="cards-container-tech">
        {solutions.map((solution, index) => (
          <div key={index} className="solution-card-tech">
            <h2 className="card-title-tech">{solution.title}</h2>
            <p className="card-text-tech">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechTransformSection;
