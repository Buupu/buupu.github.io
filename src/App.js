import React, { useRef } from "react";

/*--------- Page Imports ----------*/
import Home from "./assets/js/pages/home";
import Contact from "./assets/js/pages/contact";
import Experience from "./assets/js/pages/experience";
import Portfolio from "./assets/js/pages/portfolio";
import About from "./assets/js/pages/about";

/*--------- Component Imports ----------*/
import Header from "./assets/js/components/header";

function App() {
  /*--------- Section Refs ----------*/
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="wrapper">
      <Header
        sections={[
          { title: "Home", ref: homeRef },
          { title: "About", ref: aboutRef },
          { title: "Experience", ref: experienceRef },
          { title: "Portfolio", ref: portfolioRef },
          { title: "Contact", ref: contactRef },
        ]}
      />
      <Home ref={homeRef} portfolioRef={portfolioRef} />
      <About ref={aboutRef} />
      <Experience ref={experienceRef} />
      <Portfolio ref={portfolioRef} />
      <Contact ref={contactRef} />
      {/* footer */}
    </div>
  );
}
export default App;
