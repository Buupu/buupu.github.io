import React, { useEffect, useRef } from "react";
import FrameContainer from "../../components/frameContainer/frameContainer";
import MyImage from "../../assets/sammyfattah.JPG";
import "./about.css";
import gsap from "gsap";
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
          I attended Glasgow's University of Strathclyde where I studied
          Computer Information Science and graduated with a Bachelors of Science
          degree with First Class honours.
        </p>
        <p>
          Since graduating I have worked independently and within development
          teams on a variety of interesting and meaningful projects in
          production.
        </p>
        <p>
          Here are a few technologies I’ve been working with recently: React
          HTML & (S)CSS Javascript (ES6+) GSAP Figma Node.js
        </p>
        <p>
          I am currently working on freelance projects but I’m always looking
          for an exciting opportunity. Reach out to me through the contact page,
          or send me an email at sammyfattah@gmail.com!
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
