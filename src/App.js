import React, { Component, Fragment } from "react";
import NavigationBar from "./components/NavigationBar";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Routes from "./components/Routes";

//import { handleReceiveQuestions, receiveQuestions } from "./actions/questions";

class App extends Component {
  render() {
    const { notLoggedIn } = this.props;
    return (
      // <div>
      //   <NavigationBar />
      //   <div className="container" style={{ width: "50%", paddingTop: 20 }}>
      //     <Login />
      //   </div>
      // </div>
      <BrowserRouter>
        <Fragment>
          <LoadingBar />
          <div className="app-container">
            <NavigationBar />
            <Routes notLoggedIn={notLoggedIn} />
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ authedUser }) {
  console.log("authedUser :", authedUser);
  return {
    notLoggedIn: authedUser === null,
  };
}
export default connect(mapStateToProps)(App);
