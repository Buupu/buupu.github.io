import React from "react";
import "./portfolio.css";
import FrameContainer from "../../components/frameContainer/frameContainer";
import { ReactComponent as Pen } from "../../assets/pen.svg";
export default function Portfolio(props) {
  return (
    <div className="Portfolio">
      <FrameContainer>
        <div className="Portfolio__SelectionCard">
          <Pen />
          <h3>Icons</h3>
        </div>
      </FrameContainer>
      <FrameContainer>
        <div className="Portfolio__SelectionCard">
          <Pen />
          <h3>Components</h3>
        </div>
      </FrameContainer>
      <FrameContainer>
        <div className="Portfolio__SelectionCard">
          <Pen />
          <h3>Designs</h3>
        </div>
      </FrameContainer>
    </div>
  );
}
