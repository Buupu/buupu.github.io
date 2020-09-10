import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap/all";
import { ReactComponent as Envelope } from "../../assets/envelope.svg";
export default function AnimatedEnvelope(props) {
  let envelopeRef = useRef();
  const [finished, setFinished] = useState(false);

  let tl = useRef();
  useEffect(() => {
    tl.current = gsap.timeline({
      repeat: -1,
      onComplete: () => setFinished(true),
    });
    tl.current.set(envelopeRef, {
      x: -100,
      scale: 0.8,
      opacity: 0,
    });
    tl.current.to(envelopeRef, {
      duration: 1.5,
      x: 100,
      ease: "Ease.easeInOut",
    });
    tl.current.to(
      envelopeRef,
      {
        duration: 0.5,
        scale: 1,
        opacity: 1,
        ease: "Ease.easeIn",
      },
      "-=1.5"
    );
    tl.current.to(
      envelopeRef,
      {
        duration: 0.5,
        scale: 0.8,
        opacity: 0,
        ease: "Ease.easeOut",
      },
      "-=0.5"
    );
  }, []);

  useEffect(() => {
    if (finished) {
      tl.current = gsap.timeline({});
      tl.current.set(envelopeRef, {
        x: -100,
        scale: 0.8,
        opacity: 0,
      });
      tl.current.to(envelopeRef, {
        duration: 0.75,
        x: 0,
        ease: "Ease.easeIn",
      });
      tl.current.to(
        envelopeRef,
        {
          duration: 0.5,
          scale: 1,
          opacity: 1,
          ease: "Ease.easeIn",
        },
        "-=0.75"
      );
      if (props.isSuccess) {
        tl.current.to(envelopeRef, {
          fill: "#70BD73",
        });
      } else if (props.isError) {
        tl.current.to(envelopeRef, {
          fill: "#C24371",
        });
      }
    }
  }, [finished]);

  useEffect(() => {
    if (props.isSuccess || props.isError) {
      tl.current.repeat(1);
    }
  }, [props.isSuccess, props.isError]);
  return (
    <>
      <Envelope ref={(el) => (envelopeRef = el)} />
    </>
  );
}
