import React, { useEffect, useRef } from "react";
import "./input1.css";
import gsap, { Sine } from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
export default function Input1(props) {
  let successRef = useRef(null);
  let errorRef = useRef(null);
  let inputRef = useRef(null);
  let crossRef = useRef(null);
  let svgRef = useRef(null);
  let labelRef = useRef(null);
  gsap.registerPlugin(MorphSVGPlugin);
  let tl = useRef();
  let lineRef = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline();

    tl.current.set([successRef, inputRef, svgRef, errorRef, labelRef], {
      clearProps: "all",
    });

    tl.current.to(svgRef, {
      morphSVG: svgRef,
      ease: Sine.easeInOut,
    });
  }, []);

  const clear = () => {
    tl.current.set([successRef, inputRef, svgRef, errorRef, labelRef], {
      clearProps: "all",
    });
    tl.current.to(svgRef, {
      morphSVG: svgRef,
      ease: Sine.easeInOut,
    });
  };

  const success = () => {
    tl.current.set([successRef, inputRef, svgRef, errorRef, labelRef], {
      clearProps: "all",
    });
    tl.current.to(successRef, {
      opacity: 1,
      rotateY: 180,
      duration: 0.8,
    });
    tl.current.to(
      svgRef,
      {
        morphSVG: lineRef,
        ease: Sine.easeInOut,
        duration: 0.7,
      },
      "-=0.7"
    );
    tl.current.to(
      svgRef,
      {
        fill: "white",
        duration: 0.8,
      },
      "-=0.7"
    );
    tl.current.to(
      inputRef,
      {
        borderColor: "green",
        duration: -0.8,
      },
      "-=0.7"
    );
  };

  const error = () => {
    tl.current.set([successRef, inputRef, svgRef, errorRef, labelRef], {
      clearProps: "all",
    });
    tl.current.to(errorRef, {
      opacity: 1,
      rotateY: 180,
      duration: 1,
    });
    tl.current.to(
      svgRef,
      0.5,
      {
        morphSVG: crossRef,
        ease: Sine.easeInOut,
        delay: 0,
      },
      "-=1"
    );
    tl.current.to(
      svgRef,
      {
        fill: "white",
        duration: 1,
      },
      "-=1"
    );
    tl.current.to(
      inputRef,
      {
        borderColor: "red",
        duration: 1,
      },
      "-=1.5"
    );
  };

  useEffect(() => {
    if (props.state === "ERROR") {
      error();
    } else if (props.state === "SUCCESS") {
      success();
    } else {
      clear();
    }
  }, [props.state]);

  return (
    <div className="input1__container">
      <div className="input1__shadow"></div>
      <input
        className="input1"
        placeholder=" "
        ref={(el) => (inputRef = el)}
      ></input>
      <div className="input1__focusWrapper">
        <span className="input1__label" ref={(el) => (labelRef = el)}>
          Email
        </span>
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          xmlns="http://www.w3.org/2000/svg"
          className="input1__envelope"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            ref={(el) => (svgRef = el)}
            d="M2 4C0.895431 4 0 4.89543 0 6V14C0 15.1046 0.89543 16 2 16H16C17.1046 16 18 15.1046 18 14V6C18 4.89543 17.1046 4 16 4H2ZM2.3254 5.62037C2.11573 5.44066 1.80008 5.46494 1.62037 5.6746C1.44066 5.88427 1.46494 6.19992 1.6746 6.37963L8.6746 12.3796C8.86185 12.5401 9.13815 12.5401 9.3254 12.3796L16.3254 6.37963C16.5351 6.19992 16.5593 5.88427 16.3796 5.6746C16.1999 5.46494 15.8843 5.44066 15.6746 5.62037L9 11.3415L2.3254 5.62037Z"
          />
          <path
            ref={(el) => (lineRef = el)}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.3518 3.46835C14.6232 3.16942 14.9896 3.00118 15.3717 3.00001C15.7539 2.99883 16.1211 3.16482 16.394 3.46209C16.6669 3.75936 16.8235 4.16401 16.8301 4.58858C16.8366 5.01314 16.6924 5.42349 16.4288 5.73092L8.68698 16.4835C8.55392 16.6427 8.39333 16.7705 8.21481 16.8592C8.03629 16.9479 7.8435 16.9957 7.64798 16.9997C7.45245 17.0037 7.25821 16.9639 7.07685 16.8826C6.8955 16.8013 6.73076 16.6802 6.59249 16.5266L1.46294 10.8249C1.32003 10.677 1.20541 10.4985 1.12592 10.3003C1.04642 10.1021 1.00367 9.88805 1.00023 9.67106C0.996781 9.45406 1.03271 9.23851 1.10586 9.03728C1.17901 8.83604 1.2879 8.65324 1.42602 8.49978C1.56413 8.34632 1.72865 8.22533 1.90977 8.14405C2.09088 8.06277 2.28487 8.02285 2.48016 8.02668C2.67546 8.03051 2.86806 8.07801 3.04648 8.16634C3.2249 8.25467 3.38548 8.38202 3.51864 8.5408L7.57962 13.0508L14.3149 3.51576C14.327 3.49907 14.3399 3.48323 14.3537 3.46835H14.3518Z"
            fill="none"
          />
          <path
            ref={(el) => (crossRef = el)}
            d="M3.6 2.16363L9 8.16363L14.4 2.18181C14.5063 2.06161 14.6339 1.96723 14.7748 1.90464C14.9156 1.84205 15.0666 1.8126 15.2182 1.81817C15.5157 1.83956 15.796 1.98052 16.0067 2.21473C16.2175 2.44893 16.3444 2.76038 16.3636 3.0909C16.3651 3.25341 16.3369 3.41457 16.2806 3.56459C16.2244 3.71461 16.1413 3.85037 16.0364 3.96363L10.62 9.99999L16.0364 16.0364C16.2491 16.2654 16.3669 16.5818 16.3636 16.9091C16.3444 17.2396 16.2175 17.5511 16.0067 17.7853C15.796 18.0195 15.5157 18.1604 15.2182 18.1818C15.0666 18.1874 14.9156 18.1579 14.7748 18.0953C14.6339 18.0328 14.5063 17.9384 14.4 17.8182L9 11.8364L3.61637 17.8182C3.51005 17.9384 3.38244 18.0328 3.2416 18.0953C3.10077 18.1579 2.94978 18.1874 2.79819 18.1818C2.49516 18.1643 2.20873 18.0227 1.99417 17.7843C1.77961 17.5459 1.65214 17.2276 1.63637 16.8909C1.63489 16.7284 1.66313 16.5672 1.71939 16.4172C1.77565 16.2672 1.85874 16.1314 1.96364 16.0182L7.38 9.99999L1.94728 3.96363C1.84533 3.84884 1.76526 3.71239 1.71184 3.56244C1.65842 3.41249 1.63275 3.25212 1.63637 3.0909C1.65562 2.76038 1.78248 2.44893 1.99327 2.21473C2.20405 1.98052 2.48435 1.83956 2.78182 1.81817C2.93224 1.81024 3.08252 1.83681 3.22328 1.89625C3.36405 1.95568 3.49229 2.0467 3.6 2.16363V2.16363Z"
            fill="none"
          />
        </svg>
      </div>
      <div
        className="input1__card input1__card--success"
        ref={(el) => (successRef = el)}
      ></div>
      <div
        className="input1__card input1__card--error"
        ref={(el) => (errorRef = el)}
      ></div>
    </div>
  );
}
