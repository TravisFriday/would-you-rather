import React, { PureComponent } from "react";
import { Card, FormGroup, Form, Row, Container } from "react-bootstrap";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import User from "../components/User";
import { handleAddAnswer } from "../actions/shared";
import PropTypes from "prop-types";
import CountUp from "react-countup";

class QuestionInfo extends PureComponent {
  state = {
    selectedOption: "",
  };

  radioSelected = (e) => {
    this.setState({
      selectedOption: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveQuestionAnswer(this.state.selectedOption);
  };

  render() {
    const {
      question,
      quesAuthor,
      answer,
      totalVotes,
      percentOne,
      percentTwo,
    } = this.props;
    const { selectedOption } = this.state;

    return (
      <Container>
        <Row className="justify-content-md-center">
          <Card style={{ width: "50rem", textAlign: "center" }}>
            <Card.Header>
              <User id={quesAuthor.id} />
            </Card.Header>
            <Card.Body>
              <Card.Title>Would You Rather...</Card.Title>
              {answer ? (
                <div>
                  <FormGroup>
                    <FormGroup check="true" disabled>
                      <Form.Label check="true">
                        <Form.Control
                          type="radio"
                          checked={answer === "optionOne"}
                          readOnly
                        />{" "}
                        {question.optionOne.text}
                      </Form.Label>
                    </FormGroup>
                    <FormGroup check="true" disabled>
                      <Form.Label check="true">
                        <Form.Control
                          type="radio"
                          checked={answer === "optionTwo"}
                          readOnly
                        />{" "}
                        {question.optionTwo.text}
                      </Form.Label>
                    </FormGroup>
                  </FormGroup>
                  <div className="percentbars">
                    <div
                      className="percentbar-one"
                      style={{ width: `${percentOne}%` }}
                    >
                      {
                        // eslint-disable-next-line
                        percentOne == 0.0 ? "" : `${percentOne}%`
                      }
                    </div>
                    <div
                      className="percentbar-two"
                      style={{ width: `${percentTwo}%` }}
                    >
                      {
                        // eslint-disable-next-line
                        percentTwo == 0.0 ? "" : `${percentTwo}%`
                      }
                    </div>
                  </div>
                  <div className="totalvotes">
                    Total Votes:
                    <CountUp start={0} end={totalVotes} duration={2.5} />
                  </div>
                </div>
              ) : (
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup tag="fieldset">
                    <FormGroup>
                      <Form.Label>
                        <Form.Control
                          type="radio"
                          name="radio1"
                          value="optionOne"
                          onChange={this.radioSelected}
                        />{" "}
                        {question.optionOne.text}
                      </Form.Label>
                    </FormGroup>
                    <FormGroup>
                      <Form.Label>
                        <Form.Control
                          type="radio"
                          name="radio1"
                          value="optionTwo"
                          onChange={this.radioSelected}
                        />{" "}
                        {question.optionTwo.text}
                      </Form.Label>
                    </FormGroup>
                  </FormGroup>
                  <Button disabled={selectedOption === ""}>Submit</Button>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}

QuestionInfo.propTypes = {
  question: PropTypes.object,
  quesAuthor: PropTypes.object,
  answer: PropTypes.string,
  percentOne: PropTypes.string.isRequired,
  percentTwo: PropTypes.string.isRequired,
};

function precision(x) {
  return Number.parseFloat(x).toFixed(2);
}

function mapStateToProps({ questions, users, authedUser }, { match }) {
  const answers = users[authedUser].answers;
  let answer, percentOne, percentTwo, totalVotes;
  const { id } = match.params;
  const question = questions[id];
  if (answers.hasOwnProperty(question.id)) {
    answer = answers[question.id];
  }
  const quesAuthor = users[question.author];
  totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  percentOne = precision((question.optionOne.votes.length / totalVotes) * 100);
  percentTwo = precision((question.optionTwo.votes.length / totalVotes) * 100);
  return {
    question,
    quesAuthor,
    answer,
    totalVotes,
    percentOne,
    percentTwo,
  };
}

function mapDispatchToProps(dispatch, props) {
  const { id } = props.match.params;

  return {
    saveQuestionAnswer: (answer) => {
      dispatch(handleAddAnswer(id, answer));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionInfo);
