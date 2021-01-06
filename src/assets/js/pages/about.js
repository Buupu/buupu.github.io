import React, { forwardRef } from "react";
import SammyImg from "../../img/sammyfattah.jpg";
import Fade from "react-reveal/Fade";
const About = forwardRef((props, ref) => {
  return (
    <div className="content blue-background" ref={ref}>
      <Fade delay={300}>
        <div className="one-hundred-spacer" />
        <div className="one-flex-margin-container ">
          <div className="full-half-flex-container show-on-responsive">
            <div class="half-block-image-holder">
              <img src={SammyImg} alt="Sammy Fattah" />
            </div>
            <div className="sixty-spacer" />
          </div>
          <div className="full-half-flex-container about-content">
            <h2>About me</h2>
            <div className="forty-spacer" />
            <p>
              Hello! I’m Sammy Fattah, a software developer based in Glasgow,
              Scotland.
            </p>
            <p>
              I have a keen interest in web development and user interface
              design. I love designing and building products that provide
              elegant auser experiences while being performant and robust.
            </p>
            <p>
              I attended Glasgow's University of Strathclyde where I studied
              Computer Information Science and graduated with Bachelors of
              Science degree with First Class honours.
            </p>
            <p>
              Since graduating I have worked independently and within
              development teams on a variety of interesting and meaningful
              projects in production.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <p>
              I am currently working on freelance projects but I’m always
              looking for an exciting opportunity. Reach out to me through the
              contact page, or send me an email at sammyfattah@gmail.com!
            </p>
          </div>
          <div className="full-half-flex-container hide-on-responsive">
            <div class="half-block-image-holder about-image-holder">
              <img src={SammyImg} alt="Sammy Fattah" />
            </div>

            <div className="about-image-backdrop" />
          </div>
        </div>
        <div className="one-hundred-spacer" />
      </Fade>
    </div>
  );
});

export default About;
