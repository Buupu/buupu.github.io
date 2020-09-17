import React, { useState, Component } from "react";
import FrameContainer from "../../../../components/frameContainer/frameContainer";
import { ReactComponent as ForwardArrow } from "../../../../assets/forwardArrow.svg";
import { ReactComponent as BackArrow } from "../../../../assets/backArrow.svg";
import { CSSTransition } from "react-transition-group";
import Spinner1 from "./spinner1/spinner1";
import Spinner2 from "./spinner2/spinner2";
import Spinner3 from "./spinner3/spinner3";
import "./spinners.css";
export default function Inputs(props) {
  const [componentIndex, setComponentIndex] = useState(2);
  const components = [<Spinner1 />, <Spinner2 />, <Spinner3 />];
  return (
    <div className="Spinners__Container">
      {components.map((comp, index) => (
        <CSSTransition
          unmountOnExit
          in={index === componentIndex}
          timeout={300}
          classNames="fade"
        >
          {comp}
        </CSSTransition>
      ))}
      <div className="Spinners__GallaryBar">
        {components.map((comp, index) => {
          return (
            <div
              className={
                index === componentIndex
                  ? "Spinners__GallaryIndicator Spinners__GallaryIndicator--active"
                  : "Spinners__GallaryIndicator"
              }
              onClick={() => setComponentIndex(index)}
            ></div>
          );
        })}
      </div>
      <div
        className="Spinners__GallaryForward"
        onClick={() =>
          setComponentIndex(
            componentIndex === components.length - 1 ? 0 : componentIndex + 1
          )
        }
      >
        <ForwardArrow />
      </div>
      <div
        className="Spinners__GallaryBack"
        onClick={() =>
          setComponentIndex(
            componentIndex === 0 ? components.length - 1 : componentIndex - 1
          )
        }
      >
        <BackArrow />
      </div>
    </div>
  );
}
