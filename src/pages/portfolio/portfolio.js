import React from "react";
import "./portfolio.css";
import FrameContainer from "../../components/frameContainer/frameContainer";
import { ReactComponent as Pen } from "../../assets/pen.svg";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Components from "./components/components";
export default function Portfolio(props) {
  let { path, url } = useRouteMatch();

  return (
    <div className="Portfolio">
      <Switch>
        <Route exact path={path}>
          <FrameContainer>
            <Link to={`${url}/icons`}>
              <div className="Portfolio__SelectionCard">
                <Pen />
                <h3>Icons</h3>
              </div>
            </Link>
          </FrameContainer>
          <FrameContainer>
            <Link to={`${url}/components`}>
              <div className="Portfolio__SelectionCard">
                <Pen />
                <h3>Components</h3>
              </div>
            </Link>
          </FrameContainer>
          <FrameContainer>
            <Link to={`${url}/designs`}>
              <div className="Portfolio__SelectionCard">
                <Pen />
                <h3>Designs</h3>
              </div>
            </Link>
          </FrameContainer>
        </Route>
        <Route path={`${path}/icons`}>some icons</Route>
        <Route path={`${path}/components`}>
          <Components />
        </Route>
        <Route path={`${path}/designs`}>
          <FrameContainer>
            <Link to={`${url}/icons`}>
              <div className="Portfolio__SelectionCard">
                <Pen />
                <h3>Icons</h3>
              </div>
            </Link>
          </FrameContainer>
          <FrameContainer>
            <Link to={`${url}/components`}>
              <div className="Portfolio__SelectionCard">
                <Pen />
                <h3>Components</h3>
              </div>
            </Link>
          </FrameContainer>
          <FrameContainer>
            <Link to={`${url}/designs`}>
              <div className="Portfolio__SelectionCard">
                <Pen />
                <h3>Designs</h3>
              </div>
            </Link>
          </FrameContainer>
        </Route>
      </Switch>
    </div>
  );
}
