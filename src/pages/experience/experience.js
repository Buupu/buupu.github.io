import React, { useState } from "react";
import "./experience.css";
export default function Experience(props) {
  const [activeTab, setActiveTab] = useState(0);
  const experienceData = [
    {
      title: "Mott MacDonald",
      timePeriod: "July 2019 - Present",
      jobTitle: "Software Engineer",
      paragraphs: ["", "", ""],
    },
    {
      title: "JPMorgan & Chase",
      timePeriod: "July 2018 - August 2018",
      jobTitle: "Software Engineer",
      paragraphs: ["", "", ""],
    },
    {
      title: "Mott MacDonald",
      timePeriod: "July 2019 - Present",
      jobTitle: "Software Engineer",
      paragraphs: ["", "", ""],
    },
  ];
  return (
    <div className="Experience">
      <ul className="Experience__Nav">
        {experienceData.map((data, index) => {
          return (
            <li
              className={
                activeTab === index
                  ? "Experience__NavItem--active"
                  : "Experience__NavItem"
              }
            >
              {data.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
