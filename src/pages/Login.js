import React, { PureComponent } from "react";
//import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { LoginUser } from "../actions/authedUser";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Login extends PureComponent {
  //   constructor(props) {
  //     super(props);
  //     this.state = { userId: "" };
  //     this.handleChangeUser = this.handleChangeUser.bind(this);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  //   }

  //   handleChangeUser(event) {
  //     this.setState({ userId: event.target.value });
  //   }

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
    console.log(users);
    // const { userId } = this.state;
    return (
      <div className="container" style={{ width: "50%", paddingTop: 20 }}>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select User</Form.Label>
            <Form.Control as="select">
              {users === null
                ? users.map((user) => <option>{user.name}</option>)
                : null}
              {/* <option>Tyler</option>
              <option>Sarah</option>
              <option>John</option> */}
            </Form.Control>
          </Form.Group>

          <Link to="/">
            <Button
              variant="primary"
              type="submit"
              onSubmit={this.handleSubmit}
            >
              Submit
            </Button>
          </Link>
        </Form>
      </div>
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
