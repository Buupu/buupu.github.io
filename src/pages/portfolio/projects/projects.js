import React from "react";
import FrameContainer from "../../../components/frameContainer/frameContainer";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import VS from "../../../assets/vs.JPG";
import "./projects.css";
import Buu from "./buu/buu";
export default function Projects(props) {
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <FrameContainer>
          <Link to={`${url}/buu`}>
            <div className="Projects__SelectionCard">
              <div className="Projects__SelectionCardImgContainer">
                <img src={VS} alt="Sammy" />
              </div>
              <h2>Buu</h2>
              <h3>A dark mode theme for Visual Studio Code</h3>
            </div>
          </Link>
        </FrameContainer>
        <FrameContainer>
          <Link to={`${url}/buu`}>
            <div className="Projects__SelectionCard">
              <div className="Projects__SelectionCardImgContainer">
                <img src={VS} alt="Sammy" />
              </div>
              <h2>Buu</h2>
              <h3>A dark mode theme for Visual Studio Code</h3>
            </div>
          </Link>
        </FrameContainer>
        <FrameContainer>
          <Link to={`${url}/buu`}>
            <div className="Projects__SelectionCard">
              <div className="Projects__SelectionCardImgContainer">
                <img src={VS} alt="VW Code" />
              </div>
              <h2>Buu</h2>
              <h3>A dark mode theme for Visual Studio Code</h3>
            </div>
          </Link>
        </FrameContainer>
      </Route>
      <Route path={`${path}/buu`}>
        <Buu />
      </Route>
    </Switch>
  );
}
