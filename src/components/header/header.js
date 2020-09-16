import React, { useEffect, useRef } from "react";
import "./header.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
export default function Header(props) {
  let headerRef = useRef();
  useEffect(() => {
    gsap.to(headerRef, {
      opacity: 1,
      delay: 0.8,
    });
  }, []);

  return (
    <div
      className="Header"
      ref={(el) => (headerRef = el)}
      style={{ opacity: 0 }}
    >
      <Logo />
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/experience">
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            <a
              href="https://github.com/Buupu/CV/raw/master/Sammy%20Fattah%20-%20CV.pdf"
              target="_blank"
            >
              Resumé
            </a>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
