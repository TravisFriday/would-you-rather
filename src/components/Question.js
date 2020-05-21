import React, { Component } from "react";
//import { formatQuestion } from "../utils/helper";
import { connect } from "react-redux";
import { ListGroup, Card, Button, Image } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Question extends Component {
  constuctor() {
    this.loadQuestionDetails = this.routeChange.bind(this);
  }
  loadQuestionDetails(e, questionId) {
    let path = `/question/` + questionId;
    this.props.history.push(path);
  }

  render() {
    const { question, auth, users } = this.props;
    const { id, author } = question;
    return (
      <ListGroup.Item key={id} style={{ border: "none" }}>
        <Card style={{ width: "40rem", margin: "auto" }}>
          <Image
            src={users[author].avatarURL}
            roundedCircle
            style={{ width: 50, margin: "auto", marginTop: "10px" }}
          />
          <Card.Body>
            <Card.Title>Would you rather ...</Card.Title>
            {/* <ul> */}
            <ListGroup.Item
              action
              variant="light"
              className={
                question.optionOne.votes.includes(auth) ? "optionSelected" : ""
              }
            >
              {question.optionOne.text}
            </ListGroup.Item>
            <ListGroup.Item
              action
              variant="light"
              className={
                question.optionTwo.votes.includes(auth) ? "optionSelected" : ""
              }
            >
              {question.optionTwo.text}
            </ListGroup.Item>
            {/* </ul> */}
            <Button
              style={{ marginTop: 15 }}
              variant="primary"
              onClick={(e) => this.loadQuestionDetails(e, id)}
            >
              View Poll
            </Button>
          </Card.Body>
        </Card>
      </ListGroup.Item>
    );
  }
}

function mapStateToProps(state, { id }) {
  return {
    users: state.users,
    question: state.questions[id],
    auth: state.authedUser,
  };
}

export default withRouter(connect(mapStateToProps, null)(Question));
