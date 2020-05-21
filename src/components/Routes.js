import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../pages/Home";
import LeaderBoard from "../pages/LeaderBoard";
import Login from "../pages/Login";
import NewQuestion from "../pages/NewQuestion";
import QuestionInfo from "../pages/QuestionInfo";
import ErrorPage from "../pages/ErrorPage";
import Logout from "../pages/Logout";
import PrivateRoute from "./PrivateRoute";

function Routes(props) {
  return (
    <div className="container">
      {/* <Switch> */}
      <Fragment>
        <Switch>
          <Route path="/login" exact component={Login} />
          <PrivateRoute
            isAuthenticated={!props.notLoggedIn}
            path="/"
            exact
            component={Home}
          />
          <PrivateRoute
            isAuthenticated={!props.notLoggedIn}
            path="/leaderboard"
            exact
            component={LeaderBoard}
          />
          <PrivateRoute
            isAuthenticated={!props.notLoggedIn}
            path="/add"
            component={NewQuestion}
          />
          <PrivateRoute
            isAuthenticated={!props.notLoggedIn}
            path="/question/:id"
            component={QuestionInfo}
          />
          <Route exact path="/logout" component={Logout} />
          <Route component={ErrorPage} />
        </Switch>
      </Fragment>
      {/* </Switch> */}
    </div>
  );
}

Routes.propTypes = { notLoggedIn: PropTypes.any };

function mapStateToProps({ authedUser, users }) {
  return {
    notLoggedIn: authedUser === null,
  };
}

export default connect(mapStateToProps)(Routes);
