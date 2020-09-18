import React, { useEffect, useRef } from "react";
import FrameContainer from "../../components/frameContainer/frameContainer";
import MyImage from "../../assets/sammyfattah.JPG";
import "./about.css";
import gsap from "gsap";
import { ReactComponent as BulletPoint } from "../../assets/bulletPoint.svg";
import { NavLink } from "react-router-dom";
export default function About(props) {
  let textRef = useRef();

  useEffect(() => {
    gsap.to(textRef, {
      opacity: 1,
      delay: 0.8,
    });
  }, []);
  return (
    <div className="About">
      <div
        className="About__TextWrapper"
        ref={(el) => (textRef = el)}
        style={{ opacity: 0 }}
      >
        <h1>About Me</h1>
        <p>
          Hello! I’m Sammy Fattah, a software developer based in Glasgow,
          Scotland.
        </p>
        <p>
          I have a keen interest in web development and user interface design. I
          love designing and building products that provide elegant and simple
          user experiences while being performant and robust.
        </p>
        <p>
          I attended Glasgow's{" "}
          <a href="https://www.strath.ac.uk/">University of Strathclyde</a>{" "}
          where I studied Computer Information Science and graduated with a
          Bachelors of Science degree with First Class honours.
        </p>
        <p>
          Since graduating I have worked independently and within development
          teams on a variety of interesting and meaningful projects in
          production.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <ul>
          {[
            <span>React</span>,
            <span>HTML & (S)CSS</span>,
            <span>Javascript (ES6+)</span>,
            <span>GSAP</span>,
            <span>Figma</span>,
            <span>Node.js</span>,
          ].map((technology) => {
            return (
              <li>
                <BulletPoint />
                {technology}
              </li>
            );
          })}
        </ul>
        <p>
          I am currently working on freelance projects but I’m always looking
          for an exciting opportunity. Reach out to me through the{" "}
          <NavLink activeClassName="active" to="/contact">
            contact
          </NavLink>{" "}
          page, or send me an email at{" "}
          <a href="mailto: sammyfattah@gmail.com">sammyfattah@gmail.com</a>!
        </p>
      </div>
      <FrameContainer animated>
        <div className="About__ImageContainer">
          <img src={MyImage} alt="Sammy" />
        </div>
      </FrameContainer>
    </div>
  );
}
