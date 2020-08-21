import React from "react";
import "./contact.css";
import FrameContainer from "../../components/frameContainer/frameContainer";
import Input from "../../components/input/input";
import Textarea from "../../components/textarea/textarea";
export default function Contact(props) {
  return (
    <div className="Contact">
      <FrameContainer>
        <div className="Contact__FormContainer">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h2>Contact Me</h2>
            <div className="Contact__FormSplit">
              <Input value={{}} placeholder="Name"></Input>
              <Input value={{}} placeholder="Email"></Input>
            </div>
            <Input value={{}} placeholder="Subject"></Input>
            <Textarea value={{}} placeholder="Message" />
            <div className="Contact__ButtonContainer">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </FrameContainer>
    </div>
  );
}
