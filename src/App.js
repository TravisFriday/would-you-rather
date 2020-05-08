import React, { Component, Fragment } from "react";
import Home from "./pages/Home";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Login from "./pages/Login";
import { handleInitialData } from "./actions/shared";
import NewQuestion from "./pages/NewQuestion";
import LeaderBoard from "./pages/LeaderBoard";
//import { handleReceiveQuestions, receiveQuestions } from "./actions/questions";

class App extends Component {
  state = {
    isReady: false,
  };
  componentDidMount() {
    //gets questions, users, and authed user
    this.props.handleInitialData();
    console.log("it is completed");
  }

  render() {
    if (this.state.isReady === true) {
      const { notLoggedIn } = this.props;
      console.log("the props are: ", this.props);
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
            {notLoggedIn ? null : <NavigationBar />}

            <div className="app-container">
              <Switch>
                {/* {notLoggedIn ? ( */}
                <Route exact path="/login" component={Login} />
                {/* ) : ( */}
                <Route path="/" component={Home} />
                {/* )} */}
                <Route path="/newquestion" component={NewQuestion} />
                <Route path="/leaderboard" component={LeaderBoard} />
              </Switch>
            </div>
          </Fragment>
        </BrowserRouter>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

function mapStateToProps({ authedUser }) {
  return {
    notLoggedIn: authedUser === null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => {
      dispatch(handleInitialData());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
