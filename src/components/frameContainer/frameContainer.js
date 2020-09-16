import React, { useEffect, useRef } from "react";
import "./frameContainer.css";
import { ReactComponent as TopLeftFrame } from "../../assets/topLeftFrame.svg";
import { ReactComponent as BottomRightFrame } from "../../assets/bottomRightFrame.svg";
import gsap from "gsap";
export default function FrameContainer(props) {
  let topLeftFrameRef = useRef();
  let bottomRightFrameRef = useRef();
  let contentRef = useRef();
  useEffect(() => {
    if (props.animated) {
      gsap.set(topLeftFrameRef, {
        y: contentRef.current.offsetHeight / 2,
        x: contentRef.current.offsetWidth / 2,
      });
      gsap.set(bottomRightFrameRef, {
        y: -contentRef.current.offsetHeight / 2,
        x: -contentRef.current.offsetWidth / 2,
      });
      gsap.to(topLeftFrameRef, {
        y: 0,
        x: 0,
        delay: 0.2,
      });
      gsap.to(bottomRightFrameRef, {
        y: 0,
        x: 0,
        delay: 0.2,
      });
      gsap.to(contentRef.current, {
        scale: 1,
        opacity: 1,
        delay: 0.4,
      });
    }
  }, []);
  return (
    <div className="Frame">
      <div className="Frame__TopLeft" ref={(el) => (topLeftFrameRef = el)}>
        <TopLeftFrame />
      </div>
      <div
        className="Frame__BottomRight"
        ref={(el) => (bottomRightFrameRef = el)}
      >
        <BottomRightFrame />
      </div>
      <div
        ref={contentRef}
        style={{
          opacity: props.animated ? 0 : 1,
          transform: `scale(${props.animated ? 0 : 1})`,
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
