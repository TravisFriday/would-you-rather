import React, { Component /*Fragment*/ } from "react";
import Home from "./pages/Home";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading";
// import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
//import { handleReceiveLoginUser } from "./actions/authedUser";
import { handleInitialData } from "./actions/shared";
//import { handleReceiveQuestions, receiveQuestions } from "./actions/questions";

class App extends Component {
  componentDidMount() {
    //gets questions, users, and authed user
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <NavigationBar />
        <LoadingBar />
        <Home />
      </div>
      // <Router>
      //   <Fragment>
      //     <LoadingBar />
      //     <div className="container">
      //       <NavigationBar />
      //       {this.props.loading === true ? null : (
      //         <div>
      //           <Route path="/" exact component={Home} />
      //           {/* <Route />
      //           <Route /> */}
      //         </div>
      //       )}
      //     </div>
      //   </Fragment>
      // </Router>
    );
  }
}

function mapStateToProps({ login }) {
  return {};
}

export default connect(mapStateToProps)(App);
