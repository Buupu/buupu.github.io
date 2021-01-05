import React, { useEffect, useState, useRef } from "react";
import Logo from "../../img/logo.png";
export default function Header(props) {
  const resumeHref =
    "https://github.com/Buupu/CV/blob/743c2621b52c8abc2ebfd2562104e5fe75d8a979/Sammy%20Fattah%20-%20CV.pdf";

  const scrollIntoView = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const prevScrollY = useRef(0);
  const [atTop, setAtTop] = useState(true);
  const [goingUp, setGoingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setAtTop(currentScrollY !== 0 ? false : true);
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      } else if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp, props.sections]);

  const getClasses = () => {
    let classes = "main-header hide-on-responsive ";
    classes += !goingUp ? "main-header-hidden" : "";
    classes += atTop ? "main-header-top" : "";
    return classes;
  };

  return (
    <header class="content">
      <div class={getClasses()}>
        <div class="main-header-container">
          <div class="one-flex-margin-container">
            <div class="logo-holder">
              <img src={Logo} width="34px" height="34px" alt="S Logo" />
            </div>
            <div class="main-header-cta-middle-holder">
              <nav className="main-menu-container">
                <ul>
                  {props.sections.map((section, index) => {
                    return (
                      <li onClick={() => scrollIntoView(section.ref)}>
                        <a>{section.title}</a>
                      </li>
                    );
                  })}
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
