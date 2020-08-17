import React from "react";
import FrameContainer from "../../components/frameContainer/frameContainer";
import "./home.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
export default function Home(props) {
  return (
    <div className="Home">
      <FrameContainer>
        <div className="Home__LogoContainer">
          <Logo />
        </div>
      </FrameContainer>
    </div>
  );
}
