import React, { useState } from "react";
import Spinners from "./spinners/spinners";
import Inputs from "./inputs/inputs";
import Buttons from "./buttons/buttons";
export default function Components(props) {
  const [activeCategory, setCategory] = useState(0);
  const portfolioData = [
    {
      title: "Spinners",
      content: <Spinners />,
    },
    {
      title: "Icons",
      content: <Inputs />,
    },
    {
      title: "Buttons",
      content: <Buttons />,
    },
  ];
  return (
    <div className="Portfolio__Container">
      <div className="Portfolio__NavContainer">
        <div
          className="Portfolio__NavActiveIndicator"
          style={{ top: activeCategory * 40 }}
        ></div>
        <ul className="Portfolio__Nav">
          {portfolioData.map((data, index) => {
            return (
              <li
                className={
                  activeCategory === index
                    ? "Portfolio__NavItem--active"
                    : "Portfolio__NavItem"
                }
                onClick={() => setCategory(index)}
              >
                {data.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div style={{ display: "flex" }}>
        {portfolioData[activeCategory].content}
      </div>
    </div>
  );
}
