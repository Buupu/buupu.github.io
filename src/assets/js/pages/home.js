import React, { forwardRef } from "react";
import Logo from "../../img/logo.png";

const Home = forwardRef((props, ref) => {
  const scrollIntoView = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="wrapper  full-screen-height" ref={ref}>
      <div className="home-content content-block">
        <div className="full-half-flex-container-vertically-centered">
          <div className="home-intro-container">Hello!</div>
          <div className="thirty-spacer" />
          <div className="home-heading-container">I'm Sammy.</div>
          <div className="home-sub-heading-container">Web Developer.</div>
          <div className="thirty-spacer" />
          <button
            className="primary-button"
            onClick={() => scrollIntoView(props.portfolioRef)}
          >
            View my work
          </button>
        </div>
        <div className="full-half-flex-container-vertically-centered">
          <div class="logo-holder">
            <img src={Logo} width="34px" height="34px" alt="S Logo" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
