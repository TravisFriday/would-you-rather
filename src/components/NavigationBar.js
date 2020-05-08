import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { connect } from "react-redux";
//import { Link, Route } from "react-router-dom";

class NavigationBar extends Component {
  handleLogout() {}
  render() {
    const { user, authedUser } = this.props;

    return (
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="newquestion">New Question</Nav.Link>
          <Nav.Link href="leaderboard">LeaderBoard</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Navbar.Brand href="home">Would You Rather...</Navbar.Brand>
        </Nav>
        <Nav>
          <Nav.Link active>Hello, {user ? user : "Sarah Edo"} </Nav.Link>
          <Button type="submit" onClick={this.handleLogout()}>
            Logout
          </Button>
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser];

  return {
    authedUser,
    user,
  };
}

export default connect(mapStateToProps)(NavigationBar);
