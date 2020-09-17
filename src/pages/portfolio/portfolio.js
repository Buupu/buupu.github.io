import React, { useState } from "react";
import FrameContainer from "../../components/frameContainer/frameContainer";
import "./portfolio.css";
import Components from "./components/components";
export default function Portfolio(props) {
  const [activeCategory, setCategory] = useState(0);
  const portfolioData = [
    {
      title: "Components",
      content: <Components />,
    },
    {
      title: "Icons",
      content: <Components />,
    },
    {
      title: "Projects",
      content: <Components />,
    },
  ];
  return (
    <div className="Portfolio">
      <FrameContainer animated>
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

          <div className="Portfolio__ContentContainer">
            {portfolioData[activeCategory].content}
          </div>
        </div>
      </FrameContainer>
    </div>
  );
}
