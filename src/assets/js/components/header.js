import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../img/logo.png";
export default function Header(props) {
  const resumeHref =
    "https://github.com/Buupu/CV/blob/743c2621b52c8abc2ebfd2562104e5fe75d8a979/Sammy%20Fattah%20-%20CV.pdf";

  return (
    <header class="content">
      <div class="main-header hide-on-responsive">
        <div class="main-header-container">
          <div class="one-flex-margin-container">
              <div class="logo-holder">
                <Link to="/">
                  <img src={Logo} width="34px" height="34px" alt="S Logo" />
                </Link>
              </div>
            <div class="main-header-cta-middle-holder">
              <nav className="main-menu-container">
                <ul>
                  <li>
                    <NavLink activeClassName="is-active" exact to="/">
                      Home
                      <span className="active-marker"></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="is-active" exact to="/about">
                      About
                      <span className="active-marker"></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="is-active" exact to="/portfolio">
                      Portfolio
                      <span className="active-marker"></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="is-active" exact to="/experience">
                      Experience
                      <span className="active-marker"></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="is-active" exact to="/contact">
                      Contact
                      <span className="active-marker"></span>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="main-header-cta-right-holder">
              <a href={resumeHref} target="_blank">
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mobile-header show-on-responsive">
        <div class="main-header-container">
          <div class="one-flex-margin-container">
            <div class="logo-container">
              <div class="logo-holder">
                <a href="">
                  <img src={Logo} width="34px" height="34px" alt="S Logo" />
                </a>
              </div>
            </div>
            <div class="mobile-burger-outer-container">
              <div class="burger-holder" id="hamburger-6">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile-menu-container">
          <div class="mobile-main-menu-holder"></div>
          <div class="mobile-menu-footer-container navy-background">
            <div class="mobile-search-holder">
              <form role="search" action="" method="get"></form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
