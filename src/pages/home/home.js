import React from "react";
import FrameContainer from "../../components/frameContainer/frameContainer";
import "./home.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
export default function Home(props) {
  return (
    <div className="Home">
      <FrameContainer animated>
        <div className="Home__LogoContainer">
          <Logo />
          <h1>Sammy Fattah</h1>
          <h2>Web Development</h2>
          <Link to="/portfolio">
            <button className="Home__CTA">View my work</button>
          </Link>
        </div>
      </FrameContainer>
    </div>
  );
}
