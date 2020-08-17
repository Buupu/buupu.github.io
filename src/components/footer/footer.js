import React from "react";
import "./footer.css";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
export default function Footer(props) {
  return (
    <div className="Footer">
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
