import React, { forwardRef } from "react";

const Portfolio = forwardRef((props, ref) => {
  return (
    <div
      className="wrapper  full-screen-height  red-background"
      ref={ref}
    ></div>
  );
});

export default Portfolio;
