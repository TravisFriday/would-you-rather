import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { LoginUser } from "../actions/authedUser";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { Button } from "react-bootstrap";

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { userId: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLogin = () => {
    const { history, location } = this.props;
    const { selectedUser } = this.state;
    if (selectedUser) {
      this.props.setCurrentUser(selectedUser);
      history.push(location.pathname);
    }
  };

  handleChange(event) {
    this.setState({ userId: event.target.value });
  }

  handleSubmit(event) {
    const { userId } = this.state;
    const { authenticate, history, location } = this.props;
    if (userId) {
      authenticate(userId);
      history.push(location.state.from || "/");
    } else {
      alert("Please select a user before.");
    }
    event.preventDefault();
  }

  render() {
    const { users } = this.props;
    const { userId } = this.state;

    return (
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label htmlFor="userSelect">Select User</Label>
              <Input
                id="userSelect"
                type="select"
                name="select"
                value={userId}
                onChange={this.handleChange}
              >
                <option value="" disabled>
                  Please select
                </option>
                {Object.keys(users).map((user) => (
                  <option key={user} value={user}>
                    {users[user].name}
                  </option>
                ))}
              </Input>
            </FormGroup>
            <Button disabled={userId === ""} type="submit" value="Submit">
              Log in
            </Button>
          </Form>
        </Col>
      </Row>
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
