import React from "react";
import "./SoftwareDevelopmentCard.css";

export default function SoftwareDevelopmentContainer() {
  const data1 = [
    {
      id: 1,
      header: "Business Productivity Solutions",
      subtitle:
        "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
    },
    {
      id: 2,
      header: "Business Productivity Solutions",
      subtitle:
        "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
    },
    {
      id: 3,
      header: "Business Productivity Solutions",
      subtitle:
        "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
    },
    {
      id: 4,
      header: "Business Productivity Solutions",
      subtitle:
        "Leveraging AI and ML technologies to improve decision-making and automate complex business processes.",
    },
  ];
  return (
    <div className="soft-dev-process-container">
      <h1 className="soft-dev-pro-head">Our Software Development Process</h1>
      <p className="soft-dev-pro-sub">
        We follow a structured approach to ensure successful project delivery
      </p>
      <SoftwareDevelopmentCard data1={data1} heading="Content" />
      <SoftwareDevelopmentCard data1={data1} heading="Feature" />
    </div>
  );
}

export function SoftwareDevelopmentCard({ data1, heading = "content" }) {
  return (
    <div className="soft-development-section">
      <h4 className="soft-develop-sec-header">
        {heading || "Default Heading"}
      </h4>
      <div className="software-development-card-container">
        {data1.map((data) => {
          return (
            <div key={data.id} className="soft-develop-card">
              <h4 className="soft-dev-head">{data.header}</h4>
              <p className="soft-dev-sub">{data.subtitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
