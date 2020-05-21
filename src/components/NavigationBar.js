import React, { PureComponent, Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { LogoutUser } from "../actions/authedUser";
import User from "./User";

class NavigationBar extends PureComponent {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(LogoutUser());
  };

  render() {
    const { authedUser, users } = this.props;
    // if (authedUser === null && users) {
    //   return <Link to="/login">Login</Link>;
    // }

    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          Would You Rather...
        </Navbar.Brand>
        {authedUser && (
          <Fragment>
            <Navbar.Toggle onClick={this.toggle} />
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/add">
                New Question
              </Nav.Link>
              <Nav.Link as={Link} to="/leaderboard">
                LeaderBoard
              </Nav.Link>
            </Nav>
            <Nav className="mr-auto"></Nav>
            <Nav>
              <User id={authedUser} />
              <Nav.Link as={Link} to="/logout">
                Logout
              </Nav.Link>
            </Nav>
          </Fragment>
        )}
      </Navbar>
    );
  }
}

//styling component

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default withRouter(connect(mapStateToProps, null)(NavigationBar));
