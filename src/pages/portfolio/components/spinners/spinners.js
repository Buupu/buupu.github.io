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
  const [isForward, setIsForward] = useState(true);
  const components = [<Spinner1 />, <Spinner2 />, <Spinner3 />];

  const handleComponentIndexChange = (targetIndex) => {
    if (targetIndex < 0) {
      setIsForward(false);
      setComponentIndex(components.length - 1);
    } else if (targetIndex > components.length - 1) {
      setIsForward(true);
      setComponentIndex(0);
    } else {
      setIsForward(targetIndex > componentIndex);
      setComponentIndex(targetIndex);
    }
  };

  return (
    <div className="Spinners__Container">
      {components.map((comp, index) => (
        <CSSTransition
          unmountOnExit
          in={index === componentIndex}
          timeout={300}
          classNames={isForward ? "fadeForward" : "fadeBackwards"}
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
              onClick={() => handleComponentIndexChange(index)}
            ></div>
          );
        })}
      </div>
      <div
        className="Spinners__GallaryForward"
        onClick={() => handleComponentIndexChange(componentIndex + 1)}
      >
        <ForwardArrow />
      </div>
      <div
        className="Spinners__GallaryBack"
        onClick={() => handleComponentIndexChange(componentIndex - 1)}
      >
        <BackArrow />
      </div>
    </div>
  );
}
