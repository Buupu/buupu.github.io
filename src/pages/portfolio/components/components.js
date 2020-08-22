import React from "react";
import FrameContainer from "../../../components/frameContainer/frameContainer";
import { ReactComponent as Pen } from "../../../assets/pen.svg";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Inputs from "./inputs/inputs";
export default function Components(props) {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <FrameContainer>
          <Link to={`${url}/inputs`}>
            <div className="Portfolio__SelectionCard">
              <Pen />
              <h3>Inputs</h3>
            </div>
          </Link>
        </FrameContainer>
        <FrameContainer>
          <Link to={`${url}/spinners`}>
            <div className="Portfolio__SelectionCard">
              <Pen />
              <h3>Spinners</h3>
            </div>
          </Link>
        </FrameContainer>
        <FrameContainer>
          <Link to={`${url}/buttons`}>
            <div className="Portfolio__SelectionCard">
              <Pen />
              <h3>Buttons</h3>
            </div>
          </Link>
        </FrameContainer>
      </Route>

      <Route path={`${path}/inputs`}>
        <Inputs />
      </Route>
      <Route path={`${path}/spinners`}>
        <Components />
      </Route>
      <Route path={`${path}/buttons`}>
        <Components />
      </Route>
    </Switch>
  );
}
