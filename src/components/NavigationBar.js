import React, { Component, Fragment } from "react";
import { Navbar, Nav, Button, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, Redirect, withRouter } from "react-router-dom";
import { LogoutUser } from "../actions/authedUser";

//import { Link, Route } from "react-router-dom";

class NavigationBar extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(LogoutUser());
  };

  render() {
    const { name, avatarURL } = this.props;
    const { authedUser } = this.props;

    return (
      <Navbar bg="dark" variant="dark">
        {authedUser && (
          <Fragment>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/newquestion">New Question</Nav.Link>
              <Nav.Link href="/leaderboard">LeaderBoard</Nav.Link>
            </Nav>
            <Nav className="mr-auto">
              <Navbar.Brand href="home">Would You Rather...</Navbar.Brand>
            </Nav>
            <Nav>
              <Nav.Link>Hello, {name ? name : "Sarah Edo"} </Nav.Link>
              <Image src={avatarURL} roundedCircle style={styles.image}></Image>
              <Link to="/login">
                <Button type="submit" onClick={(e) => this.handleSubmit(e)}>
                  Logout
                </Button>
              </Link>
            </Nav>
          </Fragment>
        )}
      </Navbar>
    );
  }
}

//styling component
const styles = {
  image: {
    maxHeight: 30,
    width: "auto",
    verticalAlign: "middle",
    paddingLeft: 10,
    paddingRight: 10,
  },
};

function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser];
  return {
    user,
    authedUser,
  };
}

export default connect(mapStateToProps)(NavigationBar);
//export default withRouter(connect(mapStateToProps, null)(NavBar))
