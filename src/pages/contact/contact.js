import React, { useState } from "react";
import "./contact.css";
import FrameContainer from "../../components/frameContainer/frameContainer";
import Input from "../../components/input/input";
import Textarea from "../../components/textarea/textarea";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import apiKeys from "../../apikeys";
import AnimatedEnvelope from "../../components/animatedEnvelope/animatedEnvelope";

export default function Contact(props) {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = (data) => {
    showLoading();
    try {
      emailjs
        .send(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, data, apiKeys.USER_ID)
        .then(
          (result) => {
            setIsSuccess(true);
          },
          (error) => {
            setIsError(true);
          }
        );
    } catch {
      setIsError(true);
    }
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
                    Thank you for your message. I'll get back to you shortly.
                  </h3>
                </>
              ) : (
                <>
                  <h2>Sending Message...</h2>
                  <h3>Just a second</h3>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="Contact__FormContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2>Contact Me</h2>
              <div className="Contact__FormSplit">
                <Input
                  placeholder="Name"
                  name="name"
                  register={register({
                    required: "Required",
                  })}
                  error={errors.name}
                ></Input>
                <Input
                  placeholder="Email"
                  name="email"
                  register={register({
                    required: "Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={errors.email}
                ></Input>
              </div>
              <Input
                placeholder="Subject"
                name="subject"
                register={register({
                  required: "Required",
                })}
                error={errors.subject}
              ></Input>
              <Textarea
                placeholder="Message"
                name="message"
                register={register({
                  required: "Required",
                })}
                error={errors.message}
              />
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
