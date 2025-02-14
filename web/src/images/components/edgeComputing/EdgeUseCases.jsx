import React from "react";
import { Cloud, Smartphone, Database, Monitor, BarChart } from "lucide-react";
import "./EdgeUseCases.css";

const EdgeUseCases = () => {
  const useCases = [
    {
      title: "Email Marketing",
      description:
        "Mobile app development is becoming increasingly popular for its various benefits such as:",
      icon: <Smartphone className="use-case-icon" />,
    },
    {
      title: "Email Marketing",
      description:
        "Mobile app development is becoming increasingly popular for its various benefits such as:",
      icon: <Cloud className="use-case-icon" />,
    },
    {
      title: "Email Marketing",
      description:
        "Mobile app development is becoming increasingly popular for its various benefits such as:",
      icon: <Database className="use-case-icon" />,
    },
    {
      title: "Email Marketing",
      description:
        "Mobile app development is becoming increasingly popular for its various benefits such as:",
      icon: <BarChart className="use-case-icon" />,
    },
  ];

  return (
    <div className="use-cases-container">
      <h2>Use Cases of Edge Computing</h2>

      <div className="use-cases-grid">
        {useCases.map((useCase, index) => (
          <div className="use-case-card" key={index}>
            <div className="icon-wrapper">{useCase.icon}</div>
            <div className="use-case-content">
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EdgeUseCases;
