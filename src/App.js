import React, { Component, Fragment } from "react";
import NavigationBar from "./components/NavigationBar";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading-bar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";
import { handleInitialData } from "./actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar />
          <div className="app-container">
            <NavigationBar />
            <Routes />
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}
export default connect()(App);
