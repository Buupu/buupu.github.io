import React, { useRef, useEffect } from "react";
import "./footer.css";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import gsap from "gsap";
export default function Footer(props) {
  let footerRef = useRef();

  useEffect(() => {
    gsap.set(footerRef, {
      opacity: 0,
    });
    gsap.to(footerRef, {
      opacity: 1,
      delay: 0.8,
    });
  }, []);

  return (
    <div className="Footer" ref={(el) => (footerRef = el)}>
      <ul>
        <li>
          <a
            href="https://www.instagram.com/samfatz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sammy-fattah-98a77015a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Buupu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </li>
      </ul>
    </div>
  );
}
