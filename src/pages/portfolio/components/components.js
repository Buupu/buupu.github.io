import React from "react";
import FrameContainer from "../../../components/frameContainer/frameContainer";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Inputs from "./inputs/inputs";
import Spinners from "./spinners/spinners";
import { ReactComponent as Input } from "../../../assets/input.svg";
import { ReactComponent as Spinner } from "../../../assets/spinner.svg";
import { ReactComponent as Button } from "../../../assets/button.svg";
export default function Components(props) {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <FrameContainer>
          <Link to={`${url}/inputs`}>
            <div className="Portfolio__SelectionCard">
              <Input />
              <h3>Inputs</h3>
            </div>
          </Link>
        </FrameContainer>
        <FrameContainer>
          <Link to={`${url}/spinners`}>
            <div className="Portfolio__SelectionCard">
              <Spinner />
              <h3>Spinners</h3>
            </div>
          </Link>
        </FrameContainer>
        <FrameContainer>
          <Link to={`${url}/buttons`}>
            <div className="Portfolio__SelectionCard">
              <Button />
              <h3>Buttons</h3>
            </div>
          </Link>
        </FrameContainer>
      </Route>

      <Route path={`${path}/inputs`}>
        <Inputs />
      </Route>
      <Route path={`${path}/spinners`}>
        <Spinners />
      </Route>
      <Route path={`${path}/buttons`}>
        <Components />
      </Route>
    </Switch>
  );
}
