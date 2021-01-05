import React, { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <div
      className="wrapper  full-screen-height blue-background"
      ref={ref}
    ></div>
  );
});

export default Contact;
