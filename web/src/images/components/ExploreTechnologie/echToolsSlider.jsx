import React, { useEffect, useState } from "react";
import "./TechToolsSlider.css";

const TechToolsSlider = () => {
  const [position, setPosition] = useState(0);

  const technologies = [
    { name: "HTML5", color: "#E44D26", icon: "⟨/⟩" },
    { name: "JavaScript", color: "#F7DF1E", icon: "JS" },
    { name: "CSS3", color: "#264DE4", icon: "#" },
    { name: "VS Code", color: "#007ACC", icon: "</>" },
    { name: "MongoDB", color: "#47A248", icon: "DB" },
    { name: "Visual Studio", color: "#5C2D91", icon: "⚡" },
    { name: "Python", color: "#3776AB", icon: "🐍" },
    { name: "Java", color: "#007396", icon: "☕" },
    { name: "React", color: "#61DAFB", icon: "⚛" },
    { name: "Azure", color: "#0089D6", icon: "☁" },
    { name: "Angular", color: "#DD0031", icon: "Λ" },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 100;

        if (Math.abs(newPosition) >= technologies.length * 100) {
          return 0;
        }
        return newPosition;
      });
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [technologies.length]);

  return (
    <div className="tools-section">
      <div className="tools-content">
        <h1>Building Innovative Solutions with Cutting-Edge Tools</h1>
        <p>
          In our software development tools section, you will find cutting-edge
          tools that assist us in software development.
        </p>
      </div>

      <div className="slider-container">
        <div
          className="slider-track"
          style={{
            transform: `translateX(${position}px)`,
            width: `${technologies.length * 100}px`,
          }}
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-item"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              <div className="tech-icon" style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechToolsSlider;