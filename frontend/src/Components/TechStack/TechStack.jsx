import React from "react";
import "./TechStack.css";

const TechStack = () => {
  const LanguagesFrontend = [
    "C++",
    "JavaScript",
    "HTML5",
    "CSS3",
    "React.js",
    "GSAP",
    "Responsive Web Design",
  ];

  const BackendAPIs = ["Node.js", "Express.js", "REST APIs"];

  const DatabasesRealTime = ["MongoDB", "SQL", "WebSockets"];

  const ToolsPlatforms = ["Git", "GitHub", "VS Code", "Vercel", "Vite"];

  return (
    <div className="tech">
      <h2>Tech Stack</h2>

      <div
        style={{ border: "1px solid grey", marginTop: "5px", width: "99%" }}
      ></div>

      <div className="tech-info">
        <div className="tech-data LanguagesFrontend">
          <h4>Languages & Frontend</h4>
          {LanguagesFrontend.map((value, idx) => {
            return (
              <div key={idx}>
                <p className="tech-block">{value}</p>
              </div>
            );
          })}
        </div>
        <div
          style={{ border: "1px solid grey", height: "150px", margin: "10px" }}
        ></div>

        <div className="tech-data BackendAPIs">
          <h4>Backend & APIs</h4>
          {BackendAPIs.map((value, idx) => {
            return (
              <div key={idx}>
                <p className="tech-block">{value}</p>
              </div>
            );
          })}
        </div>

        <div
          style={{ border: "1px solid grey", height: "150px", margin: "10px" }}
        ></div>

        <div className="tech-data DatabasesRealTime">
          <h4>Databases & Real-Time</h4>
          {DatabasesRealTime.map((value, idx) => {
            return (
              <div key={idx}>
                <p className="tech-block">{value}</p>
              </div>
            );
          })}
        </div>

        <div
          style={{ border: "1px solid grey", height: "150px", margin: "10px" }}
        ></div>

        <div className="tech-data ToolsPlatforms">
          <h4>Tools & Platforms</h4>
          {ToolsPlatforms.map((value, idx) => {
            return (
              <div key={idx}>
                <p className="tech-block">{value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
