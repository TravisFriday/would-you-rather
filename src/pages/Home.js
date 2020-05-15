import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "../components/Question";
import { Tabs, Tab } from "react-mdl";
import { ListGroup } from "react-bootstrap";

class Home extends Component {
  state = {
    activeTab: 0,
  };

  toggleTab() {
    //renders unanswered questions
    const { unansweredQuestions, answeredQuestions } = this.props;
    if (this.state.activeTab === 0) {
      return (
        <ListGroup style={{ textAlign: "center", border: "none" }}>
          {unansweredQuestions.map((questionID) => (
            <Question id={questionID} key={questionID} />
          ))}
        </ListGroup>
      );
    }
    //renders answered questions
    else {
      return (
        <div>
          <ListGroup style={{ textAlign: "center", border: "none" }}>
            {answeredQuestions.map((questionID) => (
              <Question id={questionID} key={questionID} />
            ))}
          </ListGroup>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab style={{ color: "black", background: "white" }}>
            Unanswered Questions
          </Tab>
          <Tab style={{ color: "black", background: "white" }}>
            Answered Questions
          </Tab>
        </Tabs>
        <div>{this.toggleTab()}</div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const user = users[authedUser];
  const answeredQuestions = Object.keys(user.answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  return {
    unansweredQuestions: Object.keys(questions)
      .filter((qid) => !answeredQuestions.includes(qid))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    answeredQuestions,
  };
}

export default connect(mapStateToProps)(Home);
