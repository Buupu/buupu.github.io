import React, { useEffect, useRef } from "react";
import "./spinner1.css";
import gsap from "gsap";
export default function Spinner1(props) {
  let circleRefs = [];
  let containerRef = useRef(null);

  useEffect(() => {
    if (props.variety === 1) {
      circleRefs.forEach((ref, index) => {
        let tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 0.5,
          delay: 0.2 * index,
        });
        tl.to(ref, {
          opacity: 0.3,
          duration: 0.6,
        });
        tl.to(ref, {
          opacity: 1,
          duration: 0.4,
        });
      });
    }
  }, []);
  useEffect(() => {
    if (props.variety === 2) {
      circleRefs.forEach((ref, index) => {
        let tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 0.5,
          delay: 0.2 * index,
        });
        tl.to(ref, {
          scale: 0.3,
          duration: 0.6,
        });
        tl.to(ref, {
          scale: 1,
          duration: 0.4,
        });
      });
    }
  }, []);
  useEffect(() => {
    if (props.variety === 3) {
      circleRefs.forEach((ref, index) => {
        let tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 1,
          delay: 0.1 * index,
        });
        tl.to(ref, {
          scale: 0,
          duration: 0.2,
        });
        tl.to(ref, {
          scale: 1,
          duration: 0.2,
          delay: 0.4,
        });
      });
    }
  }, []);
  useEffect(() => {
    if (props.variety === 4) {
      circleRefs.forEach((ref, index) => {
        let tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 2,
          delay: (index % 2) * 0.4,
        });
        tl.to(ref, {
          scale: 0.3,
          duration: 0.6,
        });
        tl.to(ref, {
          scale: 1,
          duration: 0.4,
        });
      });

      let tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 2.4,
        delay: 1.4,
      });
      tl.to(containerRef, {
        rotation: 180,
        duration: 0.6,
      });
    }
  }, []);
  useEffect(() => {
    if (props.variety === 5) {
      circleRefs.forEach((ref, index) => {
        let tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 2,
          delay: (index % 2) * 0.4,
        });
        tl.to(ref, {
          scale: 0.3,
          duration: 0.6,
        });
        tl.to(ref, {
          scale: 1,
          duration: 0.4,
        });
      });

      let tl = gsap.timeline({
        repeat: -1,
      });
      tl.to(containerRef, {
        rotation: 360,
        duration: 2.4,
      });
    }
  }, []);
  return (
    <div className="spinner1__container" ref={(el) => (containerRef = el)}>
      {[...Array(8)].map((_, i) => {
        return (
          <div
            key={"spinner1Circle" + i}
            className="spinner1__circle"
            ref={(el) => circleRefs.push(el)}
          ></div>
        );
      })}
    </div>
  );
}
