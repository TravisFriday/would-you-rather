import React, { PureComponent } from "react";
//import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { connect } from "react-redux";
//import PropTypes from "prop-types";
import { LoginUser } from "../actions/authedUser";
import { Form, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { handleInitialData } from "../actions/shared";

class Login extends PureComponent {
  state = {
    dataLoaded: true,
    userSelected: "",
  };
  componentDidMount() {
    //gets questions, users, and authed user
    this.props.dispatch(handleInitialData()).then(() => {
      this.setState({
        dataLoaded: false,
      });
    });
  }
  handleChange(e) {
    const userSelected = e.target.value;
    this.setState({ userSelected });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { userSelected } = this.state;

    if (userSelected) {
      dispatch(LoginUser(userSelected));
    } else {
      alert("Please select a user before.");
    }
  };

  render() {
    const { users, authedUser } = this.props;
    const { dataLoaded } = this.state;
    if (dataLoaded) {
      return <h3>Loading data...</h3>;
    }

    if (authedUser) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container" style={{ width: "50%", paddingTop: 20 }}>
        <span>Select User to log in as</span>
        <form id="Login" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <select
              className="form-control"
              id="userId"
              onChange={(e) => this.handleChange(e)}
            >
              <option></option>
              {Object.keys(users).map((user) => {
                return (
                  <option key={users[user].id} value={users[user].id}>
                    {users[user].name}
                  </option>
                );
              })}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={this.state.userSelected === ""}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser,
  };
}

export default connect(mapStateToProps)(Login);
