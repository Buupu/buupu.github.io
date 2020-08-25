import React, { useState } from "react";
import FrameContainer from "../../../../components/frameContainer/frameContainer";
import Input1 from "./input1/input1";
const INPUT_STATES = ["CLEAR", "SUCCESS", "ERROR"];
export default function Inputs(props) {
  const [componentIndex, setComponentIndex] = useState(0);
  const [inputState, setInputState] = useState(INPUT_STATES[0]);
  return (
    <FrameContainer>
      <Input1 state={inputState} />
      <button
        onClick={() => {
          setInputState(INPUT_STATES[1]);
        }}
      >
        show success
      </button>
      <button
        onClick={() => {
          setInputState(INPUT_STATES[2]);
        }}
      >
        show error
      </button>
      <button
        onClick={() => {
          setInputState(INPUT_STATES[0]);
        }}
      >
        clear
      </button>
    </FrameContainer>
  );
}
