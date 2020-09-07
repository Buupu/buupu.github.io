import React from "react";
import "./contact.css";
import FrameContainer from "../../components/frameContainer/frameContainer";
import Input from "../../components/input/input";
import Textarea from "../../components/textarea/textarea";
import emailjs from "emailjs-com";
import apiKeys from "../../apikeys";
export default function Contact(props) {
  const onSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs
      .sendForm(
        apiKeys.SERVICE_ID,
        apiKeys.TEMPLATE_ID,
        e.target,
        apiKeys.USER_ID
      )
      .then(
        (result) => {
          alert("Message Sent, I'll get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occured, Plese try again", error.text);
        }
      );
  };
  return (
    <div className="Contact">
      <FrameContainer>
        <div className="Contact__FormContainer" animated>
          <form onSubmit={onSubmit}>
            <h2>Contact Me</h2>
            <div className="Contact__FormSplit">
              <Input value={{}} placeholder="Name" name="name"></Input>
              <Input value={{}} placeholder="Email" name="email"></Input>
            </div>
            <Input value={{}} placeholder="Subject" name="subject"></Input>
            <Textarea value={{}} placeholder="Message" name="message" />
            <div className="Contact__ButtonContainer">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </FrameContainer>
    </div>
  );
}
