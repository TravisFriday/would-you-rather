import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NewQuestion from "../pages/NewQuestion";
import LeaderBoard from "../pages/LeaderBoard";
//import Logout from "./components/Logout";

function Routes(props) {
  return (
    <div className="container">
      <Switch>
        {props.notLoggedIn ? (
          <Route exact path="/login" component={Login} />
        ) : (
          <Fragment>
            <Route path="/" component={Home} />
            <Route path="/newquestion" component={NewQuestion} />
            <Route path="/leaderboard" component={LeaderBoard} />{" "}
          </Fragment>
        )}
      </Switch>
    </div>
  );
}

export default Routes;
