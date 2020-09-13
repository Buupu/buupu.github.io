import React, { useEffect } from "react";
import "./spinner1.css";

for (let i = 0; i < 11; i++) {
  CSS.registerProperty({
    name: `--a${i}`,
    syntax: "<angle>",
    initialValue: "0deg",
    inherits: false,
  });
}

export default function Spinner1() {
  return <div className="spinner1"></div>;
}
