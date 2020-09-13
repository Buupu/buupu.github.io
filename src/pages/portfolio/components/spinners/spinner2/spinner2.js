import React from "react";
import "./spinner2.css";
export default function Spinner2() {
  let r = 500;
  let w = 8 * r,
    h = 0.5 * w,
    x = -0.5 * w,
    y = -0.5 * h;
  let c = Math.round(r / Math.SQRT2);
  let l = Math.ceil((3 * Math.PI + 4) * r);
  var d = ~~(Math.PI * r);

  return (
    <svg width="250" viewBox={[x, y, w, h].join(" ")} className="spinner2">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#C1255D" />
          <stop offset="100%" stop-color="#FFAC39" />
        </linearGradient>
      </defs>
      <path
        className="inf"
        d={`M${c}${-c}A${r} ${r} 0 1 1 ${c} ${c}L${-c}${-c}A${r} ${r} 0 1 0${-c} ${c}z`}
        strokeDasharray={`${d} ${l - d}`}
        strokeDashoffset={`${l}px`}
        stroke="url(#gradient)"
      ></path>
    </svg>
  );
}
