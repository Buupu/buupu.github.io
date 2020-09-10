import React, { useState } from "react";
import "./contact.css";
import FrameContainer from "../../components/frameContainer/frameContainer";
import Input from "../../components/input/input";
import Textarea from "../../components/textarea/textarea";
import emailjs from "emailjs-com";
import apiKeys from "../../apikeys";
import AnimatedEnvelope from "../../components/animatedEnvelope/animatedEnvelope";

export default function Contact(props) {
  const [isLoading, setIsLoading] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    showLoading();

    emailjs
      .sendForm(
        apiKeys.SERVICE_ID,
        apiKeys.TEMPLATE_ID,
        e.target,
        apiKeys.USER_ID
      )
      .then(
        (result) => {
          setIsSuccess(true);
        },
        (error) => {
          setIsError(true);
        }
      );
  };

  const showLoading = () => {
    setIsLoading(true);
  };

  return (
    <div className="Contact">
      <FrameContainer animated>
        {isLoading ? (
          <div className="Contact__LoadingContainer">
            <AnimatedEnvelope isSuccess={isSuccess} isError={isError} />
            <div className="Contact__LoadingTextContainer">
              {isError ? (
                <>
                  <h2>Oops.. Something went wrong..</h2>
                  <h3>
                    Please try again, or email me at sammyfattah@gmail.com
                  </h3>
                </>
              ) : isSuccess ? (
                <>
                  <h2 style={{ color: "#4CA450" }}>
                    <span style={{ opacity: "0.6" }}>Signed.</span>{" "}
                    <span style={{ opacity: "0.8" }}>Sealed.</span>{" "}
                    <span style={{ opacity: "1" }}>Delivered.</span>
                  </h2>
                  <h3>
                    Thank you for your message. I'll get back to you shortly
                  </h3>
                </>
              ) : (
                <>
                  <h2>Sending Sessage...</h2>
                  <h3>Just a second</h3>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="Contact__FormContainer">
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
        )}
      </FrameContainer>
    </div>
  );
}
