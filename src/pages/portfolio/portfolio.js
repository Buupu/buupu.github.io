import React from "react";
import "./portfolio.css";
import FrameContainer from "../../components/frameContainer/frameContainer";
import { ReactComponent as Pen } from "../../assets/pen.svg";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Components from "./components/components";
import Projects from "./projects/projects";
export default function Portfolio(props) {
  let { path, url } = useRouteMatch();

  return (
    <div className="Portfolio">
      <Switch>
        <Route exact path={path}>
          <FrameContainer animated>
            <Link to={`${url}/icons`}>
              <div className="Portfolio__SelectionCard">
                <Pen />
                <h2>Icons</h2>
              </div>
            </Link>
          </FrameContainer>
          <FrameContainer animated>
            <Link to={`${url}/components`}>
              <div className="Portfolio__SelectionCard">
                <Pen />
                <h2>Components</h2>
              </div>
            </Link>
          </FrameContainer>
          <FrameContainer animated>
            <Link to={`${url}/projects`}>
              <div className="Portfolio__SelectionCard">
                <Pen />
                <h2>Projects</h2>
              </div>
            </Link>
          </FrameContainer>
        </Route>
        <Route path={`${path}/icons`}>some icons</Route>
        <Route path={`${path}/components`}>
          <Components />
        </Route>
        <Route path={`${path}/projects`}>
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}
