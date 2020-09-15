import React from "react";
import "./spinner3.css";
export default function Spinner3() {
  const n = 5;

  return (
    <div className="spinner3" style={{ "--n": n }}>
      {[...Array(n)].map((_, i) => {
        return <div className="spinner3__dot" style={{ "--i": i }}></div>;
      })}
    </div>
  );
}
