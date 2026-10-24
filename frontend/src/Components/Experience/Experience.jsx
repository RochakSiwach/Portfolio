import React from "react";
import "./Experience.css";

const Experience = () => {
  let experience = [
    {
      id: 1,
      experienceHeading: "NIT DELHI",
      experienceRole: "Research Intern",
      experienceDate: "June-Aug 2026",
      experienceDetails: [
        "Joined the lab's deep learning-based low-light image enhancement research, working with image decomposition techniques and neural network model evaluation.",
        "Supporting technical documentation and literature review alongside the lab's senior researchers.",
      ],
    },

    {
      id: 2,
      experienceHeading: "MNT Dreams Pvt. Ltd ",
      experienceRole: "Frontend Developement Intern",
      experienceDate: "June-July 2025",
      experienceDetails: [
        "Replaced repeated one-off UI markup across multiple product pages with a shared set of reusable React components, cutting down duplicate code and simplifying future updates.",
        "Built end-to-end signup/login flows with client-side form validation to catch input errors before submission and reduce failed onboarding attempts.",
        "Developed a real-time leaderboard component that pulled and displayed live application data without requiring a page refresh.",
        "Reviewed and adjusted CSS layouts across desktop, tablet, and mobile breakpoints to fix inconsistent spacing and alignment issues found during testing.",
      ],
    },
  ];

  return (
    <div className="experience">
      <p>EXPERIENCE</p>

      <div>
        {experience.map((value) => {
          return (
            <div key={value.id} className="experience-data">
              <div className="experience-heading-date">
                <h6 className="experienceHeading">{value.experienceHeading}</h6>
                <p className="experience-date">{value.experienceDate}</p>
              </div>
                <p>{value.experienceRole}</p>
              <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
                {value.experienceDetails.map((details, idx) => (
                  <li key={idx}>{details}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
