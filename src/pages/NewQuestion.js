import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Card, Form, FormGroup, Row } from "react-bootstrap";
import { Button } from "reactstrap";
import { handleAddQuestion } from "../actions/shared";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    redirect: false,
  };

  handleOptionOneChange = (event) => {
    event.preventDefault();
    this.setState({
      optionOne: event.target.value,
    });
  };

  handleOptionTwoChange = (event) => {
    event.preventDefault();
    this.setState({
      optionTwo: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { optionOne, optionTwo } = this.state;
    this.props.addQuestion(optionOne, optionTwo);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    const { optionOne, optionTwo } = this.state;
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title>Would You Rather</Card.Title>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Form.Label for="optionOne">Option One</Form.Label>
                  <Form.Control
                    type="text"
                    name="optionOne"
                    value={optionOne}
                    onChange={this.handleOptionOneChange}
                    placeholder="Option One"
                  />
                </FormGroup>
                <FormGroup>
                  <Form.Label for="optionTwo">Option Two</Form.Label>
                  <Form.Control
                    type="text"
                    name="optionTwo"
                    value={optionTwo}
                    onChange={this.handleOptionTwoChange}
                    placeholder="Option Two"
                  />
                </FormGroup>
                <Button disabled={optionOne === "" || optionTwo === ""}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addQuestion: (optionOne, optionTwo) => {
      dispatch(handleAddQuestion(optionOne, optionTwo));
    },
  };
}

export default connect(null, mapDispatchToProps)(NewQuestion);
