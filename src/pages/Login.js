import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { LoginUser } from "../actions/authedUser";
import { Container } from "react-bootstrap";

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { userId: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ userId: event.target.value });
  }

  handleSubmit(event) {
    const { userId } = this.state;
    const { authenticate } = this.props;
    if (userId) {
      authenticate(userId);
    } else {
      alert("Please select a user before.");
    }
    event.preventDefault();
  }

  render() {
    const { users } = this.props;
    return (
      <Container>
        <div className="container" style={{ width: "50%", paddingTop: 20 }}>
          <span>Select User to log in as</span>
          <form id="Login" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <select
                className="form-control"
                id="userId"
                onChange={(e) => this.handleChange(e)}
              >
                <option value="Please select" disabled>
                  Please select
                </option>
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
      </Container>
    );
  }
}

Login.propTypes = {
  users: PropTypes.object.isRequired,
  authenticate: PropTypes.func.isRequired,
};

function mapStateToProps({ users }) {
  return {
    users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authenticate: (id) => {
      dispatch(LoginUser(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
