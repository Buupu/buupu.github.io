import React, { useState } from "react";
import FrameContainer from "../../components/frameContainer/frameContainer";
import { ReactComponent as BulletPoint } from "../../assets/bulletPoint.svg";
import "./experience.css";
export default function Experience(props) {
  const [activeTab, setActiveTab] = useState(0);
  const experienceData = [
    {
      title: "Mott MacDonald",
      timePeriod: "July 2019 - Present",
      jobTitle: "Software Engineer",
      paragraphs: [
        "Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium fringilla blandit. Etiam ut accumsan leo. Aliquam id mi quam. Vivamus dictum ut erat nec congue. Etiam facilisis lacus ut arcu vulputa",
        "Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium fringilla blandit. Etiam ut accumsan leo. Aliquam id mi quam. Vivamus dictum ut erat nec congue. Etiam facilisis lacus ut arcu vulputa",
        "Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus. Donec pretium fringilla blandit. Etiam ut accumsan leo. Aliquam id mi quam. Vivamus dictum ut erat nec congue. Etiam facilisis lacus ut arcu vulputa",
      ],
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
      <FrameContainer>
        <div className="Experience__Wrapper">
          <div className="Experience__NavContainer">
            <div
              className="Experience__NavActiveIndicator"
              style={{ top: activeTab * 40 }}
            ></div>
            <ul className="Experience__Nav">
              {experienceData.map((data, index) => {
                return (
                  <li
                    className={
                      activeTab === index
                        ? "Experience__NavItem--active"
                        : "Experience__NavItem"
                    }
                    onClick={() => setActiveTab(index)}
                  >
                    {data.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="Experience__InformationContainer">
            <h2>
              {experienceData[activeTab].jobTitle}
              <span className="Experience__InformationPlaceOfWork">
                {" @ "}
                {experienceData[activeTab].title}
              </span>
            </h2>
            <h3>{experienceData[activeTab].timePeriod}</h3>
            {experienceData[activeTab].paragraphs.map((paragraph) => {
              return (
                <div className="Experience__InformationParagraphContainer">
                  <BulletPoint />
                  <p>{paragraph}</p>
                </div>
              );
            })}
          </div>
        </div>
      </FrameContainer>
    </div>
  );
}
