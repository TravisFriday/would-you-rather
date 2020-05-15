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

function Routes(props) {
  return (
    <div className="container">
      <Switch>
        {props.notLoggedIn ? (
          <Route path="/" exact component={Login} />
        ) : (
          <Fragment>
            <Route path="/" exact component={Home} />
            <Route path="/leaderboard" exact component={LeaderBoard} />
            <Route path="/newquestion" component={NewQuestion} />
            <Route path="/question/:id" component={QuestionInfo} />
            <Route exact path="/logout" component={Logout} />
          </Fragment>
        )}
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

Routes.propTypes = { notLoggedIn: PropTypes.any };

function mapStateToProps({ authedUser }) {
  return {
    notLoggedIn: authedUser === null,
  };
}

export default connect(mapStateToProps)(Routes);
