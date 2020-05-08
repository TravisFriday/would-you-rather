import React, { Component } from "react";
import { formatQuestion } from "../utils/helper";
import { connect } from "react-redux";
import { ListGroup, Card, Button, Image } from "react-bootstrap";
//import { Link, withRouter } from "react-router-dom";

class Questions extends Component {
  render() {
    const { question } = this.props;

    console.log("here is the question", question);
    if (question === null) {
      return <p>This question does not exist</p>;
    }
    const { id, name, avatar, optionOne, optionTwo } = question;

    return (
      <ListGroup.Item key={id} style={{ border: "none" }}>
        <Card style={{ width: "40rem", margin: "auto" }}>
          <Image
            src="https://tylermcginnis.com/would-you-rather/sarah.jpg"
            roundedCircle
            style={{ width: 50, margin: "auto", marginTop: "10px" }}
          />
          <Card.Body>
            <Card.Title>Would you rather ...</Card.Title>
            <Card.Text style={{ textAlign: "left" }}>a....</Card.Text>
            <Button variant="primary">View Poll</Button>
          </Card.Body>
        </Card>
      </ListGroup.Item>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  console.log("check this id out", users);
  const question = questions[id];
  //console.log("The Logged in user is:", login.loggedInUser.id);
  return {
    users,
    question: question
      ? formatQuestion(
          users[question.author],
          question,
          authedUser.loggedInUser.id
        )
      : null,
  };
}
export default connect(mapStateToProps)(Questions);
