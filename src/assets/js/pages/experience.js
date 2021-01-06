import React, { forwardRef } from "react";
import Fade from "react-reveal/Fade";

const experienceData = ["Freelance", "Mott MacDonald", "JPMorgan & Chase"];

const Experience = forwardRef((props, ref) => {
  return (
    <div className="content" ref={ref}>
      <Fade delay={300}>
        <div className="one-hundred-spacer" />
        <div className="one-flex-margin-container ">
          <div className="full-half-flex-container flex-column-container">
            <h2>Experience</h2>
            <div className="forty-spacer" />
            <div>
              <ul className="experience-nav">
                {experienceData.map((xp) => {
                  return <li>{xp}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="one-hundred-spacer" />
      </Fade>
    </div>
  );
});

export default Experience;
