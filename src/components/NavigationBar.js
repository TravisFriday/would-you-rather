import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

//import { Link, Route } from "react-router-dom";

class NavigationBar extends Component {
  render() {
    const { user, authedUser } = this.props;
    console.log("this user is currently logged in: ", authedUser);
    return (
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/newquestion">New Question</Nav.Link>
          <Nav.Link href="/leaderboard">LeaderBoard</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Navbar.Brand href="home">Would You Rather...</Navbar.Brand>
        </Nav>
        <Nav>
          <Nav.Link active>
            Hello, {authedUser ? authedUser : "Sarah Edo"}{" "}
          </Nav.Link>
          <Link to="/login">
            <Button type="submit">Logout</Button>
          </Link>
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
